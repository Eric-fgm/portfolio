"use client";
import { Button } from "@/components";
import { SolidBubble, SolidPause, SolidPlay, SolidReset } from "@/icons";
import { useContext } from "react";
import { GraphSettingsContext } from "@/features/graphAlgorithms/providers";

interface TopbarProps extends React.HTMLAttributes<HTMLDivElement> {}

const Topbar: React.FC<TopbarProps> = ({ className = "", ...props }) => {
  const { status, reset, clearWall, generateMaze, setStatus } =
    useContext(GraphSettingsContext);
  return (
    <div
      className={`pl-1 relative flex justify-between h-16 bg-graphpage-secondary rounded-2xl overflow-hidden ${className}`}
      {...props}
    >
      <div className="absolute left-0 w-1 h-full bg-graphpage-secondary shadow-start-over-graph z-10" />
      <div className="px-3 flex items-center gap-2 scroll-x-sortingpage">
        {/* <Button
          icon={SolidBubble}
          text="Entry Location"
          theme="lightBlue"
          className="pl-2 pr-3.5 py-1.5 flex-shrink-0"
        />
        <Button
          icon={SolidBubble}
          text="End Location"
          theme="lightBlue"
          className="pl-2 pr-3.5 py-1.5 flex-shrink-0"
        /> */}
        <Button
          icon={SolidBubble}
          text="Generate Maze"
          theme="lightBlue"
          className="pl-2 pr-3.5 py-1.5 flex-shrink-0"
          onClick={generateMaze}
        />
        <Button
          icon={SolidBubble}
          text="Clear Wall"
          theme="lightBlue"
          className="pl-2 pr-3.5 py-1.5 flex-shrink-0"
          onClick={clearWall}
        />
      </div>
      <div className="pl-1 pr-4 flex items-center gap-2 shadow-end-over-graph">
        {status === "started" ? (
          <Button
            icon={SolidPause}
            theme="lightBlue"
            className="p-1.5"
            onClick={() => setStatus("stopped")}
          />
        ) : (
          <Button
            icon={SolidPlay}
            theme="lightBlue"
            className="p-1.5"
            {...(status === "stopped" && {
              onClick: () => setStatus("started"),
            })}
          />
        )}
        <Button
          icon={SolidReset}
          theme="lightBlue"
          className="p-1.5"
          onClick={reset}
        />
      </div>
    </div>
  );
};

export default Topbar;
