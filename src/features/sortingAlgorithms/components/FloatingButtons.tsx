"use client";
import { Button } from "@/components";
import { useSortingSettings } from "@/features/sortingAlgorithms/providers/sortingSettings";

interface FloatingButtonsProps extends React.ComponentProps<"div"> {}

const FloatingButtons: React.FC<FloatingButtonsProps> = ({
  className = "",
  ...props
}) => {
  // const { status, changeStatus, toggleSettings } = useSortingSettings();
  return (
    <div
      className={`slide-bottom-in fixed bottom-5 left-6 z-30 flex gap-2 xl:hidden ${className}`}
      {...props}
    >
      {/* <Button
        icon={}
        className="p-3"
        onClick={toggleSettings}
        rounded
      />
      {status === "started" ? (
        <Button
          icon={}
          className="p-3"
          onClick={() => changeStatus("stopped")}
          rounded
        />
      ) : (
        <Button
          icon={}
          className="p-3"
          onClick={() => changeStatus("started")}
          rounded
        />
      )} */}
    </div>
  );
};

export default FloatingButtons;
