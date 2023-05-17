"use client";
import { Button } from "@/components";
import { useSortingSettings } from "@/features/sortingAlgorithms/providers/sortingSettings";
import { SolidPause, SolidPlay, SolidSorting } from "@/icons";

interface FloatingButtonsProps extends React.ComponentProps<"div"> {}

const FloatingButtons: React.FC<FloatingButtonsProps> = ({
  className = "",
  ...props
}) => {
  const { status, changeStatus, toggleSettings } = useSortingSettings();
  return (
    <div
      className={`fixed left-6 bottom-5 flex gap-2 slide-bottom-in z-30 xl:hidden ${className}`}
      {...props}
    >
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
