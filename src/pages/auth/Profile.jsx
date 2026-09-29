import React, { useState } from "react";
import Button from "../../components/ui/Button";
import Input from "../../components/ui/Input";

const Profile = () => {
  const [profile, setProfile] = useState({
    id: "a1b2c3d4-e5f6-7a8b-9c0d-1e2f3a4b5c6d",
    name: "John Doe",
    email: "user@ultimateintelliforge.org",
    role: "attendee",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="p-4 max-w-xl mx-auto">
      <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">Profile</h1>
      <p className="text-sm text-gray-400 mb-6">Update your profile information.</p>

      <form
        onSubmit={handleSubmit}
        className="space-y-4 bg-gray-900 p-5 rounded-lg border border-gray-700"
      >
        <Input
          id="id"
          name="id"
          label="User ID"
          value={profile.id}
          onChange={handleChange}
          required
        />
        <Input
          id="name"
          name="name"
          label="Full name"
          placeholder="Your full name"
          autoComplete="name"
          value={profile.name}
          onChange={handleChange}
          required
        />
        <Input
          id="email"
          name="email"
          type="email"
          label="Email"
          placeholder="you@example.com"
          autoComplete="email"
          value={profile.email}
          onChange={handleChange}
          required
        />
        <Input
          id="role"
          name="role"
          label="Role"
          value={profile.role}
          onChange={handleChange}
          required
        />
        <Button type="submit">Save changes</Button>
      </form>
    </section>
  );
};

export default Profile;
