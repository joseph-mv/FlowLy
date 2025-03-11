import React from "react";
import { Handle, Position } from "@xyflow/react";
import withStyle from "./withNode";
import { HelpCircle } from "lucide-react";


const DecisionNode: React.FC = () => {
  return (
 <>

<HelpCircle size={15}  className="absolute top-0 left-0 "/>
      <Handle type="target" position={Position.Top} className="bg-white" />
      <Handle type="source" position={Position.Left} id="yes" className="bg-white" />
      <Handle type="source" position={Position.Right} id="no" className="bg-white" />
    </>
  );
};
const className="bg-blue-300"
const Decision=withStyle(DecisionNode,className)
export default Decision;
