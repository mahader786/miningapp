import { useState } from 'react';
import { useTheme } from "../contexts/ThemeContext";
import { ArrowUp, ArrowDown, Trophy, FileDown } from 'lucide-react';

export default function Transaction() {
  const { theme, toggleTheme } = useTheme();
  const [activeTab, setActiveTab] = useState('all');
  
  const transactions = [
    {
      id: '#12345',
      user: 'John Doe',
      type: 'Send',
      amount: -0.5,
      date: '2024-05-23',
      status: 'Completed',
      icon: <ArrowUp className="w-4 h-4" />
    },
    {
      id: '#12346',
      user: 'Jane Smith',
      type: 'Receive',
      amount: 1.2,
      date: '2024-05-22',
      status: 'Completed',
      icon: <ArrowDown className="w-4 h-4" />
    },
    {
      id: '#12347',
      user: 'Mike Johnson',
      type: 'Reward',
      amount: 0.1,
      date: '2024-05-21',
      status: 'Completed',
      icon: <Trophy className="w-4 h-4" />
    },
    {
      id: '#12348',
      user: 'Emily White',
      type: 'Withdrawal',
      amount: -2.0,
      date: '2024-05-20',
      status: 'Pending',
      icon: <ArrowUp className="w-4 h-4" />
    },
    {
      id: '#12349',
      user: 'Chris Green',
      type: 'Withdrawal',
      amount: -0.75,
      date: '2024-05-19',
      status: 'Canceled',
      icon: <ArrowUp className="w-4 h-4" />
    }
  ];

  const getStatusColor = (status) => {
    switch(status) {
      case 'Completed': return 'bg-green-500/20 text-green-400 dark:bg-green-800/20 text-green-800';
      case 'Pending': return 'bg-yellow-500/20 text-yellow-400 dark:bg-yellow-800/20 text-yellow-800';
      case 'Canceled': return 'bg-red-500/20 text-red-400 dark:bg-red-800/20 text-red-800';
      default: return 'bg-gray-500/20 text-gray-400';
    }
  };

  const getTypeColor = (type) => {
    switch(type) {
      case 'Send': return 'text-red-400';
      case 'Receive': return 'text-green-400';
      case 'Reward': return 'text-yellow-400';
      case 'Withdrawal': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  return (
    <div className="min-h-screen bg-color-white dark:bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Transactions</h1>
            <p className="text-slate-400">Wallet & Transactions</p>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-slate-700/50 text-white rounded-lg hover:bg-slate-700 transition">
            <FileDown className="w-4 h-4" />
            Export
          </button>
        </div>

        {/* Tabs */}
        <div className="flex gap-6 mb-6 border-b border-slate-700">
          <button 
            onClick={() => setActiveTab('all')}
            className={`pb-3 px-1 font-medium transition ${
              activeTab === 'all' 
                ? 'text-blue-400 border-b-2 border-blue-400' 
                : 'text-slate-400 hover:text-slate-300'
            }`}
          >
            All Transactions
          </button>
          <button 
            onClick={() => setActiveTab('withdrawals')}
            className={`pb-3 px-1 font-medium transition ${
              activeTab === 'withdrawals' 
                ? 'text-blue-400 border-b-2 border-blue-400' 
                : 'text-slate-400 hover:text-slate-300'
            }`}
          >
            Withdrawals
          </button>
          <button 
            onClick={() => setActiveTab('rewards')}
            className={`pb-3 px-1 font-medium transition ${
              activeTab === 'rewards' 
                ? 'text-blue-400 border-b-2 border-blue-400' 
                : 'text-slate-400 hover:text-slate-300'
            }`}
          >
            Rewards
          </button>
        </div>

        {/* Transaction Table */}
        <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-700">
                <th className="text-left px-6 py-4 text-slate-400 font-medium text-sm">TRANSACTION ID</th>
                <th className="text-left px-6 py-4 text-slate-400 font-medium text-sm">USER</th>
                <th className="text-left px-6 py-4 text-slate-400 font-medium text-sm">TYPE</th>
                <th className="text-left px-6 py-4 text-slate-400 font-medium text-sm">AMOUNT</th>
                <th className="text-left px-6 py-4 text-slate-400 font-medium text-sm">DATE</th>
                <th className="text-left px-6 py-4 text-slate-400 font-medium text-sm">STATUS</th>
                <th className="text-left px-6 py-4 text-slate-400 font-medium text-sm">ACTION</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((tx, index) => (
                <tr key={tx.id} className="border-b border-slate-700/50 hover:bg-slate-700/20 transition">
                  <td className="px-6 py-4 text-gray-600 dark:text-slate-300">{tx.id}</td>
                  <td className="px-6 py-4 text-gray-600 dark:text-slate-300">{tx.user}</td>
                  <td className="px-6 py-4">
                    <div className={`flex items-center gap-2 ${getTypeColor(tx.type)}`}>
                      {tx.icon}
                      <span>{tx.type}</span>
                    </div>
                  </td>
                  <td className={`px-6 py-4 font-medium ${tx.amount > 0 ? 'text-green-400' : 'text-red-400'}`}>
                    {tx.amount > 0 ? '+' : ''}{tx.amount} BTC
                  </td>
                  <td className="px-6 py-4 text-gray-600 dark:text-slate-300">{tx.date}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(tx.status)}`}>
                      {tx.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <button className="px-3 py-1 bg-blue-500/20 text-black dark:text-blue-400 rounded hover:bg-blue-500/30 transition text-sm">
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}