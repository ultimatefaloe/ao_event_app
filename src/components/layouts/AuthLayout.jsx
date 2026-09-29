import React from "react";
import { Outlet, Link } from "react-router";

const AuthLayout = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <Link to="/" className="text-2xl font-bold text-indigo-500 mb-6">
        EventApp
      </Link>
      <main className="w-full max-w-md bg-gray-900 border border-gray-700 rounded-xl p-6 shadow-lg">
        <Outlet />
      </main>
    </div>
  );
};

export default AuthLayout;