import { NavLink, Link } from "react-router";
import { Plus } from "lucide-react";
// import { useTheme } from "../../context/ThemeContext";
// getting useAuth hook from the AuthContext to access the user and isAuthenticating function for user authentication state
import { useAuth } from "../../context/AuthContext";

const NavBar = () => {
  // const { theme, toggleTheme } = useTheme();
  const { user, isAuthenticated, logout } = useAuth();

  console.log("IsAuthenticated", isAuthenticated); // Log the user object for debugging
  return (
    <nav className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 px-6 py-3 flex items-center justify-between">
      <Link
        to="/"
        className="font-bold text-xl text-indigo-600 dark:text-indigo-400"
      >
        EventApp
      </Link>

      <div className="flex items-center gap-6">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive
              ? "text-indigo-600 dark:text-indigo-400 font-medium"
              : "text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/events"
          className={({ isActive }) =>
            isActive
              ? "text-indigo-600 dark:text-indigo-400 font-medium"
              : "text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
          }
        >
          Events
        </NavLink>

        <Link
          to="/events/new"
          className="flex items-center gap-1 bg-indigo-600 text-white px-3 py-1.5 rounded hover:bg-indigo-700 text-sm font-medium"
        >
          <Plus size={16} />
          New Event
        </Link>

        {/* <NavLink
            to="/profile"
            className={({ isActive }) =>
              isActive
                ? "text-indigo-600 dark:text-indigo-400 font-medium"
                : "text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
            }
          >
            Profile
          </NavLink> */}

        {isAuthenticated ? (
          <div className="flex items-center gap-4">
            <p>Welcome back, <span className="font-semibold text-indigo-400">{user?.name}</span></p>
            <button
              onClick={logout}
              className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
            >
              Logout
            </button>
          </div>
        ) : (
          <>
            <Link
              to="/login"
              className="text-sm text-indigo-500 dark:text-indigo-400 hover:underline"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="text-sm text-indigo-500 dark:text-indigo-400 hover:underline"
            >
              Register
            </Link>
          </>
        )}

        {/* <button
          onClick={toggleTheme}
          className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
          aria-label="Toggle theme"
        >
          {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
        </button> */}
      </div>
    </nav>
  );
};

export default NavBar;
