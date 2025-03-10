import { v4 as uuidv4 } from "uuid";
import "@xyflow/react/dist/style.css";
import React, { useCallback } from "react";
import {
  addEdge,
  applyNodeChanges,
  Background,
  BackgroundVariant,
  Connection,
  Controls,
  MiniMap,
  OnNodesChange,
  ReactFlow,
  useEdgesState,
  useReactFlow,
} from "@xyflow/react";

import StartNode from "./nodes/StartNode";
import ProcessNode from "./nodes/ProcessNode";
import DecisionNode from "./nodes/DecisionNode";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { addNode, setNodes } from "../../store/nodesSlice";

const nodeTypes = {
  start: StartNode,
  process: ProcessNode,
  decision: DecisionNode,
};

const initialEdges = [{ id: "e1-2", source: "1", target: "2" }];

export default function WorkflowCanvas() {
  const dispatch = useDispatch<AppDispatch>();
  const nodes = useSelector((store: RootState) => store.nodes.nodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  
  const { screenToFlowPosition } = useReactFlow(); // Drop nodes at correct place

  const onNodesChange: OnNodesChange = (changes) => {  // drag nodes
    dispatch(setNodes(applyNodeChanges(changes, nodes)));
  };


  const onConnect = useCallback(
    (params: Connection) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const data = e.dataTransfer.getData("node");
    const position = screenToFlowPosition({ x: e.clientX, y: e.clientY });
    const { label, node_id } = JSON.parse(data);
    const id = uuidv4(); //unique id
    const node = {
      id: id,
      type: node_id,
      position: { x: position.x, y: position.y },
      data: { label: label, id: id },
    };
    dispatch(addNode(node));
  };

  function allowDrop(ev: React.DragEvent) {
    ev.preventDefault();
  }

  return (
    <div className="bg-amber-200 " style={{ height: "100vh", width: "100vw" }}>
      <ReactFlow
        onDrop={handleDrop}
        onDragOver={allowDrop}
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
      >
        <Controls />
        <MiniMap />
        <Background variant={BackgroundVariant.Dots} gap={12} size={1} />
      </ReactFlow>
    </div>
  );
}
