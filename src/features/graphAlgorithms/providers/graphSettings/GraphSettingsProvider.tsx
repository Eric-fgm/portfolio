"use client";
import { mazePath } from "@/features/graphAlgorithms/helpers";
import type { GraphSettingsProps } from "@/features/graphAlgorithms/providers/graphSettings";
import {
  GraphSettingsContext,
  defaultProps,
} from "@/features/graphAlgorithms/providers/graphSettings";
import { useCallback, useState } from "react";

interface GraphSettingsProvider {
  children: React.ReactNode;
}

const GraphSettingsProvider: React.FC<GraphSettingsProvider> = ({
  children,
}) => {
  const [isOpened, setIsOpened] = useState<GraphSettingsProps["isOpened"]>(
    defaultProps.isOpened,
  );
  const [type, setType] = useState<GraphSettingsProps["type"]>(
    defaultProps.type,
  );
  const [status, setStatus] = useState<GraphSettingsProps["status"]>(
    defaultProps.status,
  );
  const [disabled, setDisabled] = useState<GraphSettingsProps["disabled"]>(
    defaultProps.disabled,
  );

  const changeStatus = useCallback((status: GraphSettingsProps["status"]) => {
    if (status === "started") setIsOpened(false);
    setStatus(status);
  }, []);

  const changeType = useCallback((type: GraphSettingsProps["type"]) => {
    setType(type);
    setStatus("stopped");
  }, []);

  const changeDisabled = useCallback(
    (
      param:
        | GraphSettingsProps["disabled"]
        | ((
            nodes: GraphSettingsProps["disabled"],
          ) => GraphSettingsProps["disabled"]),
    ) => {
      if (status === "started") return;
      if (typeof param === "function")
        setDisabled((prevNodes) => {
          return param({ ...prevNodes });
        });
      else setDisabled(param);
    },
    [status],
  );

  const generateDisabled = useCallback(() => {
    const disabledEntity: GraphSettingsProps["disabled"] = {};
    mazePath.forEach(
      ([y, x]) =>
        (disabledEntity[`${x}.${y}`] = { x, y, type: "wall", size: 0 }),
    );
    changeDisabled(disabledEntity);
  }, [changeDisabled]);

  const clearDisabled = useCallback(() => {
    changeDisabled({});
  }, [changeDisabled]);

  const toggleSettings = useCallback(
    () => setIsOpened((wasOpened) => !wasOpened),
    [],
  );

  const closeSettings = useCallback(() => setIsOpened(false), []);

  return (
    <GraphSettingsContext.Provider
      value={{
        isOpened,
        status,
        type,
        disabled,
        changeDisabled,
        changeStatus,
        changeType,
        clearDisabled,
        generateDisabled,
        toggleSettings,
        closeSettings,
      }}
    >
      {children}
    </GraphSettingsContext.Provider>
  );
};

export default GraphSettingsProvider;
