import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { removeEdge, setSelectedEdge, updateSelectedEdge } from "../../store/nodesSlice";
import { useState } from "react";
import { CircleX } from "lucide-react";

const EdgePanel = () => {
    const dispatch = useDispatch<AppDispatch>();
    const selectedEdge = useSelector(
      (store: RootState) => store.nodes.selectedEdge
    );
  
    const handleClose = () => {
      dispatch(setSelectedEdge(null));
    };
  
    const [label, setLabel] = useState(selectedEdge?.label as string);
    const [color,setColor]=useState(selectedEdge?.style?.stroke as string)
  
    const handleSave = () => {
      dispatch(
        updateSelectedEdge({label,color})
      );
      handleClose();
    };
    const handleDelete=()=>{
        dispatch(removeEdge(selectedEdge?.id as string))
        handleClose()
    }

  return (
    <div className=" bg-white w-60 p-4 absolute rounded right-2  top-2  z-10">
       
        <CircleX onClick={handleClose} className="text-black absolute top-2 right-2 "/>

    <h3 className="text-center underline underline-offset-4 text-xl font-serif">
      Edge Properties
    </h3>

    {/* Label Input */}
    <label>Label:</label>
    <input
      type="text"
      value={label}
      onChange={(e) => setLabel(e.target.value)}
      className="border rounded p-2 h-8  w-full"
    />


    {/* Color input */}
    <label>Color:</label>
    <input
      type="color"
      value={color}
      onChange={(e) => setColor(e.target.value)}
      className="border rounded p-2 h-8  w-full"
    />

   

    {/* Buttons */}
    <div className="flex justify-center">
      <button
        onClick={handleSave}
        className=" bg-blue-500 text-white px-4 py-2 mt-2"
      >
        Save
      </button>
      <button
          onClick={handleDelete}
          className="bg-red-500 text-white px-4 py-2 mt-2 ml-2"
        >
          Delete
        </button>
      
    </div>
  </div>
  )
}

export default EdgePanel