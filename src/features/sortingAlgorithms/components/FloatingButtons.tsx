"use client";
import { Button } from "@/components";
import { SolidPause, SolidPlay, SolidSorting } from "@/icons";
import { useSortingSettings } from "@/features/sortingAlgorithms/providers/sortingSettings";

interface FloatingButtonsProps {}

const FloatingButtons: React.FC<FloatingButtonsProps> = () => {
  const { status, changeStatus, toggleSettings } = useSortingSettings();
  return (
    <div className="fixed left-6 bottom-5 flex gap-2 translate-animation z-30 xl:hidden">
      <Button
        icon={SolidSorting}
        className="p-3"
        onClick={toggleSettings}
        rounded
      />
      {status === "started" ? (
        <Button
          icon={SolidPause}
          className="p-3"
          onClick={() => changeStatus("stopped")}
          rounded
        />
      ) : (
        <Button
          icon={SolidPlay}
          className="p-3"
          onClick={() => changeStatus("started")}
          rounded
        />
      )}
    </div>
  );
};

export default FloatingButtons;
