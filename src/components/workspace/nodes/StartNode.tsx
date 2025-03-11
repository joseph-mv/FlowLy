import React from "react";
import { Handle, Position } from "@xyflow/react";
import withStyle from "./withNode";
import { CirclePlay } from "lucide-react";

const StartNode: React.FC= () => {
  return (
    <>
    <CirclePlay size={15}  className="absolute top-0 left-0 "/>
      <Handle
        type="source"
        className="!bg-gray-300  !border-black   hover:scale-110 hover:!bg-black transition-transform"
        position={Position.Bottom}
      />
      <Handle type="source" position={Position.Right} />
    </>
  );
};
const className="bg-white text-black"
const Start = withStyle(StartNode,className);
export default Start;
