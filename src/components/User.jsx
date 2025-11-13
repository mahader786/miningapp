import React, { useState } from 'react';
import { useTheme } from "../contexts/ThemeContext";

export default function User() {
  const { theme, toggleTheme } = useTheme();
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [sortBy, setSortBy] = useState('id');

  const users = [
    { id: 1, name: "Mohamed", email: "mohamed.carter@email.com", balance: 1250, referrals: 5, status: "Active" },
    { id: 2, name: "Olivia Bennett", email: "olivia.bennett@email.com", balance: 875, referrals: 3, status: "Active" },
    { id: 3, name: "Noah Thompson", email: "noah.thompson@email.com", balance: 500, referrals: 2, status: "Suspended" },
    { id: 4, name: "Ava Harper", email: "ava.harper@email.com", balance: 2100, referrals: 10, status: "Active" },
    { id: 5, name: "Liam Foster", email: "liam.foster@email.com", balance: 300, referrals: 1, status: "Banned" },
    { id: 6, name: "Sophia Hayes", email: "sophia.hayes@email.com", balance: 1000, referrals: 7, status: "Active" },
  ];

  const statusColor = {
    Active: "bg-green-500",
    Suspended: "bg-yellow-500",
    Banned: "bg-red-500",
  };

  // Filter and search logic
  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         user.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filterStatus === 'all' || user.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  // Sort logic
  const sortedUsers = [...filteredUsers].sort((a, b) => {
    if (sortBy === 'balance') return b.balance - a.balance;
    if (sortBy === 'referrals') return b.referrals - a.referrals;
    if (sortBy === 'name') return a.name.localeCompare(b.name);
    return a.id - b.id;
  });

  const handleViewUser = (user) => {
    console.log('View user:', user);
    // Add your view user logic here
  };

  return (
     <div className="min-h-screenbg-color-white dark:bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">Users</h1>
      </div>

      {/* Search and Filters */}
      <div className="mb-6 flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
        {/* Search Bar */}
        <div className="relative w-full md:w-1/3">
          <input
            type="text"
            placeholder="Search users by name or email"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full dark:bg-slate-800/50 border border-slate-700 rounded-lg pl-10 pr-4 py-2.5  text-gray-900 dark:text-white placeholder-slate-400 focus:outline-none focus: border-black-500 dark:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
          />
          <svg className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8"/>
            <path d="m21 21-4.35-4.35"/>
          </svg>
        </div>

        {/* Filter and Sort */}
        <div className="flex gap-2">
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="px-4 py-2 dark:bg-slate-800/50 border border-slate-700 text-gray-900 dark:text-white rounded-lg hover:bg-gray-300 dark:bg-slate-800 transition-all focus:outline-none focus:border-black-500 dark:border-blue-500 cursor-pointer"
          >
            <option value="all">All Status</option>
            <option value="Active">Active</option>
            <option value="Suspended">Suspended</option>
            <option value="Banned">Banned</option>
          </select>
          
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-2 dark:bg-slate-800/50 border border-slate-700 text-gray-900 dark:text-white rounded-lg hover:bg-gray-300 dark:bg-slate-800 transition-all focus:outline-none focus:border-black-500 dark:border-blue-500 cursor-pointer"
          >
            <option value="id">Sort by ID</option>
            <option value="name">Sort by Name</option>
            <option value="balance">Sort by Balance</option>
            <option value="referrals">Sort by Referrals</option>
          </select>
        </div>
      </div>

      {/* User Table */}
      <div className="bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-700 bg-slate-800/50">
                <th className="text-left py-4 px-6 text-slate-300 font-semibold text-sm">ID</th>
                <th className="text-left py-4 px-6 text-slate-300 font-semibold text-sm">NAME</th>
                <th className="text-left py-4 px-6 text-slate-300 font-semibold text-sm">EMAIL</th>
                <th className="text-left py-4 px-6 text-slate-300 font-semibold text-sm">BALANCE</th>
                <th className="text-left py-4 px-6 text-slate-300 font-semibold text-sm">REFERRALS</th>
                <th className="text-left py-4 px-6 text-slate-300 font-semibold text-sm">STATUS</th>
                <th className="text-left py-4 px-6 text-slate-300 font-semibold text-sm">ACTION</th>
              </tr>
            </thead>
            <tbody>
              {sortedUsers.map((user) => (
                <tr
                  key={user.id}
                  className="border-b border-slate-700/50 hover:bg-slate-700/20 transition-colors"
                >
                  <td className="py-4 px-6 text-gray-900 dark:text-white font-medium">#{user.id}</td>
                  <td className="py-4 px-6 text-gray-900 dark:text-white">{user.name}</td>
                  <td className="py-4 px-6 text-gray-600 dark:text-slate-300">{user.email}</td>
                  <td className="py-4 px-6 text-gray-900 dark:text-white font-semibold">${user.balance.toLocaleString()}</td>
                  <td className="py-4 px-6 text-gray-600 dark:text-slate-300">{user.referrals}</td>
                  <td className="py-4 px-6">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusColor[user.status]} text-gray-900 dark:text-white`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <button
                      onClick={() => handleViewUser(user)}
                      className="text-blue-400 hover:text-blue-300 font-medium transition-colors"
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Empty State */}
        {sortedUsers.length === 0 && (
          <div className="py-16 text-center">
            <div className="text-gray-600 dark:text-slate-400 text-lg">No users found</div>
            <p className="text-slate-500 text-sm mt-2">Try adjusting your search or filters</p>
          </div>
        )}
      </div>

      {/* Stats Footer */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-xl p-4">
          <div className="text-gray-600 dark:text-slate-400 text-sm mb-1">Total Users</div>
          <div className="text-2xl font-bold text-gray-900 dark:text-white">{users.length}</div>
        </div>
        <div className="bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-xl p-4">
          <div className="text-gray-600 dark:text-slate-400 text-sm mb-1">Active Users</div>
          <div className="text-2xl font-bold text-green-400">
            {users.filter(u => u.status === 'Active').length}
          </div>
        </div>
        <div className="bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-xl p-4">
          <div className="text-gray-600 dark:text-slate-400 text-sm mb-1">Total Balance</div>
          <div className="text-2xl font-bold text-blue-400">
            ${users.reduce((acc, u) => acc + u.balance, 0).toLocaleString()}
          </div>
        </div>
        <div className="bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-xl p-4">
          <div className="text-gray-600 dark:text-slate-400 text-sm mb-1">Total Referrals</div>
          <div className="text-2xl font-bold text-purple-400">
            {users.reduce((acc, u) => acc + u.referrals, 0)}
          </div>
        </div>
      </div>
    </div>
  );
}