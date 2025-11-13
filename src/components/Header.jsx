import React from "react";
import { useTheme } from "../contexts/ThemeContext";

export default function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="flex justify-between items-center p-4  bg-white dark:bg-gray-900">
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
        Admin Panel
      </h2>
      <div className="flex items-center gap-4">
        <span className="text-gray-900 dark:text-white">Welcome Admin</span>
        <img
          src="https://ui-avatars.com/api/?name=Admin"
          alt="Admin"
          className="w-10 h-10 rounded-full"
        />
      </div>
    </header>
  );
}
