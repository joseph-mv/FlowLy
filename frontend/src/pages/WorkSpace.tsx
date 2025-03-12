import { ReactFlowProvider } from "@xyflow/react";

import Sidebar from "../components/workspace/Sidebar";
import WorkflowCanvas from "../components/workspace/WorkflowCanvas";
import SaveForm from "../components/workspace/SaveForm";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getWorkFlow } from "../services/workflowServices";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store/store";
import { resetWorkSpace, setEdges, setName, setNodes } from "../store/nodesSlice";

const Workspace = () => {
  const { id } = useParams();
  const dispatch = useDispatch<AppDispatch>();


  useEffect(() => {
    if (!id) return;

    const fetchWorkflow = async () => {
      const response = await getWorkFlow(+id);
      dispatch(setNodes(response.nodes));
      dispatch(setEdges(response.edges));
      dispatch(setName(response.name))
    };
    fetchWorkflow();

    return () => {
      dispatch(resetWorkSpace());
    };
  }, []);

  return (
    <>
      <h1 className="text-center m-4">{id ? "Edit" :"Create"} your WorkFlow</h1>
      <div className="flex ">
        <Sidebar />
        <ReactFlowProvider>
          <WorkflowCanvas />
        </ReactFlowProvider>
      </div>
      <SaveForm id={id} />
    </>
  );
};

export default Workspace;
