import React from "react";
import { Outlet } from "react-router";
import NavBar from "./NavBar";

const RootLayout = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div>
      <NavBar />
      {/* this is our main content */}
      <main>
        <Outlet />
      </main>
      <footer>&copy; {currentYear} All rights reserved.</footer>
    </div>
  );
};

export default RootLayout;
