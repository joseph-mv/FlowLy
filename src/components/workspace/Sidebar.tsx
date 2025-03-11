const nodeTypes = [
  { id: "start", label: "Start" },
  { id: "process", label: "Process" },
  { id: "decision", label: "Decision" },
];

const Sidebar = () => {

  const handleDragStart=(e:React.DragEvent<HTMLButtonElement>,node_id:string,label:string)=>{
   const data={node_id:node_id,
      label:label
    }
    e.dataTransfer.setData('node',JSON.stringify(data))
  }

  return (
    <div className="w-1/4 p-4 bg-gray-100 max-w-60">
    <h2 className="text-lg font-semibold mb-4">Nodes</h2>

    {nodeTypes.map((node) => (
      <button
      draggable
      onDragStart={(e)=>handleDragStart(e,node.id,node.label)}
        key={node.id}
        className="w-full mb-2 p-2 bg-red-400 text-white rounded"
      >
        {node.label}
      </button>
    ))}
  </div>
  );
};

export default Sidebar;
