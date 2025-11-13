import React, { useState } from 'react';
import { useContext } from "react";
import { useTheme } from "../contexts/ThemeContext";
export default function KYC() {
  const { theme, toggleTheme } = useTheme();
  const [activeTab, setActiveTab] = useState('pending');

  const kycData = {
    pending: [
      { id: '#12345', selfie: 'https://i.pravatar.cc/150?img=1', submitted: '2023-10-27' },
      { id: '#67890', selfie: 'https://i.pravatar.cc/150?img=2', submitted: '2023-10-26' },
      { id: '#11223', selfie: 'https://i.pravatar.cc/150?img=3', submitted: '2023-10-25' },
      { id: '#44556', selfie: 'https://i.pravatar.cc/150?img=4', submitted: '2023-10-24' },
      { id: '#77889', selfie: 'https://i.pravatar.cc/150?img=5', submitted: '2023-10-23' },
    ],
    verified: [
      { id: '#98765', selfie: 'https://i.pravatar.cc/150?img=6', submitted: '2023-10-22', verifiedDate: '2023-10-23' },
      { id: '#54321', selfie: 'https://i.pravatar.cc/150?img=7', submitted: '2023-10-21', verifiedDate: '2023-10-22' },
      { id: '#13579', selfie: 'https://i.pravatar.cc/150?img=8', submitted: '2023-10-20', verifiedDate: '2023-10-21' },
    ]
  };

  const handleApprove = (id) => {
    console.log('Approved:', id);
    // Add your approve logic here
  };

  const handleReject = (id) => {
    console.log('Rejected:', id);
    // Add your reject logic here
  };

  return (
    <div className="min-h-screen bg-color-white dark:bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">KYC Management</h1>
      </div>

      {/* Tabs */}
      <div className="mb-6">
        <div className="flex gap-2 border-b border-slate-700">
          <button
            onClick={() => setActiveTab('pending')}
            className={`px-6 py-3 font-medium transition-all relative ${
              activeTab === 'pending'
                ? 'text-blue-400'
                : 'text-slate-400 hover:text-slate-300'
            }`}
          >
            Pending
            {activeTab === 'pending' && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500"></div>
            )}
          </button>
          <button
            onClick={() => setActiveTab('verified')}
            className={`px-6 py-3 font-medium transition-all relative ${
              activeTab === 'verified'
                ? 'text-blue-400'
                : 'text-slate-400 hover:text-slate-300'
            }`}
          >
            Verified
            {activeTab === 'verified' && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500"></div>
            )}
          </button>
        </div>
      </div>

      {/* KYC Table */}
      <div className="bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-700 bg-slate-800/50">
                <th className="text-left py-4 px-6 text-slate-300 font-semibold text-sm">USER ID</th>
                <th className="text-left py-4 px-6 text-slate-300 font-semibold text-sm">SELFIE</th>
                <th className="text-left py-4 px-6 text-slate-300 font-semibold text-sm">SUBMITTED</th>
                {activeTab === 'verified' && (
                  <th className="text-left py-4 px-6 text-slate-300 font-semibold text-sm">VERIFIED DATE</th>
                )}
                {activeTab === 'pending' && (
                  <th className="text-right py-4 px-6 text-slate-300 font-semibold text-sm">ACTIONS</th>
                )}
              </tr>
            </thead>
            <tbody>
              {kycData[activeTab].map((user, index) => (
                <tr
                  key={index}
                  className="border-b border-slate-700/50 hover:bg-slate-700/20 transition-colors"
                >
                  <td className="py-4 px-6 text-gray-900 dark:text-white font-medium">{user.id}</td>
                  <td className="py-4 px-6">
                    <img
                      src={user.selfie}
                      alt="User selfie"
                      className="w-10 h-10 rounded-full object-cover border-2 border-slate-600"
                    />
                  </td>
                  <td className="py-4 px-6 text-gray-600 dark:text-slate-300">{user.submitted}</td>
                  {activeTab === 'verified' && (
                    <td className="py-4 px-6 text-gray-600 dark:text-slate-300">{user.verifiedDate}</td>
                  )}
                  {activeTab === 'pending' && (
                    <td className="py-4 px-6">
                      <div className="flex justify-end gap-2">
                        <button
                          onClick={() => handleApprove(user.id)}
                          className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white text-sm font-medium rounded-lg transition-colors flex items-center gap-1"
                        >
                          ✓ Approve
                        </button>
                        <button
                          onClick={() => handleReject(user.id)}
                          className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white text-sm font-medium rounded-lg transition-colors flex items-center gap-1"
                        >
                          ✕ Reject
                        </button>
                      </div>
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Empty State */}
        {kycData[activeTab].length === 0 && (
          <div className="py-16 text-center">
            <div className="text-slate-400 text-lg">No {activeTab} KYC requests</div>
          </div>
        )}
      </div>

      {/* Stats Footer */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-xl p-4">
          <div className="text-gray-600 dark:text-slate-400 text-sm mb-1">Total Pending</div>
          <div className="text-2xl font-bold text-white">{kycData.pending.length}</div>
        </div>
        <div className="bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-xl p-4">
          <div className="text-gray-600 dark:text-slate-400 text-sm mb-1">Total Verified</div>
          <div className="text-2xl font-bold text-green-400">{kycData.verified.length}</div>
        </div>
        <div className="bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-xl p-4">
          <div className="text-gray-600 dark:text-slate-400 text-sm mb-1">Total Requests</div>
          <div className="text-2xl font-bold text-blue-400">{kycData.pending.length + kycData.verified.length}</div>
        </div>
      </div>
    </div>
  );
}