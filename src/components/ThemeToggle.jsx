import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { FaMoon, FaSun } from "react-icons/fa";

const ThemeToggle = () => {
  const { dark, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-6 right-6 z-50 bg-gray-200 dark:bg-gray-700 p-3 rounded-full shadow"
    >
      {dark ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-blue-600" />}
    </button>
  );
};

export default ThemeToggle;
