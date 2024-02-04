import graphAlgorithms from "@/features/graphAlgorithms/algorithm";
import type {
  GraphAlgorithmTypes,
  GraphNode,
} from "@/features/graphAlgorithms/helpers";
import { useEffect, useMemo, useState } from "react";

export interface UseGraphAlgorithmsProps {
  type: GraphAlgorithmTypes;
  status: "started" | "stopped" | "completed" | "restart";
  disabled: Record<any, GraphNode & { type: "wall" }>;
}

interface UseGraphAlgorithmsCallbacks {
  onSuccess: () => void;
}

const useGraphAlgorithms = ({
  type,
  status,
  disabled,
  onSuccess = () => {},
}: UseGraphAlgorithmsProps & UseGraphAlgorithmsCallbacks) => {
  const [nodes, setNodes] = useState<GraphNode[]>([]);
  const [path, setPath] = useState<GraphNode[]>([]);

  const algorithm = useMemo(() => {
    let instance = graphAlgorithms[type](disabled);
    setNodes([]);
    setPath([]);
    return () => ({
      instance,
      reset: () => (instance = graphAlgorithms[type](disabled)),
    });
  }, [type, disabled]);

  useEffect(() => {
    let intervalInstance: ReturnType<typeof setInterval> | null = null;
    if (status === "started") {
      intervalInstance = setInterval(() => {
        const { value, done } = algorithm().instance.next();
        if (done) {
          algorithm().reset();
          onSuccess();
        }
        setPath(value.path);
        setNodes(value.queue);
      }, 30);
    } else if (status === "restart") {
      algorithm().reset();
      setNodes([]);
      setPath([]);
    }
    return () => {
      intervalInstance && clearInterval(intervalInstance);
    };
  }, [status, algorithm, onSuccess]);

  return { nodes, path };
};

export default useGraphAlgorithms;
