import { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";
import { resetNodes } from "../../store/nodesSlice";


const SaveForm = () => {
  const dispatch=useDispatch<AppDispatch>()
    const [inputValue, setInputValue] = useState("");

    const handleSave = () => {
      
    };
    
    const handleReset = () => {
      dispatch(resetNodes())

    };
  return (
    <div className="flex w-full items-center space-x-4 p-6 bg-gray-100 rounded-lg shadow-md ">
    {/* Input Field */}
    <form className="flex flex-1 space-x-4" action="">
   
    <input
      type="text"
      placeholder="Enter Your workflow name..."
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    required
    />

    {/* Buttons */}

      <button
        onClick={handleSave}
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
      >
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
  )
}

export default SaveForm