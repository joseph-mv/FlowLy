import { useAuth } from "../hooks/useAuth"
import { Input } from "../components/auth/Input";
import { Button } from "../components/auth/Button";
import { AuthLayout } from "../components/auth/AuthLayout";

/**
 * **Authentication Page**
 * - Provides a login/signup form.
 * - Uses `useAuth` hook to handle authentication logic.
 * - Displays input fields for name, email, and password.
 * - Supports toggling between login and signup modes.
 */
const Auth = () => {
const {isLogin,handleSubmit,setName,setEmail,setPassword,error,setIsLogin}=useAuth()

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
