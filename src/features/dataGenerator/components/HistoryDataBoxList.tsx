"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components";
import { useExtendedForm } from "@/features/dataGenerator/providers";
import { DataBox } from "@/features/dataGenerator/components";
import { SolidBubble } from "@/icons";
import { useTranslate } from "@/features/language/providers/translate";

const HistoryDataBoxList = () => {
  const t = useTranslate("dataGeneratorPage").dataBox;

  const [dataList, setDataList] = useState<
    {
      name: string;
      values: string[];
    }[][]
  >([]);
  const { setOutput } = useExtendedForm();

  useEffect(() => {
    if (typeof window !== "undefined") {
      setDataList(JSON.parse(localStorage.getItem("HISTORY") ?? "[]") as any);
    }
  }, []);

  return (
    <>
      {dataList.reverse().map((data, index) => (
        <DataBox
          key={index}
          data={data}
          renderTools={
            <Button
              icon={SolidBubble}
              text={t.use}
              className="pl-2 pr-3.5 py-1.5"
              onClick={() => setOutput(data)}
            />
          }
        />
      ))}
    </>
  );
};

export default HistoryDataBoxList;
