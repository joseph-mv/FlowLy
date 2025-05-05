import { Edge, Node } from "@xyflow/react";

export type Data={
    id:string
    label:string
    description:string
    prevNodes:Node[] | unknown
    childNodes:Node[] | unknown
    prevNode?:string
    bgColor?: string;
    textColor?: string;
} 

export type UserState= {
    user: { username: string} | null;
    isAuthenticated: boolean;
  }

export type NodesState ={
    name: string;
    nodes: Node[];
    edges: Edge[];
    selectedNode: Node | null;
    selectedEdge: Edge | null;
    
  }