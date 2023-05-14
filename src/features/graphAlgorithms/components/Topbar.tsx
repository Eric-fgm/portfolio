"use client";
import { Button } from "@/components";
import { SolidBubble, SolidPause, SolidPlay, SolidReset } from "@/icons";
import { useContext } from "react";
import { GraphSettingsContext } from "@/features/graphAlgorithms/providers/graphSettings";
import { useTranslate } from "@/features/language/providers/translate";

interface TopbarProps extends React.HTMLAttributes<HTMLDivElement> {}

const Topbar: React.FC<TopbarProps> = ({ className = "", ...props }) => {
  const { status, changeStatus, clearDisabled, generateDisabled } =
    useContext(GraphSettingsContext);
  const t = useTranslate("graphPage");

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
          text={t.generateMaze}
          theme="lightBlue"
          className="pl-2 pr-3.5 py-1.5 flex-shrink-0"
          onClick={generateDisabled}
        />
        <Button
          icon={SolidBubble}
          text={t.clearWall}
          theme="lightBlue"
          className="pl-2 pr-3.5 py-1.5 flex-shrink-0"
          onClick={clearDisabled}
        />
      </div>
      <div className="pl-1 pr-4 flex items-center gap-2 shadow-end-over-graph">
        {status === "started" ? (
          <Button
            icon={SolidPause}
            theme="lightBlue"
            className="p-1.5"
            onClick={() => changeStatus("stopped")}
          />
        ) : (
          <Button
            icon={SolidPlay}
            theme="lightBlue"
            className="p-1.5"
            onClick={() => changeStatus("started")}
          />
        )}
        <Button
          icon={SolidReset}
          theme="lightBlue"
          className="p-1.5"
          onClick={() => changeStatus("restart")}
        />
      </div>
    </div>
  );
};

export default Topbar;
