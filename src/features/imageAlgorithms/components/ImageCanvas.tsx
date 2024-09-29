"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Loader } from "lucide-react";
import {
  gammaCorrectionAlgorithm,
  histogramEqualisationAlgorithm,
  chromaticAdaptationAlgorithm,
} from "../algorithms";
import { useImageSettings } from "../providers/ImageSettingsProvider";

const algorithmsMap = {
  chromaticAdaptation: chromaticAdaptationAlgorithm,
  histogramEqualization: histogramEqualisationAlgorithm,
  adaptiveGamma: (imageData: ImageData) =>
    gammaCorrectionAlgorithm(imageData, 2),
} as const;

interface ImageCanvasProps extends React.ComponentProps<"div"> { }

const ImageCanvas: React.FC<ImageCanvasProps> = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const resizeRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDraging] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const { algorithm, imageSrc } = useImageSettings();

  const drawCanvasImage = (selectedAlgorithm: (data: ImageData) => ImageData) => {
    const canvas = canvasRef.current;
    if (!canvas || !imageRef.current) return;
    const imageWidth = imageRef.current.width;
    const imageHeight = imageRef.current.height;

    canvas.width = imageWidth;
    canvas.height = imageHeight;
    const context = canvas.getContext("2d");
    if (!context || !imageHeight) return;
    context.drawImage(imageRef.current, 0, 0, imageWidth, imageHeight);

    const imageData = context.getImageData(0, 0, imageWidth, imageHeight);

    context.putImageData(selectedAlgorithm(imageData), 0, 0);

    setIsLoading(false)
  };

  const handleMouseDown = useCallback(() => {
    setIsDraging(true);
  }, []);

  const handleMouseUp = useCallback(() => {
    setIsDraging(false);
  }, []);

  useEffect(() => {
    setIsLoading(true)
  }, [imageSrc]);

  useEffect(() => {
    drawCanvasImage(algorithmsMap[algorithm]);
  }, [algorithm]);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (resizeRef.current && imageRef.current) {
        const { left } = resizeRef.current.getBoundingClientRect();
        const diffX = Math.max(
          0,
          Math.min(imageRef.current.width, event.clientX - left),
        );
        resizeRef.current.style.width = `${diffX}px`;
      }
    };
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    }

    return () => {
      if (isDragging) {
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("mouseup", handleMouseUp);
      }
    };
  }, [isDragging]);

  return (
    <div className={`relative w-full `}>
      <div className={`${isLoading && 'invisible'}`}>
        <div className="absolute h-full w-full">
          <img
            ref={imageRef}
            onLoad={() => {
              drawCanvasImage(algorithmsMap[algorithm]);
            }}
            src={imageSrc}
            className="pointer-events-none absolute w-full select-none object-cover opacity-0"
          />
          <div ref={resizeRef} className="relative h-full w-1/2">
            <img
              src={imageSrc}
              className="pointer-events-none h-full w-full select-none object-cover object-left"
            />
            <div
              onMouseDown={handleMouseDown}
              className="absolute right-0 top-0 h-full w-1 cursor-move select-none bg-[#ffffff93]"
            ></div>
          </div>
        </div>
        <canvas ref={canvasRef} />
      </div>
      {isLoading && <div className="absolute top-24 left-0 opacity-75 w-full"><Loader className="animate-spin mx-auto" /></div>}
    </div>
  );
};

export default ImageCanvas;
