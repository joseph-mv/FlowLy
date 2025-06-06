import { HelpCircle } from "lucide-react";
import { Handle, Position } from "@xyflow/react";

import withStyle from "./withNode";

/**
 * **DecisionNode Component**
 * - Represents a decision node in the workflow.
 * - Includes connection handles for linking nodes.
 */
const DecisionNode: React.FC = () => {
  return (
    <>
    {/* Help Icon for Node */}
      <HelpCircle size={15} className="absolute top-0 left-0 " />

      {/* Connection Handles */}
      <Handle id="target-top" type="target" position={Position.Top} />
      <Handle id="target-left" type="target" position={Position.Left} />
    </>
  );
};

const className = "bg-blue-300";

/** Enhanced Decision Node component */
const Decision = withStyle(DecisionNode, className);

export default Decision;
