"use client";
import { Button } from "@/components";
import { SolidPause, SolidPlay, SolidSorting } from "@/icons";
import { useContext } from "react";
import { SortingSettingsContext } from "../providers/sortingSettings";

interface FloatingButtonsProps {}

const FloatingButtons: React.FC<FloatingButtonsProps> = () => {
  const { status, changeStatus, toggleSettings } = useContext(
    SortingSettingsContext
  );

  return (
    <div className="fixed left-6 bottom-5 flex gap-2 z-50 xl:hidden">
      <Button
        icon={SolidSorting}
        className="p-2 rounded-full"
        onClick={toggleSettings}
      />
      {status === "started" ? (
        <Button
          icon={SolidPause}
          className="p-2"
          onClick={() => changeStatus("stopped")}
        />
      ) : (
        <Button
          icon={SolidPlay}
          className="p-2"
          {...(status === "stopped" && {
            onClick: () => changeStatus("started"),
          })}
        />
      )}
    </div>
  );
};

export default FloatingButtons;
