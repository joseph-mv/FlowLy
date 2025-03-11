import { NodeType } from "../../types/component";

const nodeTypes = [
  { type: "start", label: "Start" },
  { type: "process", label: "Process" },
  { type: "decision", label: "Decision" },
];

const Sidebar = () => {

  const handleDragStart=(e:React.DragEvent<HTMLButtonElement>,nodeType:NodeType)=>{
   
    e.dataTransfer.setData('nodeType',JSON.stringify(nodeType))
  }

  return (
    <div className="w-1/4 p-4 bg-gray-100 max-w-60">
    <h2 className="text-lg font-semibold mb-4">Nodes</h2>

    {/* List of type of nodes */}
    {nodeTypes.map((nodeType) => (
      <button
      draggable
      onDragStart={(e)=>handleDragStart(e,nodeType)}
        key={nodeType.type}
        className="w-full mb-2 p-2 bg-red-400 text-white rounded"
      >
        {nodeType.label}
      </button>
    ))}
  </div>
  );
};

export default Sidebar;
