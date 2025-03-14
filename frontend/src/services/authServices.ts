import axios from "axios";

import { apiClient } from "./apiClient";

type AuthData = {
  email?: string;
  password: string;
  name: string;
};

/**
 * **Signup Function**
 * Registers a new user by sending their details to the backend.
 *
 * @param {AuthData} data - The user's signup details (name, email, password).
 * @returns API response containing user details.
 * @throws Error if an error occurs during signup.
 */

export const signup = async (data: AuthData) => {
  try {
    const response = await apiClient.post("/signup/", data);
    return { data: response.data };
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error("Signup Error:", error);

      // Throw an error with a relevant message
      throw new Error(
        error.response?.data?.error || "An unexpected error occurred"
      );
    }
    throw new Error("An unexpected error occurred");
  }
};

/**
 * **Login Function**
 * Authenticates a user by sending credentials to the backend.
 *
 * @param {AuthData} data - The user's login details (email, password).
 * @returns API response containing authentication details.
 * @throws Error if an error occurs during login.
 */
export const login = async (data: AuthData) => {
  try {
    const response = await apiClient.post("/login/", data);
    return { data: response.data };
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error("Login Error:", error);

      // Throw an error with a relevant message
      throw new Error(
        error.response?.data?.error || "An unexpected error occurred"
      );
    }
    throw new Error("An unexpected error occurred");
  }
};

/**
 * **Logout Function**
 * Logs out the current user by calling the backend logout API.
 *
 * @returns API response confirming logout success.
 * @throws Error if an error occurs during logout.
 */
export const logout = async () => {
  try {
    const response = await apiClient.get("/logout/");
    localStorage.setItem("isAuthenticated", "false");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
