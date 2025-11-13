import React from "react";
import { LayoutDashboard , Users, IdCard , CreditCard, Settings , HelpCircle } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
    const { theme, toggleTheme } = useTheme();
  return (
    <div className="w-56 shadow-md bg-white dark:bg-gray-900 h-full min-h-screen flex flex-col p-5 pt-7 mt-0.4">
      <nav className="flex flex-col gap-8">
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `flex items-center gap-2 hover:text-blue-400 ${
              isActive ? "text-gray-900 dark:text-blue-400 font-bold" : "text-gray-900 dark:text-white"
            }`
          }
        >
          <LayoutDashboard  size={18} /> Dashboard
        </NavLink>

        <NavLink
          to="/user"
          className={({ isActive }) =>
            `flex items-center gap-2 hover:text-blue-400 ${
              isActive ? "text-gray-900 dark:text-blue-400 font-bold" : "text-gray-900 dark:text-white"
            }`
          }
        >
          <Users size={18} /> Users
        </NavLink>

        <NavLink
          to="/kyc"
          className={({ isActive }) =>
            `flex items-center gap-2 hover:text-blue-400 ${
              isActive ? "text-gray-900 dark:text-blue-400 font-bold" : "text-gray-900 dark:text-white"
            }`
          }
        >
          <IdCard  size={18} /> Kyc
        </NavLink>

        <NavLink
          to="/transaction"
          className={({ isActive }) =>
            `flex items-center gap-2 hover:text-blue-400 ${
             isActive ? "text-gray-900 dark:text-blue-400 font-bold" : "text-gray-900 dark:text-white"
            }`
          }
        >
          <CreditCard size={18} /> Transactions
        </NavLink>

        <NavLink
          to="/setting"
          className={({ isActive }) =>
            `flex items-center gap-2 hover:text-blue-400 ${
              isActive ? "text-gray-900 dark:text-blue-400 font-bold" : "text-gray-900 dark:text-white"
            }`
          }
        >
          <Settings size={18} /> Settings
        </NavLink>

         <NavLink
          to="/support"
          className={({ isActive }) =>
            `flex items-center gap-2 hover:text-blue-400 ${
            isActive ? "text-gray-900 dark:text-blue-400 font-bold" : "text-gray-900 dark:text-white"
            }`
          }
        >
          <HelpCircle   size={18} /> Support
        </NavLink>

      </nav>
    </div>
  );
}