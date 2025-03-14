import { Edge, Node } from "@xyflow/react";
import { apiClient } from "./apiClient";

type Data = { name: string; nodes: Node[]; edges: Edge[] };

export const createWorkFlow = async (data: Data) => {
  try {
    const response = await apiClient.post("workflow/create/", data, {
      withCredentials: true // Allow cookies
});
    return response.data
  } catch (error) {
    console.log(error);
    return null
  }
};

export const getWorkList=async()=>{
    try {
        const response = await apiClient.get("workflow/get-all/", {
          withCredentials: true // Allow cookies
    });
        return response.data
      } catch (error) {
        console.log(error);
        return null
      }
}

export const removeWorkFlow=async(id:number)=>{
  try {
      const response = await apiClient.delete(`workflow/remove/${id}`, {
        withCredentials: true // Allow cookies
  });
      return response.data
    } catch (error ) {
      console.log(error);
      return null
      
    }
}

export const getWorkFlow=async(id:number)=>{
  try {
      const response = await apiClient.get(`workflow/get/${id}`, {
        withCredentials: true // Allow cookies
  });
      return response.data
    } catch (error ) {
      console.log(error);
      return null
      
    }
}

export const updateWorkFlow = async (data: Data,id:number) => {
  try {
    const response = await apiClient.put(`workflow/update/${id}`, data, {
      withCredentials: true // Allow cookies
});
    return response.data
  } catch (error) {
    console.log(error);
    return null
  }
};
