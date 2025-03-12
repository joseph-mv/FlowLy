import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { resetNodes } from "../../store/nodesSlice";
import { createWorkspace } from "../../services/workflowServices";
import { toast } from "react-toastify";

const SaveForm = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [name, setName] = useState("");
  const { nodes, edges } = useSelector((store: RootState) => store.nodes);

  const handleSave = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = { name, nodes, edges };
    const response = await createWorkspace(data);
    if (!response) {
      toast.error("Something went wrong!,please try again later");
      return;
    }
    toast.success(response.message);
  };

  const handleReset = () => {
    dispatch(resetNodes());
    toast.success("Workspace reset successfully.");
  };
  return (
    <div className="flex w-full items-center space-x-4 p-6 bg-gray-100 rounded-lg shadow-md ">
      {/* Input Field */}
      <form onSubmit={handleSave} className="flex flex-1 space-x-4" action="">
        <input
          type="text"
          placeholder="Enter Your workflow name..."
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        {/* Buttons */}

        <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
          Save
        </button>
      </form>
      <button
        onClick={handleReset}
        className="px-4 py-2 bg-gray-400 text-white rounded-md hover:bg-gray-500 transition"
      >
        Reset
      </button>
    </div>
  );
};

export default SaveForm;
