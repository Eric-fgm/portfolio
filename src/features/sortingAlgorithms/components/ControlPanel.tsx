"use client";
import { Button, FormField, Input, RangeInput } from "@/components";
import { Wrapper } from "@/features/sortingAlgorithms";
import { SolidPause, SolidPlay, SolidReset } from "@/icons";
import { useContext } from "react";
import { SortingSettingsContext } from "@/features/sortingAlgorithms/providers";
import { sortSpecification } from "@/features/sortingAlgorithms/helpers";

interface ControlPanelProps {}

const ControlPanel: React.FC<ControlPanelProps> = () => {
  const {
    isOpened,
    type,
    size,
    speed,
    status,
    handleChangeSpeed,
    handleChangeSize,
    handleChangeStatus,
    handleChangeSeed,
  } = useContext(SortingSettingsContext);

  return (
    <div
      className={`fixed pl-6 left-0 bottom-[68px] flex flex-col gap-4 w-56 transition-transform z-50 xl:static xl:pl-0 xl:transition-none xl:z-10 ${
        isOpened ? "" : "-translate-x-full xl:translate-x-0"
      }`}
    >
      <Wrapper title="SETTINGS" className="shadow-2xl xl:shadow-none">
        <div className="flex flex-col gap-3">
          <FormField name="Size">
            <Input
              type="number"
              placeholder="1-500"
              value={size}
              onChange={handleChangeSize}
            />
          </FormField>
          <FormField name="Speed">
            <RangeInput values={speed} onChange={handleChangeSpeed} />
          </FormField>
          <div className="flex gap-2 h-9">
            {status === "started" ? (
              <Button
                icon={SolidPause}
                className="px-1.5"
                onClick={() => handleChangeStatus("stopped")}
              />
            ) : (
              <Button
                icon={SolidPlay}
                className="px-1.5"
                {...(status === "stopped" && {
                  onClick: () => handleChangeStatus("started"),
                })}
              />
            )}
            <Button
              icon={SolidReset}
              text="Randomize"
              className="px-2 flex-1"
              iconSize={21}
              onClick={handleChangeSeed}
            />
          </div>
        </div>
      </Wrapper>
      <Wrapper
        title="DESCRIPTION"
        className="text-xs shadow-2xl xl:shadow-none"
      >
        <div
          dangerouslySetInnerHTML={{ __html: sortSpecification[type].desc }}
        />
        {/* <p className="text-xs">
          Modi reiciendis illo velit similique blanditiis cumque architecto
          pariatur, enim fuga molestias repellat ducimus voluptates
        </p>
        <p className="mt-1 text-xs">
          Complexity - O(n<sup>2</sup>)<br />
          Space - O(1)
        </p> */}
      </Wrapper>
    </div>
  );
};

export default ControlPanel;
