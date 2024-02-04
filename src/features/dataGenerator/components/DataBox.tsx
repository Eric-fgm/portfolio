"use client";

import React, { useMemo, useRef, useState, useEffect } from "react";
import { Button } from "@/components";
import { SolidBubble } from "@/icons";
import {
  objectToString,
  objectToStringWithFormat,
} from "@/features/dataGenerator/helpers";
import { useTranslate } from "@/features/language/providers/translate";

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
    [isCustom, customFormat, data]
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
    <div className="relative p-4 min-w-0 flex flex-col gap-4 bg-[#1b3543] rounded-2xl overflow-hidden">
      <div className="flex items-center">
        <div className="flex gap-2">
          {data.map(({ name }, index) => (
            <div
              key={index}
              className={`px-2 py-1 rounded-full text-xs bg-[#3c6780] ${
                onChipClick ? "cursor-pointer" : "cursor-default"
              }`}
              onClick={() => onChipClick && onChipClick(name)}
            >
              {name}
            </div>
          ))}
        </div>
        <div className="ml-auto flex gap-2">
          <Button
            icon={SolidBubble}
            className="p-1.5"
            onClick={handleCopyToClipboard}
          />
          <Button
            icon={SolidBubble}
            className="p-1.5"
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
          className="px-3 py-2 text-sm font-medium bg-[#234355] rounded-lg w-full outline-none placeholder:text-[#658da4]"
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
        <p className="pt-2 pb-4 text-center text-sm text-[#9cbbcc]">
          {t.placeholder}
        </p>
      ) : (
        <div className={`${isExpanded ? "h-auto" : "max-h-[325px]"}`}>
          <pre ref={preRef} className="text-ellipsis overflow-hidden">
            {dataAsString}
          </pre>
          {!isExpanded && (
            <div
              className="absolute py-3 text-sm text-center bottom-0 w-full bg-gradient-to-t from-[#1b3543] cursor-pointer"
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
