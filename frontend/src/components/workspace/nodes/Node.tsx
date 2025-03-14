import { CircleX } from "lucide-react";
import { useDispatch } from "react-redux";

import { Data } from "../../../store/types";
import { AppDispatch } from "../../../store/store";
import { removeNode } from "../../../store/nodesSlice";

type NodeProps = {
  data: Data;
};

/**
 * **Node Component**
 * - Represents a single node in the workflow.
 * - Displays the node's label & description.
 * - Provides a delete button to remove the node.
 */
const Node: React.FC<NodeProps> = ({ data }) => {
  const dispatch = useDispatch<AppDispatch>();

  /** Handles the deletion of a node. */
  const handleDelete = (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    e.stopPropagation(); // Prevents event bubbling to parent elements
    dispatch(removeNode(data.id));
  };
  return (
    <>
      {/* Delete Node Button */}
      <CircleX
        className="absolute top-0 right-0 cursor-pointer hover:scale-110"
        onClick={handleDelete}
        size={12}
      />

      {/* Node Content */}
      <div className="max-w-[200px] text-center">
        <h2 className="mx-4 ">{data.label} </h2>
        <hr />
        <p className=" text-sm  min-h-6 p-1">{data.description}</p>
      </div>
    </>
  );
};

export default Node;
