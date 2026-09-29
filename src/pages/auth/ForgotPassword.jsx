import React from "react";
import { Link } from "react-router";
import Button from "../../components/ui/Button";
import Input from "../../components/ui/Input";

const ForgotPassword = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-white mb-2">Forgot password</h1>
      <p className="text-sm text-gray-400 mb-6">
        Enter your email to receive a reset link.
      </p>

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
        <Button type="submit" className="w-full justify-center">
          Send reset link
        </Button>
      </form>

      <p className="mt-4 text-sm text-gray-400">
        Back to{" "}
        <Link to="/login" className="text-indigo-400 hover:underline">
          Login
        </Link>
      </p>
    </div>
  );
};

export default ForgotPassword;
