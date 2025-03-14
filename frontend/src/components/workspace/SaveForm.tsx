import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { resetWorkSpace, setName } from "../../store/nodesSlice";
import {
  createWorkFlow,
  updateWorkFlow,
} from "../../services/workflowServices";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

type SaveFromProps = {
  id: string | undefined;
};

const SaveForm: React.FC<SaveFromProps> = ({ id }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { name, nodes, edges } = useSelector((store: RootState) => store.nodes);
  const {isAuthenticated}=useSelector((store:RootState)=>store.user)

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setName(e.target.value));
  };

  const handleSave = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(!isAuthenticated) {
      navigate('/authentication')
      return
    }

    const data = { name, nodes, edges };
    const response = id
      ? await updateWorkFlow(data, +id)
      : await createWorkFlow(data);
    if (!response) {
      toast.error("Something went wrong!,please try again later");
      return;
    }
    toast.success(response.message);
    navigate("/");
  };

  const handleReset = () => {
    dispatch(resetWorkSpace());
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
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        {/* Buttons */}
        {id ? (
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
            Update
          </button>
        ) : (
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
            Save
          </button>
        )}
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
