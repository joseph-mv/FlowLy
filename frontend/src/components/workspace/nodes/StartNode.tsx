import { CirclePlay } from "lucide-react";
import { Handle, Position } from "@xyflow/react";

import withStyle from "./withNode";

/**
 * **StartNode Component**
 * - Represents the start node in the workflow.
 * - Contains source handles for outgoing connections.
 */
const StartNode: React.FC = () => {
  return (
    <>
      {/* Start Icon */}
      <CirclePlay size={15} className="absolute top-0 left-0 " />

      {/* Output Handles */}
      <Handle
        id="source-right"
        type="source"
        position={Position.Right}
        className="!bg-white !border-black"
      />
      {/* <Handle
        id="source-bottom"
        type="source"
        position={Position.Bottom}
        className="!bg-white !border-black"
      /> */}
    </>
  );
};
const className = "bg-white text-black";

/** Enhanced Start Node component */
const Start = withStyle(StartNode, className);

export default Start;
