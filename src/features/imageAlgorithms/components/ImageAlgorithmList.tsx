"use client";
import { useTranslate } from "@/hooks";
import { useImageSettings } from "@/features/imageAlgorithms/providers/ImageSettingsProvider";
import { ChevronsUpDown, Image } from "lucide-react";
import ImageAlgorithmItem from "./ImageAlgorithmItem";

interface ImageAlgorithmListProps extends React.ComponentProps<"div"> { }

const algorithms = [
  { key: "chromaticAdaptation", name: "Adaptacja Chromatyczna", icon: Image },
  { key: "adaptiveGamma", name: "Korekcja Gamma", icon: Image },
  { key: "histogramEqualization", name: "Histogram Equalization", icon: Image },
] as const;

const ImageAlgorithmList: React.FC<ImageAlgorithmListProps> = ({
  className = "",
  ...props
}) => {
  // const t = useTranslate("mathsPage").interpolation;
  const { algorithm, setAlgorithm, setImageSrc, images } = useImageSettings();

  return (
    <div
      className={`relative flex items-center justify-center gap-4 ${className}`}
      {...props}
    >
      <ul className="no-scrollbar -mx-4 flex gap-4 overflow-x-auto px-4 py-1">
        {algorithms.map(({ key, name, icon }) => (
          <ImageAlgorithmItem
            key={key}
            icon={icon}
            name={name}
            isActive={algorithm === key}
            onClick={() => setAlgorithm(key)}
          />
        ))}
      </ul>
      <div className="relative h-13">
        <select
          onChange={({ target }) => setImageSrc(target.value)}
          className="h-full select-none appearance-none rounded-2xl bg-sortingpage-secondary pl-5 pr-7 text-sm font-medium outline-none"
        >
          {images.map(({ name, src }) => (
            <option value={src} key={name} className="p-1 text-sm font-medium">
              {name}
            </option>
          ))}
        </select>
        <ChevronsUpDown
          className="pointer-events-none absolute right-2 top-1/2 -mt-2 text-muted"
          width={16}
          height={16}
        />
      </div>
    </div>
  );
};

export default ImageAlgorithmList;
