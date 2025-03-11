import React from "react";
import { Handle, Position } from "@xyflow/react";

import withStyle from "./withNode";
import { RefreshCw } from "lucide-react";

const ProcessNode: React.FC = () => {
  return (
   <>
    
    <RefreshCw size={15}  className="absolute top-0 left-0 "/>    
      <Handle type="target" position={Position.Top} className="bg-white" />
      <Handle type="source" position={Position.Bottom} className="bg-white" />
    </>
  );
};

const className="bg-gray-500 text-white"

const Process= withStyle(ProcessNode,className);
export default Process
