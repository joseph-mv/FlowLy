import { Edge, Node } from "@xyflow/react";

import { apiClient } from "./apiClient";

type WorkflowData = { name: string; nodes: Node[]; edges: Edge[] };

/**
 * **Create Workflow**  
 * Sends a request to create a new workflow.
 *
 * @param {WorkFlowData} data - The workflow data (name, nodes, edges).
 * @returns The API response data if successful, otherwise `null`.
 */
export const createWorkFlow = async (data: WorkflowData) => {
  try {
    const response = await apiClient.post("workflow/create/", data);
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

/**
 * **Get Workflow List**  
 * Retrieves all saved workflows.
 *
 * @returns The list of workflows from the API, otherwise `null`.
 */
export const getWorkList = async () => {
  try {
    const response = await apiClient.get("workflow/get-all/");
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

/**
 * **Remove Workflow**  
 * Deletes a specific workflow by ID.
 *
 * @param {number} id - The ID of the workflow to remove.
 * @returns API response confirming deletion, otherwise `null`.
 */
export const removeWorkFlow = async (id: number) => {
  try {
    const response = await apiClient.delete(`workflow/remove/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

/**
 * **Get Workflow by ID**  
 * Retrieves a specific workflow by its ID.
 *
 * @param {number} id - The ID of the workflow to fetch.
 * @returns The workflow data if found, otherwise `null`.
 */
export const getWorkFlow = async (id: number) => {
  try {
    const response = await apiClient.get(`workflow/get/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

/**
 * **Update Workflow**  
 * Updates an existing workflow with new data.
 *
 * @param {WorkFlowData} data - The updated workflow data.
 * @param {number} id - The ID of the workflow to update.
 * @returns API response confirming update, otherwise `null`.
 */
export const updateWorkFlow = async (data: WorkflowData, id: number) => {
  try {
    const response = await apiClient.put(`workflow/update/${id}`, data);
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
