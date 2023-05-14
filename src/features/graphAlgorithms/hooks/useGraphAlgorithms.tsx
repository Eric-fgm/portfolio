import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { GraphAlgorithmTypes, GraphPathNode } from "../helpers";
import graphAlgorithms from "../algorithm";

export interface UseGraphAlgorithmsProps {
  type: GraphAlgorithmTypes;
  status: "started" | "stopped" | "completed" | "restart";
  disabled: Record<any, GraphPathNode>;
  changeStatus: (payload: UseGraphAlgorithmsProps["status"]) => void;
}

const useGraphAlgorithms = ({
  type,
  status,
  disabled,
  changeStatus,
}: UseGraphAlgorithmsProps) => {
  const [nodes, setNodes] = useState<GraphPathNode[]>([]);
  const [path, setPath] = useState<GraphPathNode[]>([]);
  const [algorithm, setAlgorithm] = useState(graphAlgorithms[type](disabled));

  useEffect(() => {
    setNodes([]);
    setPath([]);
    setAlgorithm(graphAlgorithms[type](disabled));
  }, [type, disabled]);

  useEffect(() => {
    if (status === "restart") {
      setNodes([]);
      setPath([]);
      setAlgorithm(graphAlgorithms[type](disabled));
    }
  }, [status, type, disabled]);

  useEffect(() => {
    let intervalInstance: ReturnType<typeof setInterval> | null = null;
    if (status === "started") {
      intervalInstance = setInterval(() => {
        const { value, done } = algorithm.next();
        if (done) {
          changeStatus("completed");
          setPath([...value]);
          setAlgorithm(graphAlgorithms[type](disabled));
        } else {
          setPath([]);
          setNodes([...value]);
        }
      }, 10);
    }
    return () => {
      intervalInstance && clearInterval(intervalInstance);
    };
  }, [status, type, disabled, algorithm, changeStatus]);

  return { nodes, path };
};

export default useGraphAlgorithms;
