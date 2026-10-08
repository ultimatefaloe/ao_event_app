import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import Button from "../../components/ui/Button";
import Input from "../../components/ui/Input";
import { login } from "../../services/auth.service";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    try {
      const response = await login(formData);

      if (response.error) {
        throw new Error(response.error);
      }
      toast.success("Login successful!");
      navigate("/profile");
    } catch (error) {
      console.error("Login error:", error.message);
      toast.error(error.message ?? "An error occurred during login.");
    } finally {
      setLoading(false);
    }
  };

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-white mb-2">Login</h1>
      <p className="text-sm text-gray-400 mb-6">
        Access your EventApp account.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          id="email"
          name="email"
          type="email"
          label="Email"
          placeholder="you@example.com"
          autoComplete="email"
          onChange={onChangeHandler}
          required
        />
        <Input
          id="password"
          name="password"
          type="password"
          label="Password"
          placeholder="Enter your password"
          autoComplete="current-password"
          onChange={onChangeHandler}
          required
        />
        <Button type="submit" className="w-full justify-center" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
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
