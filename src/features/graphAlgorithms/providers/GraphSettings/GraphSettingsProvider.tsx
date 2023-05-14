"use client";
import {
  GraphSettingsContext,
  defaultProps,
} from "@/features/graphAlgorithms/providers/graphSettings";
import type { GraphSettingsProps } from "@/features/graphAlgorithms/providers/graphSettings";
import { useCallback, useState } from "react";
import { mazePath } from "../../helpers";

interface GraphSettingsProvider {
  children: React.ReactNode;
}

const GraphSettingsProvider: React.FC<GraphSettingsProvider> = ({
  children,
}) => {
  const [isOpened, setIsOpened] = useState<GraphSettingsProps["isOpened"]>(
    defaultProps.isOpened
  );
  const [type, setType] = useState<GraphSettingsProps["type"]>(
    defaultProps.type
  );
  const [status, setStatus] = useState<GraphSettingsProps["status"]>(
    defaultProps.status
  );
  const [disabled, setDisabled] = useState<GraphSettingsProps["disabled"]>(
    defaultProps.disabled
  );

  const changeStatus = useCallback(
    (status: GraphSettingsProps["status"]) => setStatus(status),
    []
  );

  const changeType = useCallback((type: GraphSettingsProps["type"]) => {
    setType(type);
    setStatus("stopped");
  }, []);

  const generateDisabled = useCallback(() => {
    if (status === "started") return;
    const disabledEntity: GraphSettingsProps["disabled"] = {};
    mazePath.forEach(([x, y]) => (disabledEntity[`${x}.${y}`] = { x, y }));
    setDisabled(disabledEntity);
  }, [status]);

  const clearDisabled = useCallback(() => {
    if (status === "started") return;
    setDisabled({});
  }, [status]);

  const toggleSettings = useCallback(
    () => setIsOpened((wasOpened) => !wasOpened),
    []
  );

  return (
    <GraphSettingsContext.Provider
      value={{
        isOpened,
        status,
        type,
        disabled,
        setDisabled,
        changeStatus,
        changeType,
        clearDisabled,
        generateDisabled,
        toggleSettings,
      }}
    >
      {children}
    </GraphSettingsContext.Provider>
  );
};

export default GraphSettingsProvider;
