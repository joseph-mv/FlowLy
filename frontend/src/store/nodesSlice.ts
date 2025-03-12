import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Edge, Node } from "@xyflow/react";
import { Data } from "./types";

interface NodesState {
  name: string;
  nodes: Node[];
  edges: Edge[];
  selectedNode: Node | null;
}

const initialState: NodesState = {
  name:'',
  nodes: [],
  edges: [],
  selectedNode: null,
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
        state.selectedNode.data = action.payload;
        const index = state.nodes.findIndex(
          (node) => node.id === state.selectedNode?.id
        );
        state.nodes[index].data = action.payload;
      }
    },

    setEdges: (state, action: PayloadAction<Edge[]>) => {
      state.edges = action.payload;
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
  setName
} = nodesSlice.actions;
export default nodesSlice.reducer;
