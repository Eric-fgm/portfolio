"use client";
import { Fragment } from "react";
import ReactRanger, { useRanger } from "react-ranger";

interface RangeInputProps
  extends Omit<ReactRanger.RangerOptions, "min" | "max" | "stepSize"> {
  min?: number;
  max?: number;
  stepSize?: number;
}

const RangeInput: React.FC<RangeInputProps> = ({
  min = 0,
  max = 100,
  stepSize = 5,
  values,
  onChange = () => {},
  ...options
}) => {
  const { getTrackProps, handles } = useRanger({
    min,
    max,
    stepSize,
    values,
    onChange,
    ...options,
  });

  const handleClick = (event: React.MouseEvent) => {
    event.preventDefault();
    const x = event.nativeEvent.offsetX;
    const width = (event.target as HTMLDivElement).clientWidth;
    const inv = 1.0 / stepSize;
    const value = (x / width) * 100;

    if (values.length === 1) {
      onChange([Math.round(value * inv) / inv]);
    }
  };

  return (
    <div
      {...getTrackProps({
        style: {
          height: "6px",
          background: "var(--sortingpage-background)",
          borderRadius: "3px",
        },
      })}
      onClick={handleClick}
    >
      {handles.map(({ getHandleProps }, index) => {
        const { key, ...handleProps } = getHandleProps();

        return (
          <Fragment key={key}>
            <div
              style={{
                height: "100%",
                width: handleProps.style.left,
                background: "#3c4a64",
                borderRadius: "3px",
                pointerEvents: "none",
              }}
            />
            <div
              {...handleProps}
              style={{
                ...handleProps.style,
                width: "12px",
                height: "12px",
                background: "#fff",
                borderRadius: "100%",
                userSelect: "none",
              }}
              onClick={(e) => e.stopPropagation()}
            />
          </Fragment>
        );
      })}
    </div>
  );
};

export default RangeInput;
