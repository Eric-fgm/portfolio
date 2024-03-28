"use client";
import { Button } from "@/components";
import { GraphSettingsContext } from "@/features/graphAlgorithms/providers/graphSettings";
import { useTranslate } from "@/hooks";
import { CircleX, Pause, Play, RotateCcw, Scan } from "lucide-react";
import { useContext } from "react";

interface TopbarProps extends React.HTMLAttributes<HTMLDivElement> {}

const Topbar: React.FC<TopbarProps> = ({ className = "", ...props }) => {
  const { status, changeStatus, clearDisabled, generateDisabled } =
    useContext(GraphSettingsContext);
  const t = useTranslate("graphPage");

  return (
    <div
      className={`relative flex h-16 items-center rounded-2xl bg-graphpage-secondary ${className}`}
      {...props}
    >
      <div className="absolute left-0 z-10 h-9 w-4 gradient-from-graphpage-secondary" />
      <div className="no-scrollbar flex items-center gap-2 overflow-x-auto px-4">
        <Button
          icon={Scan}
          text={t.generateMaze}
          className="flex-shrink-0 py-2 pl-2 pr-3.5"
          onClick={generateDisabled}
        />
        <Button
          icon={CircleX}
          text={t.clearWall}
          className="flex-shrink-0 py-2 pl-2 pr-3.5"
          onClick={clearDisabled}
        />
      </div>
      <div className="relative ml-auto flex items-center gap-2 pr-4">
        <div className="absolute -left-4 top-0 z-10 h-9 w-4 gradient-to-graphpage-secondary" />
        {status === "started" ? (
          <Button
            icon={Pause}
            className="p-2"
            onClick={() => changeStatus("stopped")}
          />
        ) : (
          <Button
            icon={Play}
            className="p-2"
            onClick={() => changeStatus("started")}
          />
        )}
        <Button
          icon={RotateCcw}
          className="p-2"
          onClick={() => changeStatus("restart")}
        />
      </div>
    </div>
  );
};

export default Topbar;
