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
  Node,
  NodeMouseHandler,
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
import { addNode, setNodes, setSelectedNode } from "../../store/nodesSlice";
import NodePanel from "./NodePanel";
import { NodeType } from "../../types/component";

const nodeTypes = {
  start: StartNode,
  process: ProcessNode,
  decision: DecisionNode,
};

export default function WorkflowCanvas() {
  const dispatch = useDispatch<AppDispatch>();
  const { nodes, selectedNode } = useSelector(
    (store: RootState) => store.nodes
  );
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  const { screenToFlowPosition } = useReactFlow(); // Drop nodes at correct place

  const onNodesChange: OnNodesChange = (changes) => {
    // drag nodes
    dispatch(setNodes(applyNodeChanges(changes, nodes)));
  };

  const onConnect = useCallback(
    (params: Connection) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const data = e.dataTransfer.getData("nodeType");
    const position = screenToFlowPosition({ x: e.clientX, y: e.clientY });
    const nodeType: NodeType = JSON.parse(data);
    const id = uuidv4(); //unique id
    const node = {
      id: id,
      type: nodeType.type,
      position: { x: position.x, y: position.y },
      data: { ...nodeType, id: id },
    };
    dispatch(addNode(node));
  };

  function allowDrop(ev: React.DragEvent) {
    ev.preventDefault();
  }
  const onNodeClick: NodeMouseHandler = (_, node: Node) => {
    dispatch(setSelectedNode(node));
  };

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
        onNodeClick={onNodeClick}
        fitView
      >
        {selectedNode && <NodePanel />}
        <Controls />
        <MiniMap />
        <Background variant={BackgroundVariant.Dots} gap={12} size={1} />
      </ReactFlow>
    </div>
  );
}
