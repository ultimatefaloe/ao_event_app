import React from "react";
import { Link } from "react-router";
import Button from "../../components/ui/Button";
import Input from "../../components/ui/Input";

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-white mb-2">Login</h1>
      <p className="text-sm text-gray-400 mb-6">Access your EventApp account.</p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          id="email"
          name="email"
          type="email"
          label="Email"
          placeholder="you@example.com"
          autoComplete="email"
          required
        />
        <Input
          id="password"
          name="password"
          type="password"
          label="Password"
          placeholder="Enter your password"
          autoComplete="current-password"
          required
        />
        <Button type="submit" className="w-full justify-center">
          Login
        </Button>
      </form>

      <div className="mt-4 text-sm text-gray-400 flex flex-col gap-2">
        <Link to="/forgot-password" className="text-indigo-400 hover:underline">
          Forgot your password?
        </Link>
        <p>
          No account yet?{" "}
          <Link to="/register" className="text-indigo-400 hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
