import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import Button from "../../components/ui/Button";
import Input from "../../components/ui/Input";
import { register } from "../../services/auth.service";
import { toast } from "react-toastify";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit =  async (e) => {
    e.preventDefault();

    setLoading(true);
    try {
      console.log("Form Data:", formData); // Log the form data for debugging
      const response = await register(formData);

      if (response.error) {
        throw new Error(response.error);
      }
      toast.success("Registration successful!");
      navigate("/profile");
    } catch (error) {
      console.error("Registration error:", error.message);
      toast.error(error.message ?? "An error occurred during registration.");
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
      <h1 className="text-2xl font-bold text-white mb-2">Create account</h1>
      <p className="text-sm text-gray-400 mb-6">
        Register to start managing your events.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          id="name"
          name="name"
          label="Full name"
          placeholder="Your name"
          autoComplete="name"
          onChange={onChangeHandler}
          required
        />
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
          placeholder="Choose a password"
          autoComplete="new-password"
          onChange={onChangeHandler}
          required
        />
        <Input
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          label="Confirm password"
          placeholder="Re-enter your password"
          autoComplete="new-password"
          onChange={onChangeHandler}
          required
        />
        <Button type="submit" className="w-full justify-center" disabled={loading}>
          {loading ? "Registering..." : "Register"}
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
