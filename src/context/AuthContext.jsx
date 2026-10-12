import { createContext, useContext, useState } from "react";
import { useTokenStore } from "../stores/useToken.store";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // getting all value and funcition from the Zustand store (useTokenStore) to manage the token and user state
  const isAuthenticated = useTokenStore((state) => state.isAuthenticated());
  const user = useTokenStore((state) => state.user);
  const setUser = useTokenStore((state) => state.setUser);
  const token = useTokenStore((state) => state.token);
  const setToken = useTokenStore((state) => state.setToken);

  const logout = () => {
    setUser(null);
    setToken(null);
    window.location.href = "/login"; // Redirect to login page after logout
  };

  // this is a new function that sets the user and authentication state
  const setAuth = ({ user, token }) => {
    setUser(user);
    setToken(token); // Assuming the user object contains a token property
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, setAuth, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};
