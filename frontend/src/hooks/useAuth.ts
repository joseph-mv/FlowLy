import { login, signup } from "../services/authServices";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store/store";
import { loginUser } from "../store/userSlice";
import React, { useEffect, useState } from "react";

/**
 * **useAuth Hook**
 * Manages authentication form state and handles login/signup logic.
 */
export const useAuth = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState("");

  /** Handle form submission for login or signup */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      if (isLogin) {
        const response = await login({ name, password });
        dispatch(loginUser(response.data));
      } else {
        await signup({ name, email, password });
      }
      navigate("/");
    } catch (error: unknown) {
        // Type-safe error handling
        if (error instanceof Error) {
          setError(error.message); // Safe to access .message
        } else {
          setError("An unexpected error occurred."); 
        }
    }
  };

  /** Reset errors when inputs change and form change */
  useEffect(() => {
    setError("");
  }, [password, name, email, isLogin]);

  return {
    isLogin,
    error,
    handleSubmit,
    setEmail,
    setName,
    setPassword,
    setIsLogin,
  };
};
