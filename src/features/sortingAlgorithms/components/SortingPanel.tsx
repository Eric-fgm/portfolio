"use client";
import { Button, Card, FormField, Input, RangeInput } from "@/components";
import { generateRandomValues } from "@/features/sortingAlgorithms/helpers";
import { useSortingSettings } from "@/features/sortingAlgorithms/providers/sortingSettings";
import { useTranslate } from "@/hooks";
import { Pause, Play, RotateCcw } from "lucide-react";

interface SortingPanelProps extends React.ComponentProps<"div"> {}

const SortingPanel: React.FC<SortingPanelProps> = ({ className = "" }) => {
  const t = useTranslate("sortingPage");
  const {
    initialList,
    type,
    speed,
    status,
    changeSpeed,
    changeStatus,
    setInitialList,
  } = useSortingSettings();

  return (
    <div className="flex flex-col gap-4">
      <Card title={t.settings.title} className="shadow-2xl xl:shadow-none">
        <div className="flex flex-col gap-3">
          <FormField name={t.settings.size}>
            <Input
              type="number"
              placeholder="2-500"
              value={initialList.length}
              onChange={(value) => setInitialList(generateRandomValues(value))}
            />
          </FormField>
          <FormField name={t.settings.speed}>
            <RangeInput values={speed} onChange={changeSpeed} />
          </FormField>
          <div className="flex h-9 gap-2">
            {status === "started" ? (
              <Button
                icon={Pause}
                className="px-2"
                onClick={() => changeStatus("stopped")}
              />
            ) : (
              <Button
                icon={Play}
                className="px-2"
                onClick={() => changeStatus("started")}
              />
            )}
            <Button
              icon={RotateCcw}
              text={t.settings.restart}
              className="flex-1 px-2"
              iconSize={21}
              onClick={() =>
                setInitialList(generateRandomValues(initialList.length))
              }
            />
          </div>
        </div>
      </Card>
      <Card
        title={t.description.title}
        className="text-xs shadow-2xl xl:shadow-none"
      >
        <div
          dangerouslySetInnerHTML={{
            __html: t.algorithms[type].description,
          }}
        />
      </Card>
    </div>
    // {/* <FloatingButtons className="animation-delay-300" /> */}
  );
};

export default SortingPanel;
