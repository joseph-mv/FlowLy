import { apiClient } from "./apiClient"


export const createWorkspace=async(data)=>{
    try {
        const response=await apiClient.post('workflow/create/',data)
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}