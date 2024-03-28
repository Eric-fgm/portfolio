"use client";
import { useGraphSettings } from "@/features/graphAlgorithms/providers/graphSettings";

interface FloatingButtonsProps extends React.ComponentProps<"div"> {}

const FloatingButtons: React.FC<FloatingButtonsProps> = ({
  className = "",
  ...props
}) => {
  const { status, changeStatus, toggleSettings } = useGraphSettings();

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
      )}
      <Button
        icon={}
        className="p-3"
        onClick={() => changeStatus("restart")}
        rounded
      /> */}
    </div>
  );
};

export default FloatingButtons;
