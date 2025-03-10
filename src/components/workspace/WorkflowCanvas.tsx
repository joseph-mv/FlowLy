import { v4 as uuidv4 } from "uuid";
import '@xyflow/react/dist/style.css';
import React, { useCallback } from 'react';
import { addEdge, Background, BackgroundVariant, Connection, Controls, MiniMap,ReactFlow, useEdgesState, useNodesState, useReactFlow } from '@xyflow/react';

import StartNode from './nodes/StartNode';
import ProcessNode from './nodes/ProcessNode';
import DecisionNode from './nodes/DecisionNode';

 

const nodeTypes = {
  start: StartNode,
  process: ProcessNode,
  decision: DecisionNode,
};
 
const initialNodes = [
  { id: "1", type: "start", position: { x: 0, y: 0 }, data: { label: "Start" } },
  { id: "2", type: "process", position: { x: 100, y: 200 }, data: { label: "Process 1" } },
  { id: "3", type: "decision", position: { x: 400, y: 200 }, data: { label: "Decision" } },
];

const initialEdges = [
  { id: 'e1-2', source: '1', target: '2' },
];

export default function WorkflowCanvas() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const {screenToFlowPosition}=useReactFlow()
  const addNode=(type:string,label:string,x:number,y:number)=>{
    const id = uuidv4();
    const node={id:id,type:type,position:{x:x,y:y},data:{label:label}}
  
    setNodes(prev=>[...prev,node])
  }  
  const onConnect = useCallback(
    (params:Connection) => setEdges((eds) => addEdge(params, eds)),
    [setEdges],
  );

 const handleDrop=(e:React.DragEvent)=>{
   // Get mouse position
   e.preventDefault();
  const data = e.dataTransfer.getData("text");
  const position = screenToFlowPosition({ x: e.clientX, y: e.clientY});

const {label,node_id}=(JSON.parse(data))
  addNode(node_id,label,position.x,position.y)
  }
  function allowDrop(ev:React.DragEvent) {
    ev.preventDefault();
  }



  return (

    <div className='bg-amber-200 ' style={{ height: '100vh',width:'100vw' }}  >
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
