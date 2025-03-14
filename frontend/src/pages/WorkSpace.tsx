import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { ReactFlowProvider } from "@xyflow/react";

import { useDispatch } from "react-redux";
import { AppDispatch } from "../store/store";
import Sidebar from "../components/workspace/Sidebar";
import SaveForm from "../components/workspace/SaveForm";
import { getWorkFlow } from "../services/workflowServices";
import WorkflowCanvas from "../components/workspace/WorkflowCanvas";
import {
  resetWorkSpace,
  setEdges,
  setName,
  setNodes,
} from "../store/nodesSlice";

/**
 * **Workspace Page**
 * - Allows users to create or edit workflows.
 * - Fetches workflow data if an `id` is present (editing mode).
 * - Updates Redux store with workflow data.
 * - Resets workspace state on unmount.
 */
const Workspace = () => {
  const { id } = useParams(); // Gets the workflow ID from URL parameters
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (!id) return; // If no ID, it's a new workflow, so no need to fetch

    const fetchWorkflow = async () => {
      const response = await getWorkFlow(+id);
      dispatch(setNodes(response.nodes));
      dispatch(setEdges(response.edges));
      dispatch(setName(response.name));
    };
    fetchWorkflow();

    // Cleanup function to reset workspace when component unmounts
    return () => {
      dispatch(resetWorkSpace());
    };
  }, []);

  return (
    <>
      <h1 className="text-center m-4">
        {id ? "Edit" : "Create"} your WorkFlow
      </h1>
      <div className="flex md:flex-row flex-col">
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
