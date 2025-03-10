import React from "react";
import { Handle, Position } from "@xyflow/react";
type ProcessNodeProps={
    data:{label:string}
}
const ProcessNode: React.FC<ProcessNodeProps> = ({ data }) => {
  return (
    <div className="bg-gray-500 text-white px-4 py-2 rounded-md shadow-md border">
      ⚙️ {data.label}
      <Handle type="target" position={Position.Top} className="bg-white" />
      <Handle type="source" position={Position.Bottom} className="bg-white" />
    </div>
  );
};

export default ProcessNode;
