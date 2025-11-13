import React, { useState } from 'react';
import { useTheme } from "../contexts/ThemeContext";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Users, DollarSign, Activity, TrendingUp } from 'lucide-react';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('daily');
  const { theme, toggleTheme } = useTheme();

  const chartData = [
    { name: 'Jan', value: 400 },
    { name: 'Feb', value: 450 },
    { name: 'Mar', value: 500 },
    { name: 'Apr', value: 480 },
    { name: 'May', value: 550 },
    { name: 'Jun', value: 600 },
    { name: 'Jul', value: 650 },
    { name: 'Aug', value: 700 },
    { name: 'Sep', value: 750 },
    { name: 'Oct', value: 800 },
    { name: 'Nov', value: 850 },
    { name: 'Dec', value: 900 },
  ];

  const stats = [
    { label: 'TOTAL USERS', value: '12,345', icon: Users },
    { label: 'Active Miners', value: '8,765', icon: Activity },
    { label: 'Total Profit', value: '5,432', icon: DollarSign },
    { label: 'New Users', value: '2,109', icon: TrendingUp },
  ];

  const recentUsers = [
    { name: 'Ethan Harper', date: '2024-01-15', status: 'Active', statusColor: 'bg-green-500' },
    { name: 'Olivia Bennett', date: '2024-01-14', status: 'Active', statusColor: 'bg-green-500' },
    { name: 'Noah Carter', date: '2024-01-13', status: 'Inactive', statusColor: 'bg-red-500' },
    { name: 'Ava Morgan', date: '2024-01-12', status: 'Active', statusColor: 'bg-green-500' },
  ];

  const kycRequests = [
    { name: 'Sophia Clark', date: '2024-01-15', status: 'Pending', statusColor: 'bg-yellow-500' },
    { name: 'Jackson Reed', date: '2024-01-14', status: 'Approved', statusColor: 'bg-green-500' },
    { name: 'Isabella Hayes', date: '2024-01-13', status: 'Rejected', statusColor: 'bg-red-500' },
    { name: 'Aiden Coleman', date: '2024-01-12', status: 'Pending', statusColor: 'bg-yellow-500' },
  ];

  return (
    <div className="min-h-screen bg-color-white dark:bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">Dashboard</h1>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-xl p-6 hover:bg-slate-800/50 transition-all"
          >
            <div className="flex items-center justify-between mb-4">
              <stat.icon className="w-8 h-8 text-blue-400" />
            </div>
            <p className="text-slate-400 text-sm mb-1">{stat.label}</p>
            <p className="text-3xl font-bold text-gray-900 dark:text-white">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Mining Activity Chart */}
      <div className="bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-xl p-6 mb-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Mining Activity</h2>
          <div className="flex gap-2">
            <button
              onClick={() => setActiveTab('daily')}
              className={`px-4 py-2 rounded-lg transition-all text-sm ${
                activeTab === 'daily'
                  ? 'bg-blue-600 text-gray-900 dark:bg-blue-600 text-white '
                  : 'bg-slate-700/50 text-slate-300 hover:bg-slate-700'
              }`}
            >
              Daily
            </button>
            <button
              onClick={() => setActiveTab('weekly')}
              className={`px-4 py-2 rounded-lg transition-all text-sm ${
                activeTab === 'weekly'
                  ? 'bg-blue-600 text-gray-900 dark:bg-blue-600 text-white '
                  : 'bg-slate-700/50 text-slate-300 hover:bg-slate-700'
              }`}
            >
              Weekly
            </button>
            <button
              onClick={() => setActiveTab('monthly')}
              className={`px-4 py-2 rounded-lg transition-all text-sm ${
                activeTab === 'monthly'
                 ? 'bg-blue-600 text-gray-900 dark:bg-blue-600 text-white '
                  : 'bg-slate-700/50 text-slate-300 hover:bg-slate-700'
              }`}
            >
              Monthly
            </button>
          </div>
        </div>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={chartData}>
            <defs>
              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis dataKey="name" stroke="#9ca3af" />
            <YAxis stroke="#9ca3af" />
            <Tooltip
              contentStyle={{
                backgroundColor: '#1e293b',
                border: '1px solid #334155',
                borderRadius: '8px',
                color: '#fff',
              }}
            />
            <Area
              type="monotone"
              dataKey="value"
              stroke="#3b82f6"
              strokeWidth={3}
              fillOpacity={1}
              fill="url(#colorValue)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Tables */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent User Registrations */}
        <div className="bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-xl p-6">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Recent User Registrations</h2>
          <div className="overflow-x-auto">
            <table className="w-full">  
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="text-left py-3 text-slate-400 font-medium text-sm">User</th>
                  <th className="text-left py-3 text-slate-400 font-medium text-sm">Registration Date</th>
                  <th className="text-left py-3 text-slate-400 font-medium text-sm">Status</th>
                </tr>
              </thead>
              <tbody>
                {recentUsers.map((user, index) => (
                  <tr key={index} className="border-b border-slate-700/50">
                    <td className="py-4 text-gray-900 dark:text-white text-sm">{user.name}</td>
                    <td className="py-4 text-gray-900 dark:text-white text-sm">{user.date}</td>
                    <td className="py-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${user.statusColor} text-gray-900 dark:text-white`}>
                        {user.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* KYC Requests */}
        <div className="bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-xl p-6">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">KYC Requests</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="text-left py-3 text-slate-400 font-medium text-sm">User</th>
                  <th className="text-left py-3 text-slate-400 font-medium text-sm">Request Date</th>
                  <th className="text-left py-3 text-slate-400 font-medium text-sm">Status</th>
                </tr>
              </thead>
              <tbody>
                {kycRequests.map((request, index) => (
                  <tr key={index} className="border-b border-slate-700/50">
                    <td className="py-4 text-gray-900 dark:text-white text-sm">{request.name}</td>
                    <td className="py-4 text-gray-900 dark:text-whitetext-sm">{request.date}</td>
                    <td className="py-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${request.statusColor} text-gray-900 dark:text-white`}>
                        {request.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}