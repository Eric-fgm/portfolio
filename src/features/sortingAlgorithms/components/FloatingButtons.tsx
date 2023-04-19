"use client";
import { Button } from "@/components";
import { SolidPause, SolidPlay, SolidSorting } from "@/icons";
import { useContext } from "react";
import { SortingSettingsContext } from "../providers";

interface FloatingButtonsProps {}

const FloatingButtons: React.FC<FloatingButtonsProps> = () => {
  const { status, handleChangeStatus, handleToggleSettings } = useContext(
    SortingSettingsContext
  );

  return (
    <div className="fixed left-6 bottom-5 flex gap-2 z-50 xl:hidden">
      <Button
        icon={SolidSorting}
        className="p-2 rounded-full"
        onClick={handleToggleSettings}
      />
      {status === "started" ? (
        <Button
          icon={SolidPause}
          className="p-2 rounded-full"
          onClick={() => handleChangeStatus("stopped")}
        />
      ) : (
        <Button
          icon={SolidPlay}
          className="p-2 rounded-full"
          {...(status === "stopped" && {
            onClick: () => handleChangeStatus("started"),
          })}
        />
      )}
    </div>
  );
};

export default FloatingButtons;
