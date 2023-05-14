"use client";
import { Button } from "@/components";
import { SolidPause, SolidPlay, SolidReset, SolidSorting } from "@/icons";
import { useGraphSettings } from "@/features/graphAlgorithms/providers/graphSettings";

interface FloatingButtonsProps {}

const FloatingButtons: React.FC<FloatingButtonsProps> = () => {
  const { status, changeStatus, toggleSettings } = useGraphSettings();

  return (
    <div className="fixed left-6 bottom-5 flex gap-2 translate-animation z-30 xl:hidden">
      <Button
        icon={SolidSorting}
        className="p-3"
        theme="lightBlue"
        onClick={toggleSettings}
        rounded
      />
      {status === "started" ? (
        <Button
          icon={SolidPause}
          className="p-3"
          theme="lightBlue"
          onClick={() => changeStatus("stopped")}
          rounded
        />
      ) : (
        <Button
          icon={SolidPlay}
          className="p-3"
          theme="lightBlue"
          onClick={() => changeStatus("started")}
          rounded
        />
      )}
      <Button
        icon={SolidReset}
        className="p-3"
        theme="lightBlue"
        onClick={() => changeStatus("restart")}
        rounded
      />
    </div>
  );
};

export default FloatingButtons;
