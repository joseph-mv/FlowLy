import React from "react";
import { Handle, Position } from "@xyflow/react";
import withStyle from "./withNode";
import { CirclePlay } from "lucide-react";

const StartNode: React.FC = () => {
  return (
    <>
      <CirclePlay size={15} className="absolute top-0 left-0 " />

      <Handle id="source-right" type="source" position={Position.Right} className="!bg-white !border-black" />
      <Handle id="source-bottom"  type="source" position={Position.Bottom} className="!bg-white !border-black"/>
    

    </>
  );
};
const className = "bg-white text-black";
const Start = withStyle(StartNode, className);
export default Start;
