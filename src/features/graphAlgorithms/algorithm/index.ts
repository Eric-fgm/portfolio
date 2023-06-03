import aStar from "@/features/graphAlgorithms/algorithm/aStar";
import breadthFirstSearch from "@/features/graphAlgorithms/algorithm/breadthFirstSearch";
import depthFirstSearch from "@/features/graphAlgorithms/algorithm/depthFirstSearch";
import dijkstra from "@/features/graphAlgorithms/algorithm/dijkstra";
import greedyBestFirstSearch from "@/features/graphAlgorithms/algorithm/greedyBestFirstSearch";

const graphAlgorithms = {
  greedyBestFirstSearch,
  depthFirstSearch,
  breadthFirstSearch,
  aStar,
  dijkstra,
};

export default graphAlgorithms;
