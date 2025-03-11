import { ReactFlowProvider } from "@xyflow/react";

import Sidebar from "../components/workspace/Sidebar";
import WorkflowCanvas from "../components/workspace/WorkflowCanvas";
import SaveForm from "../components/workspace/SaveForm";

const Workspace = () => {
  return (
    <>
      <div className="flex ">
        <Sidebar />
        <ReactFlowProvider>
          <WorkflowCanvas />
        </ReactFlowProvider>
      </div>
      <SaveForm />
    </>
  );
};

export default Workspace;
