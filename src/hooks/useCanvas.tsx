import { initCanvas } from "@/helpers/canvas";
import { useCallback, useMemo, useRef } from "react";

interface CanvasProps extends React.CanvasHTMLAttributes<HTMLCanvasElement> {
  draw: (canvas: HTMLCanvasElement) => void;
  width: number;
  height: number;
}

const useCanvas = ({ draw, className = "", ...restProps }: CanvasProps) => {
  const canvasRef = useRef<HTMLCanvasElement>();

  useMemo(() => canvasRef.current && draw(canvasRef.current), [draw]);

  const onCanvasRender = useCallback((canvas: HTMLCanvasElement) => {
    if (!canvas) return;
    const { width, height } = restProps;
    canvasRef.current = canvas;
    initCanvas(canvas, width, height);
    draw(canvas);
  }, []);

  return {
    canvas: (
      <canvas
        ref={onCanvasRender}
        className={`${className} select-none`}
        {...restProps}
      ></canvas>
    ),
    reference: canvasRef,
  };
};

export default useCanvas;
