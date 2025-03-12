import { Pencil, Trash2 } from "lucide-react";
import React from "react";
import { Workflow } from "../../types/component";
import { removeWorkFlow } from "../../services/workflowServices";
import {  toast } from "react-toastify";

type WorkFlowProps = {
  workflow: Workflow;
  setWorkflows: React.Dispatch<React.SetStateAction<Workflow[]>>
};

const WorkFlow: React.FC<WorkFlowProps> = ({ workflow,setWorkflows }) => {
  const handleEdit = (id: number) => {
    console.log(`Edit workflow ${id}`);
  };

  const handleDelete = async(id: number) => {
   const response= await removeWorkFlow(id)

   if (!response) {
    toast.error("Something went wrong!,please try again later");
    return;
  }
    toast.success(response.message)
    setWorkflows(prev=>prev.filter(workflow=>workflow.id!==id))


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
        <button
          onClick={() => handleEdit(workflow.id)}
          className="text-indigo-600 hover:text-indigo-900 mr-4"
        >
          <Pencil className="h-5 w-5 inline" />
        </button>
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
