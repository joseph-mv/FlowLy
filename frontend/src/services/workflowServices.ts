import { Edge, Node } from "@xyflow/react";
import { apiClient } from "./apiClient";

type Data = { name: string; nodes: Node[]; edges: Edge[] };

export const createWorkspace = async (data: Data) => {
  try {
    const response = await apiClient.post("workflow/create/", data);
    return response.data
  } catch (error) {
    console.log(error);
    return null
  }
};

export const getWorkList=async()=>{
    try {
        const response = await apiClient.get("workflow/get-all/");
        return response.data
      } catch (error) {
        console.log(error);
        return null
      }
}

export const removeWorkFlow=async(id:number)=>{
  try {
      const response = await apiClient.delete(`workflow/remove/${id}`);
      return response.data
    } catch (error ) {
      console.log(error);
      return null
      // return error.response?.data.error ;
      
    }
}