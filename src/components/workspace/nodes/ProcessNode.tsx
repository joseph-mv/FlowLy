import React from "react";
import { Handle, Position } from "@xyflow/react";
import Node from "./Node";
import { NodeProps } from "../../../types/component";

const ProcessNode: React.FC<NodeProps> = ({ data }) => {
  return (
    <div className="bg-gray-500 text-white px-4 py-2 rounded-md shadow-md border">
        <Node data={data}/>
      ⚙️ {data.label}

      
      <Handle type="target" position={Position.Top} className="bg-white" />
      <Handle type="source" position={Position.Bottom} className="bg-white" />
    </div>
  );
};

export default ProcessNode;
