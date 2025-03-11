import React from "react";
import { Handle, Position } from "@xyflow/react";

import withStyle from "./withNode";
import { RefreshCw } from "lucide-react";

const ProcessNode: React.FC = () => {
  return (
    <>
      <RefreshCw size={15} className="absolute top-0 left-0 " />
      <Handle id="target-top" type="target" position={Position.Top} className="bg-white" />
      <Handle id='target-left' type="target" position={Position.Left} className="bg-white" />
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

const Process = withStyle(ProcessNode, className);
export default Process;
