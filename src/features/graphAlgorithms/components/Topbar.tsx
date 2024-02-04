"use client";
import { Button } from "@/components";
import { GraphSettingsContext } from "@/features/graphAlgorithms/providers/graphSettings";
import { useTranslate } from "@/features/language/providers/translate";
import { SolidBubble, SolidPause, SolidPlay, SolidReset } from "@/icons";
import { useContext } from "react";

interface TopbarProps extends React.HTMLAttributes<HTMLDivElement> {}

const Topbar: React.FC<TopbarProps> = ({ className = "", ...props }) => {
  const { status, changeStatus, clearDisabled, generateDisabled } =
    useContext(GraphSettingsContext);
  const t = useTranslate("graphPage");

  return (
    <div
      className={`relative flex items-center h-16 bg-graphpage-secondary rounded-2xl ${className}`}
      {...props}
    >
      <div className="absolute left-0 w-4 h-9 gradient-from-graphpage-secondary z-10" />
      <div className="px-4 flex items-center gap-2 no-scrollbar overflow-x-auto">
        {/* <Button
          icon={SolidBubble}
          text="Entry Location"
          theme="lightBlue"
          className="pl-2 pr-3.5 py-1.5 flex-shrink-0"
        />`
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
      <div className="relative ml-auto pr-4 flex items-center gap-2">
        <div className="absolute -left-4 top-0 w-4 h-9 gradient-to-graphpage-secondary z-10" />
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
