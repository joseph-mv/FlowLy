import React from "react";
import { Handle, Position } from "@xyflow/react";

type DecisionNodeProps={
    data:{label:string}
}
const DecisionNode: React.FC<DecisionNodeProps> = ({ data }) => {
  return (
    <div className="bg-yellow-500 text-white px-4 py-2 rounded-md shadow-md border">
      ❓ {data.label}
      <Handle type="target" position={Position.Top} className="bg-white" />
      <Handle type="source" position={Position.Left} id="yes" className="bg-white" />
      <Handle type="source" position={Position.Right} id="no" className="bg-white" />
    </div>
  );
};

export default DecisionNode;
