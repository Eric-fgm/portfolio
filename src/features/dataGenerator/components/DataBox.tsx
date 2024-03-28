"use client";

import React, { useMemo, useRef, useState, useEffect } from "react";
import { Copy, RectangleEllipsis } from "lucide-react";
import { Button } from "@/components";
import {
  objectToString,
  objectToStringWithFormat,
} from "@/features/dataGenerator/helpers";
import { useTranslate } from "@/hooks";

interface DataBoxProps {
  renderTools?: React.ReactNode;
  data: { name: string; values: string[] }[];
  onChipClick?: (name: string) => void;
}

const DataBox: React.FC<DataBoxProps> = ({
  renderTools,
  data,
  onChipClick,
}) => {
  const t = useTranslate("dataGeneratorPage").dataBox;

  const preRef = useRef<HTMLPreElement>(null);
  const alreadyExpanded = useRef<boolean>(false);
  const [isExpanded, setIsExpanded] = useState(true);
  const [{ isCustom, customFormat }, setCustom] = useState({
    isCustom: false,
    customFormat: "",
  });

  const dataAsString = useMemo(
    () =>
      isCustom
        ? objectToStringWithFormat(data, customFormat)
        : objectToString(data),
    [isCustom, customFormat, data],
  );

  useEffect(() => {
    if (!preRef.current || alreadyExpanded.current) return;
    if (preRef.current.clientHeight > 369) {
      setIsExpanded(false);
    }
  }, [dataAsString]);

  const handleCopyToClipboard = () =>
    navigator.clipboard.writeText(dataAsString).catch((error) => error);

  return (
    <div className="relative flex min-w-0 flex-col gap-4 overflow-hidden rounded-2xl bg-[#1b3543] p-4">
      <div className="no-scrollbar flex items-center gap-4 overflow-auto">
        <div className="flex gap-2">
          {data.map(({ name }, index) => (
            <div
              key={index}
              className={`rounded-full bg-[#3c6780] px-2 py-1 text-xs ${
                onChipClick ? "cursor-pointer" : "cursor-default"
              }`}
              onClick={() => onChipClick && onChipClick(name)}
            >
              {name}
            </div>
          ))}
        </div>
        <div className="ml-auto flex gap-2">
          <Button icon={Copy} className="p-2" onClick={handleCopyToClipboard} />
          <Button
            icon={RectangleEllipsis}
            className="p-2"
            onClick={() =>
              setCustom(({ customFormat, isCustom }) => ({
                customFormat,
                isCustom: !isCustom,
              }))
            }
          />
          {renderTools}
        </div>
      </div>
      {isCustom && (
        <textarea
          className="w-full rounded-lg bg-[#234355] px-3 py-2 text-sm font-medium outline-none placeholder:text-[#658da4]"
          onChange={(event) => {
            const value = event.currentTarget.value;
            setCustom(({ isCustom }) => ({
              isCustom,
              customFormat: value,
            }));
          }}
        ></textarea>
      )}
      {isCustom && !customFormat ? (
        <p className="pb-4 pt-2 text-center text-sm text-[#9cbbcc]">
          {t.placeholder}
        </p>
      ) : (
        <div className={`${isExpanded ? "h-auto" : "max-h-[325px]"}`}>
          <pre ref={preRef} className="overflow-hidden text-ellipsis">
            {dataAsString}
          </pre>
          {!isExpanded && (
            <div
              className="absolute bottom-0 w-full cursor-pointer bg-gradient-to-t from-[#1b3543] py-3 text-center text-sm"
              onClick={() => {
                setIsExpanded(true);
                alreadyExpanded.current = true;
              }}
            >
              {t.more}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default React.memo(DataBox);
