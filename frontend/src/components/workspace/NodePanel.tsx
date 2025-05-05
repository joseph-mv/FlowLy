import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { setSelectedNode, updateSelectedNode } from "../../store/nodesSlice";

const NodePanel = () => {
  const dispatch = useDispatch<AppDispatch>();
  const selectedNode = useSelector(
    (store: RootState) => store.nodes.selectedNode
  );
  const { nodes } = useSelector((store: RootState) => store.nodes);
  const handleClose = () => {
    dispatch(setSelectedNode(null));
  };
  const [label, setLabel] = useState(selectedNode?.data?.label as string);
  const [description, setDescription] = useState(
    selectedNode?.data?.description as string
  );

  const [prevNode, setPrevNode] = useState(
    selectedNode?.data?.prevNode as string
  );
  const [color, setColor] = useState(selectedNode?.data.textColor as string);
  const [bgColor, setBgColor] = useState(selectedNode?.data?.bgColor as string);

  const handleSave = () => {
    dispatch(
      updateSelectedNode({
        id: selectedNode?.id || "",
        label,
        description,
        textColor: color,
        bgColor: bgColor,
        prevNode: prevNode,
        prevNodes: selectedNode?.data.prevNodes as Node[],
        childNodes: selectedNode?.data.childNodes,
      })
    );
    handleClose();
  };
  return (
    <div className="bg-white w-60 p-4 absolute rounded right-2  top-2  z-10">
      <h3 className="text-center underline underline-offset-4 text-xl font-serif">
        Node Properties
      </h3>

      {/* Label Input */}
      <label>Label:</label>
      <input
        type="text"
        value={label}
        onChange={(e) => setLabel(e.target.value)}
        className="border rounded p-2 h-8  w-full"
      />

      {/* Description Input */}
      <label>Description:</label>
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="border rounded p-2 w-full"
      />
      <div>
        <label>Prev Nodes:</label>
        <select
          onChange={(e) => setPrevNode(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
        >
          {Array.isArray(selectedNode?.data?.prevNodes) &&
            selectedNode?.data.prevNodes.map((id: string) => {
              const node = nodes.find((node) => node.id == id);
              const selected = node?.id == prevNode;
              return (
                <option key={id} selected={selected} value={id}>
                  {node?.data.label as string}
                </option>
              );
            })}
        </select>
      </div>

      {/* Color input */}
      <label>Color:</label>
      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
        className="border rounded p-2 h-8  w-full"
      />

      {/* Background Color input */}
      <label>Background Color:</label>
      <input
        type="color"
        value={bgColor}
        onChange={(e) => setBgColor(e.target.value)}
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
          onClick={handleClose}
          className="bg-gray-500 text-white px-4 py-2 mt-2 ml-2"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default NodePanel;
