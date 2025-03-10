import { ReactFlowProvider } from "@xyflow/react";

import Sidebar from "../components/workspace/Sidebar";
import WorkflowCanvas from "../components/workspace/WorkflowCanvas";

const Workspace = () => {
  return (
    <div className="flex ">
      <Sidebar />
    <ReactFlowProvider >
      <WorkflowCanvas />
    </ReactFlowProvider>
    </div>
  );
};

export default Workspace;