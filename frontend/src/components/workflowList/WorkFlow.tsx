import {  toast } from "react-toastify";
import { Link } from "react-router-dom";
import { Pencil, Trash2 } from "lucide-react";

import { Workflow } from "../../types/component";
import { removeWorkFlow } from "../../services/workflowServices";

type WorkFlowProps = {
  workflow: Workflow;
  setWorkflows: React.Dispatch<React.SetStateAction<Workflow[]>>
};

/**
 * **WorkFlow Component**
 * - Displays a single workflow  inside a table.
 * - Provides edit and delete functionality for each workflow.
*/
const WorkFlow: React.FC<WorkFlowProps> = ({ workflow,setWorkflows }) => {
 
  //  Handles deletion of a workflow.
  const handleDelete = async (id: number) => {
    try {
      const response = await removeWorkFlow(id);

      if (!response) {
        toast.error("Something went wrong! Please try again later.");
        return;
      }

      // Show success message & update state
      toast.success(response.message);
      setWorkflows((prev) => prev.filter((workflow) => workflow.id !== id));
    } catch (error) {
      toast.error("Failed to delete workflow. Please try again.");
      console.error("Delete error:", error);
    }
  };

  return (
    <tr key={workflow.id} className="hover:bg-gray-50">
      
      <td className=" px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
        {workflow.name}
      </td>

      <td className=" px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {new Date(workflow.created_at).toLocaleDateString()}
      </td>

      <td className=" px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
        {/* Edit Workflow Button */}
        <Link 
        to={`${workflow.id}/edit-workflow`}
          className="text-indigo-600 hover:text-indigo-900 mr-4"
        >
          <Pencil className="h-5 w-5 inline" />
        </Link>
        
       {/* Delete Workflow Button */}
        <button
          onClick={() => handleDelete(workflow.id)}
          className="text-red-600 hover:text-red-900"
        >
          <Trash2 className="h-5 w-5 inline" />
        </button>
      </td>
    </tr>
  );
};

export default WorkFlow;
