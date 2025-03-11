import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Node } from "@xyflow/react";
import { Data } from "./types";

interface NodesState {
  nodes: Node[];
  selectedNode:Node | null
}

const initialState: NodesState = {
  nodes: [],
  selectedNode:null
};

const nodesSlice = createSlice({
  name: "nodes",
  initialState,
  reducers: {
    addNode: (state, action: PayloadAction<Node>) => {
      state.nodes.push(action.payload);
    },
    removeNode: (state, action: PayloadAction<string>) => {
      state.nodes = state.nodes.filter((node) => node.id !== action.payload);
    },
    setNodes: (state, action: PayloadAction<Node[]>) => {
      state.nodes = action.payload;
    },
    setSelectedNode: (state, action: PayloadAction<Node | null>) => {
   
      state.selectedNode = action.payload;
    },
    updateSelectedNode:(state,action:PayloadAction<Data>)=>{
      if(state.selectedNode){ 
      
        state.selectedNode.data=action.payload
      const index=state.nodes.findIndex((node)=>node.id===state.selectedNode?.id)
        state.nodes[index]=state.selectedNode
      }
    }
  },
});

export const { addNode, removeNode, setNodes,setSelectedNode,updateSelectedNode } = nodesSlice.actions;
export default nodesSlice.reducer;
