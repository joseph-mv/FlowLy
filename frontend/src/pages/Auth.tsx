import React, { useEffect, useState } from "react";
import { AuthLayout } from "../components/auth/AuthLayout";
import { Input } from "../components/auth/Input";
import { Button } from "../components/auth/Button";
import { login, signup } from "../services/authServices";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store/store";
import { loginUser } from "../store/userSlice";

const Auth = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  // Refs for each input field
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (isLogin) {
        const response = await login({ name, password });
        dispatch(loginUser(response.data));
      } else {
        const response = await signup({ name, email, password });
        console.log(response);
      }
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    setError("");
  }, [password, name, email, isLogin]);

  return (
    <AuthLayout
      title={isLogin ? "Welcome back" : "Create your account"}
      subtitle={
        isLogin
          ? "Sign in to your account"
          : "Sign up to get started with our platform"
      }
    >
      <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
        <div className="space-y-4">
          <Input
            label="User Name"
            type="text"
            id="name"
            placeholder="Enter your name"
            required
            onchange={setName}
          />

          {!isLogin && (
            <Input
              label="Email address"
              type="email"
              id="email"
              placeholder="you@example.com"
              required
              onchange={setEmail}
            />
          )}
          <Input
            label="Password"
            type="password"
            id="password"
            placeholder="••••••••"
            required
            onchange={setPassword}
          />
        </div>

        <p className="text-red-500 text-center font-semibold">{error}</p>

        <Button type="submit" variant="primary" fullWidth>
          {isLogin ? "Sign in" : "Sign up"}
        </Button>

        <div className="text-center">
          <button
            type="button"
            onClick={() => setIsLogin(!isLogin)}
            className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
          >
            {isLogin
              ? "Don't have an account? Sign up"
              : "Already have an account? Sign in"}
          </button>
        </div>
      </form>
    </AuthLayout>
  );
};

export default Auth;
