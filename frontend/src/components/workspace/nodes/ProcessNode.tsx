import { RefreshCw } from "lucide-react";
import { Handle, Position } from "@xyflow/react";

import withStyle from "./withNode";

/**
 * **ProcessNode Component**
 * - Represents a process node in the workflow.
 * - Includes multiple connection handles for workflow connections.
 */
const ProcessNode: React.FC = () => {
  return (
    <>
    {/* Process Icon */}
      <RefreshCw size={15} className="absolute top-0 left-0 " />

      {/* Input Handles */}
      <Handle id="target-top" type="target" position={Position.Top} className="bg-white" />
      <Handle id='target-left' type="target" position={Position.Left} className="bg-white" />
      
       {/* Output Handles */}
      <Handle
        id="source-right"
        type="source"
        position={Position.Right}
        className="!bg-white !border-black"
      />
      <Handle
        id="source-bottom"
        type="source"
        position={Position.Bottom}
        className="!bg-white !border-black"
      />
    </>
  );
};

const className = "bg-gray-500 text-white";

/** Enhanced Process Node component */
const Process = withStyle(ProcessNode, className);

export default Process;
