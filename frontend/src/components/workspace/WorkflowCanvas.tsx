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
  Edge,
  EdgeMouseHandler,
  MarkerType,
  MiniMap,
  Node,
  NodeMouseHandler,
  OnNodesChange,
  ReactFlow,
  // useEdgesState,
  useReactFlow,
} from "@xyflow/react";

import StartNode from "./nodes/StartNode";
import ProcessNode from "./nodes/ProcessNode";
import DecisionNode from "./nodes/DecisionNode";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import {
  addNode,
  getPrevNodes,
  setEdges,
  setNodes,
  setSelectedEdge,
  setSelectedNode,
} from "../../store/nodesSlice";
import NodePanel from "./NodePanel";
import { NodeType } from "../../types/component";
import EdgePanel from "./EdgePanel";

const nodeTypes = {
  start: StartNode,
  process: ProcessNode,
  decision: DecisionNode,
};

export default function WorkflowCanvas() {
  const dispatch = useDispatch<AppDispatch>();
  const { nodes, selectedNode, edges,selectedEdge } = useSelector(
    (store: RootState) => store.nodes
  );
  const { screenToFlowPosition } = useReactFlow(); // Drop nodes at correct place
console.log(nodes)
  const onNodesChange: OnNodesChange = (changes) => {
    // drag nodes
    dispatch(setNodes(applyNodeChanges(changes, nodes)));
  };

  const defaultEdgeOptions={style: {
    stroke:'black',
    strokeWidth: 1,
    strokeDasharray: "5,2", // Dashed line
  },
  type:"step",
  interactionWidth: 10, // Increase clickable area
  markerEnd: {
    type: MarkerType.ArrowClosed, // Adds an arrow at the end
    width: 20,
    height: 20,
  color:'black'
  },

  }

  const onConnect = useCallback(
    (params: Connection) =>
     { 
      dispatch(
        getPrevNodes([params.source,params.target])
      )
      dispatch(
        setEdges(
          addEdge(
            params,
            edges
          )
        )
      )},
    [edges]
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
      data: { ...nodeType, id: id,prevNodes:[],childNodes:[] },
    };
    dispatch(addNode(node));
  };

  function allowDrop(ev: React.DragEvent) {
    ev.preventDefault();
  }
  const onNodeClick: NodeMouseHandler = (_, node: Node) => {
    dispatch(setSelectedNode(node));
  };

  const onEdgeClick:EdgeMouseHandler=(_,edge:Edge)=>{
    dispatch(setSelectedEdge(edge));
  }

  return (
    <div className="bg-gray-300 " style={{ height: "100vh", width: "100vw" }}>
      <ReactFlow
        onDrop={handleDrop}
        onDragOver={allowDrop}
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        onNodesChange={onNodesChange}
        onConnect={onConnect}
        onNodeClick={onNodeClick}
        onEdgeClick={onEdgeClick}
        elevateEdgesOnSelect
        defaultMarkerColor={"#b1b1b7"}
        defaultEdgeOptions={defaultEdgeOptions}
        fitView
      >
        {selectedNode && <NodePanel />}
        {selectedEdge && <EdgePanel />}

        <Controls className="gap-1" />
        <MiniMap className="max-w-[30vw]" />
        <Background color="white" variant={BackgroundVariant.Dots} gap={12} size={1} />
      </ReactFlow>
    </div>
  );
}
