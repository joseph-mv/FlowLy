import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Node } from "@xyflow/react";

interface NodesState {
  nodes: Node[];
}

const initialState: NodesState = {
  nodes: [],
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
  },
});

export const { addNode, removeNode, setNodes } = nodesSlice.actions;
export default nodesSlice.reducer;
