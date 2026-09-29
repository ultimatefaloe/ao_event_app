import React from "react";
import { Link } from "react-router";
import Button from "../../components/ui/Button";
import Input from "../../components/ui/Input";

const Register = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-white mb-2">Create account</h1>
      <p className="text-sm text-gray-400 mb-6">
        Register to start managing your events.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          id="fullName"
          name="fullName"
          label="Full name"
          placeholder="Your name"
          autoComplete="name"
          required
        />
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
          placeholder="Choose a password"
          autoComplete="new-password"
          required
        />
        <Input
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          label="Confirm password"
          placeholder="Re-enter your password"
          autoComplete="new-password"
          required
        />
        <Button type="submit" className="w-full justify-center">
          Register
        </Button>
      </form>

      <p className="mt-4 text-sm text-gray-400">
        Already have an account?{" "}
        <Link to="/login" className="text-indigo-400 hover:underline">
          Login
        </Link>
      </p>
    </div>
  );
};

export default Register;
