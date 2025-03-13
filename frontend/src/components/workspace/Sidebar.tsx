import { CirclePlay, HelpCircle, RefreshCw } from "lucide-react";
import { NodeType } from "../../types/component";

const nodeTypes = [
  {
    type: "start",
    label: "Start",
    Icon: <CirclePlay size={15} className="absolute top-0 left-0 " />,
    bg: "bg-white",
  },
  {
    type: "process",
    label: "Process",
    Icon: <RefreshCw size={15} className="absolute top-0 left-0 " />,
    bg: "bg-gray-400",
  },
  {
    type: "decision",
    label: "Decision",
    Icon: <HelpCircle size={15} className="absolute top-0 left-0 " />,
    bg: "bg-blue-300",
  },
];

const Sidebar = () => {
  const handleDragStart = (
    e: React.DragEvent<HTMLDivElement>,
    nodeType: NodeType
  ) => {
    e.dataTransfer.setData("nodeType", JSON.stringify(nodeType));
  };

  return (
    <div className=" md:w-1/4 gap-1.5 p-4 bg-gray-600 md:max-w-40 ">
      <h2 className="text-lg font-semibold mb-4 text-white" >Nodes</h2>
      <div className="flex gap-2 md:flex-col">
        {/* List of type of nodes */}
        {nodeTypes.map((nodeType) => (
          <div
            key={nodeType.type}
            className={`relative rounded-md shadow-md min-w-28 h-15 mb-4 ${nodeType.bg} `}
            draggable
            onDragStart={(e) => handleDragStart(e, nodeType)}
          >
            {nodeType.Icon}

            <div className="max-w-[200px] text-center">
              <h2 className="mx-4 ">{nodeType.label} </h2>
              <hr />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
