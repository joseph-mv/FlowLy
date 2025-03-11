import React from "react";
import { Handle, Position } from "@xyflow/react";
import withStyle from "./withNode";
import { HelpCircle } from "lucide-react";

const DecisionNode: React.FC = () => {
  return (
    <>
      <HelpCircle size={15} className="absolute top-0 left-0 " />
      <Handle id="target-top" type="target" position={Position.Top} />
      <Handle id="target-left" type="target" position={Position.Left} />
    </>
  );
};
const className = "bg-blue-300";
const Decision = withStyle(DecisionNode, className);
export default Decision;
