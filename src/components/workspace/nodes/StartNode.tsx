import React, { memo } from "react";
import { Handle, Position } from "@xyflow/react";
import Node from "./Node";
import { NodeProps } from "../../../types/component";


const StartNode: React.FC<NodeProps> = memo(({ data }) => {

  return (
    <div  className="bg-white border-2 border-black text-black px-4 py-2 rounded-md shadow-md ">
    
     <Node data={data}/>
      🔵 {data.label}
      <Handle
        type="target"
        className="!bg-gray-300  !border-black   hover:scale-110 hover:!bg-black transition-transform"
        position={Position.Left}
      />
      <Handle type="source" position={Position.Right} />
    </div>
  );
})

export default StartNode;
