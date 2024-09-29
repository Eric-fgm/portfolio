"use client";
import { useTranslate } from "@/hooks";
import { useImageSettings } from "@/features/imageAlgorithms/providers/ImageSettingsProvider";
import { ChevronsUpDown, ScanEye, Shapes, BarChart } from "lucide-react";
import ImageAlgorithmItem from "@/features/imageAlgorithms/components/ImageAlgorithmItem";

interface ImageAlgorithmListProps extends React.ComponentProps<"div"> { }

const ImageAlgorithmList: React.FC<ImageAlgorithmListProps> = ({
  className = "",
  ...props
}) => {
  const t = useTranslate("mathsPage").images;
  const { algorithm, setAlgorithm, setImageSrc, images } = useImageSettings();

  const iconsMap = {
    "chromaticAdaptation": ScanEye,
    "adaptiveGamma": Shapes,
    "histogramEqualization": BarChart,
  }

  return (
    <div
      className={`relative flex items-center justify-center gap-4 ${className}`}
      {...props}
    >
      <ul className="no-scrollbar -mx-4 flex gap-4 overflow-x-auto px-4 py-1">
        {t.algorithms.map(({ key, name }) => (
          <ImageAlgorithmItem
            key={key}
            icon={iconsMap[key as never]}
            name={name}
            isActive={algorithm === key}
            onClick={() => setAlgorithm(key as never)}
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
