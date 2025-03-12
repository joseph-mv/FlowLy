import { Edge, Node } from "@xyflow/react";
import { apiClient } from "./apiClient";

type Data = { name: string; nodes: Node[]; edges: Edge[] };

export const createWorkspace = async (data: Data) => {
  try {
    const response = await apiClient.post("workflow/create/", data);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

export const getWorkList=async()=>{
    try {
        const response = await apiClient.get("workflow/get-all/");
        return response.data
      } catch (error) {
        console.log(error);
      }
}
