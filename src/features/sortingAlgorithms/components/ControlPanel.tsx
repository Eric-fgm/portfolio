"use client";
import { Button, FormField, Input, RangeInput } from "@/components";
import { useTranslate } from "@/features/language/providers/translate";
import { Wrapper } from "@/features/sortingAlgorithms";
import { generateRandomValues } from "@/features/sortingAlgorithms/helpers";
import { useSortingSettings } from "@/features/sortingAlgorithms/providers/sortingSettings";
import { SolidPause, SolidPlay, SolidReset } from "@/icons";

interface ControlPanelProps extends React.ComponentProps<"div"> {}

const ControlPanel: React.FC<ControlPanelProps> = ({
  className = "",
  ...props
}) => {
  const t = useTranslate("sortingPage");
  const {
    initialList,
    isOpened,
    type,
    speed,
    status,
    changeSpeed,
    changeStatus,
    setInitialList,
  } = useSortingSettings();

  return (
    <div
      className={`fixed pl-6 left-0 bottom-[76px] transition-transform z-30 xl:static xl:pl-0 xl:transition-none ${
        isOpened ? "" : "-translate-x-full xl:translate-x-0"
      } ${className}`}
      {...props}
    >
      <div className="flex flex-col gap-4 w-56">
        <Wrapper title={t.settings.title} className="shadow-2xl xl:shadow-none">
          <div className="flex flex-col gap-3">
            <FormField name={t.settings.size}>
              <Input
                type="number"
                placeholder="2-500"
                value={initialList.length}
                onChange={(value) =>
                  setInitialList(generateRandomValues(value))
                }
              />
            </FormField>
            <FormField name={t.settings.speed}>
              <RangeInput values={speed} onChange={changeSpeed} />
            </FormField>
            <div className="flex gap-2 h-9">
              {status === "started" ? (
                <Button
                  icon={SolidPause}
                  className="px-1.5"
                  onClick={() => changeStatus("stopped")}
                />
              ) : (
                <Button
                  icon={SolidPlay}
                  className="px-1.5"
                  onClick={() => changeStatus("started")}
                />
              )}
              <Button
                icon={SolidReset}
                text={t.settings.restart}
                className="px-2 flex-1"
                iconSize={21}
                onClick={() =>
                  setInitialList(generateRandomValues(initialList.length))
                }
              />
            </div>
          </div>
        </Wrapper>
        <Wrapper
          title={t.description.title}
          className="text-xs shadow-2xl xl:shadow-none"
        >
          <div
            dangerouslySetInnerHTML={{ __html: t.algorithms[type].description }}
          />
        </Wrapper>
      </div>
    </div>
  );
};

export default ControlPanel;
