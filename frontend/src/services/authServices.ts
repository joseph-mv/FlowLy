import axios from "axios"
import { apiClient } from "./apiClient"

type Data={
    email?:string
    password:string
    name:string
}


export const signup=async(data:Data)=>{
    try {
        const response=await apiClient.post('/signup/',data)
        console.log(response.data)
        return {data:response.data}
    } catch (error:unknown) {
        if (axios.isAxiosError(error)) {
            console.error("Signup Error:", error.response?.data?.error || "Unknown error");
            throw new Error(error.response?.data?.error || "An unexpected error occurred");
          }
          throw new Error("An unexpected error occurred"); 
        }
    }




export const login=async(data:Data)=>{
    try {
        
        const response=await apiClient.post('/login/',data, {
            withCredentials: true // Allow cookies
        })
        console.log(response)
        
        return {data:response.data}
    } catch (error:unknown) {
        if (axios.isAxiosError(error)) {
            console.error("Login Error:", error );
            throw new Error(error.response?.data?.error || "An unexpected error occurred");
          }
          throw new Error("An unexpected error occurred"); 
        }

}

export const logout=async()=>{
    try {
        const response=await apiClient.get('/logout/', {
            withCredentials: true // Allow cookies
        })
        localStorage.setItem("isAuthenticated", "false")
        return response.data
    } catch (error) {
        console.log(error)
    }
}