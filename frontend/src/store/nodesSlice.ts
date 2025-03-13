import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Edge, MarkerType, Node } from "@xyflow/react";
import { Data } from "./types";

interface NodesState {
  name: string;
  nodes: Node[];
  edges: Edge[];
  selectedNode: Node | null;
  selectedEdge: Edge | null;
  
}

const initialState: NodesState = {
  name:'',
  nodes: [],
  edges: [],
  selectedNode: null,
  selectedEdge:null
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
    updateSelectedNode: (state, action: PayloadAction<Data>) => {
      if (state.selectedNode) {
        const index = state.nodes.findIndex(
          (node) => node.id === state.selectedNode?.id
        );
        state.nodes[index].data = action.payload;
      }
    },
    setEdges: (state, action: PayloadAction<Edge[]>) => {
      state.edges = action.payload;
    },
    setSelectedEdge: (state, action: PayloadAction<Edge | null>) => {
      state.selectedEdge = action.payload;
    },
    updateSelectedEdge: (state, action: PayloadAction<{color:string,label:string}>) => {
      if (state.selectedEdge) {
        const {label,color}=action.payload
        const index = state.edges.findIndex(
          (edge) => edge.id === state.selectedEdge?.id
        );
        const edge=state.edges[index]
        edge.label = label;
        if(edge.style ){
        edge.style.stroke=color
      }
      edge.markerEnd={color:color,type:MarkerType.ArrowClosed,width: 20,
        height: 20,}
      }
    },
    removeEdge: (state, action: PayloadAction<string>) => {
      state.edges = state.edges.filter((edge) => edge.id !== action.payload);
    },
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    resetWorkSpace: () => {
      return initialState;
    },
  },
});

export const {
  addNode,
  removeNode,
  setNodes,
  setSelectedNode,
  updateSelectedNode,
  resetWorkSpace,
  setEdges,
  setName,
  setSelectedEdge,
  updateSelectedEdge,
  removeEdge
} = nodesSlice.actions;
export default nodesSlice.reducer;
