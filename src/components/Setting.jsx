import { useState } from 'react';
import { useToast } from "../contexts/ToastContext";
import { useTheme } from "../contexts/ThemeContext";
import { User, Bell, Shield, Wallet, Globe, Save } from 'lucide-react';

export default function Setting() {
const { theme, toggleTheme } = useTheme();
 const { showToast } = useToast();
  const [activeSection, setActiveSection] = useState('profile');
  const [formData, setFormData] = useState({
    fullName: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1 234 567 8900',
    country: 'United States',
    walletAddress: '1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa',
    emailNotifications: true,
    transactionAlerts: true,
    securityAlerts: true,
    twoFactor: false,
    darkMode: true,
    language: 'English'
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSave = () => {
   showToast("Settings saved successfully!");
  };

  const sections = [
    { id: 'profile', name: 'Profile', icon: <User className="w-5 h-5" /> },
    { id: 'notifications', name: 'Notifications', icon: <Bell className="w-5 h-5" /> },
    { id: 'security', name: 'Security', icon: <Shield className="w-5 h-5" /> },
    { id: 'wallet', name: 'Wallet', icon: <Wallet className="w-5 h-5" /> },
    { id: 'preferences', name: 'Preferences', icon: <Globe className="w-5 h-5" /> }
  ];

  return (
    
    <div className="min-h-screen bg-color-white dark:bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold  text-gray-900 dark:text-white mb-2">Settings</h1>
          <p className="text-slate-400">Manage your account settings and preferences</p>
        </div>
        <div className="flex gap-6">
          {/* Sidebar Navigation */}
          <div className="w-64 bg-slate-800/30 backdrop-blur-sm rounded-xl p-4 h-fit">
            <nav className="space-y-2">
              {sections.map(section => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${
                    activeSection === section.id
                       ? 'bg-blue-500/20 text-gray-900 dark:text-blue-400'
                       : 'text-blue-900 dark:text-gray-300 hover:bg-blue-800 hover:text-blue-100'
                  }`}
                >
                  {section.icon}
                  <span>{section.name}</span>
                </button>
              ))}
            </nav>
          </div>

          {/* Main Content */}
          <div className="flex-1 bg-slate-800/30 backdrop-blur-sm rounded-xl p-8">
            {/* Profile Section */}
            {activeSection === 'profile' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Profile Information</h2>
                <div className="space-y-6">
                  <div className="flex items-center gap-6 mb-8">
                    <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-3xl font-bold">
                      JD
                    </div>
                    <div>
                      <button className="px-4 py-2 bg-blue-400 dark:bg-blue-500/20  text-white dark:text-blue-400 rounded-lg hover:bg-blue-800 dark:bg-blue-500/30 transition mr-3">
                        Change Photo
                      </button>
                      <button className="px-4 py-2  bg-red-400 dark:bg-red-500/20 text-white dark:text-red-400 rounded-lg hover:bg-red-700 dark:bg-red-500/30 transition">
                        Remove
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-500 dark:text-slate-300 mb-2 font-medium">Full Name</label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-700/30 dark:bg-slate-700/50 border border-slate-600 rounded-lg  text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-500 dark:text-slate-300 mb-2 font-medium">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-700/30 dark:bg-slate-700/50 border border-slate-600 rounded-lg  text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />                   
                  </div>
                  <div>
                    <label className="block text-gray-500 dark:text-slate-300 mb-2 font-medium">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-700/30 dark:bg-slate-700/50 border border-slate-600 rounded-lg  text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                   />                        
                  </div>

                  <div>
                    <label className="block text-gray-500 dark:text-slate-300 mb-2 font-medium">Country</label>
                    <select
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-700/30 dark:bg-slate-700/50 border border-slate-600 rounded-lg  text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option>United States</option>
                      <option>United Kingdom</option>
                      <option>Canada</option>
                      <option>Australia</option>
                      <option>Germany</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* Notifications Section */}
            {activeSection === 'notifications' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Notification Preferences</h2>
                <div className="space-y-6">
                  <div className="flex items-center justify-between p-4 bg-slate-700/30 rounded-lg">
                    <div>
                      <h3 className="text-gray-900 dark:text-white font-medium mb-1">Email Notifications</h3>
                      <p className="text-slate-700 dark:text-slate-400 text-sm">Receive updates via email</p>
                    </div>
                    <label className="relative inline-block w-12 h-6">
                      <input
                        type="checkbox"
                        name="emailNotifications"
                        checked={formData.emailNotifications}
                        onChange={handleInputChange}
                        className="sr-only peer"
                      />
                      <div className="w-12 h-6 bg-slate-600 rounded-full peer peer-checked:bg-blue-500 transition cursor-pointer"></div>
                      <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition peer-checked:translate-x-6"></div>
                    </label>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-slate-700/30 rounded-lg">
                    <div>
                      <h3 className="text-gray-900 dark:text-white font-medium mb-1">Transaction Alerts</h3>
                      <p className="text-slate-700 dark:text-slate-400  text-sm">Get notified about transactions</p>
                    </div>
                    <label className="relative inline-block w-12 h-6">
                      <input
                        type="checkbox"
                        name="transactionAlerts"
                        checked={formData.transactionAlerts}
                        onChange={handleInputChange}
                        className="sr-only peer"
                      />
                      <div className="w-12 h-6 bg-slate-600 rounded-full peer peer-checked:bg-blue-500 transition cursor-pointer"></div>
                      <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition peer-checked:translate-x-6"></div>
                    </label>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-slate-700/30 rounded-lg">
                    <div>
                      <h3 className="text-gray-900 dark:text-white font-medium mb-1">Security Alerts</h3>
                      <p className="text-slate-700 dark:text-slate-400  text-sm">Important security updates</p>
                    </div>
                    <label className="relative inline-block w-12 h-6">
                      <input
                        type="checkbox"
                        name="securityAlerts"
                        checked={formData.securityAlerts}
                        onChange={handleInputChange}
                        className="sr-only peer"
                      />
                      <div className="w-12 h-6 bg-slate-600 rounded-full peer peer-checked:bg-blue-500 transition cursor-pointer"></div>
                      <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition peer-checked:translate-x-6"></div>
                    </label>
                  </div>
                </div>
              </div>
            )}

            {/* Security Section */}
            {activeSection === 'security' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Security Settings</h2>
                <div className="space-y-6">
                  <div className="p-6 bg-slate-700/30 rounded-lg">
                    <h3 className="text-gray-900 dark:text-white font-medium mb-2">Change Password</h3>
                    <p className="text-slate-700 dark:text-slate-400  text-sm mb-4">Update your password regularly to keep your account secure</p>
                    <button className="px-4 py-2 bg-blue-500 dark:bg-blue-500/20 text-white dark:text-blue-400 rounded-lg hover:bg-blue-700 dark:bg-blue-500/30 transition">
                      Change Password
                    </button>
                  </div>

                  <div className="flex items-center justify-between p-6 bg-slate-700/30 rounded-lg">
                    <div>
                      <h3 className="text-gray-900 dark:text-whitefont-medium mb-1">Two-Factor Authentication</h3>
                      <p className="text-slate-700 dark:text-slate-400 text-sm">Add an extra layer of security</p>
                    </div>
                    <label className="relative inline-block w-12 h-6">
                      <input
                        type="checkbox"
                        name="twoFactor"
                        checked={formData.twoFactor}
                        onChange={handleInputChange}
                        className="sr-only peer"
                      />
                      <div className="w-12 h-6 bg-slate-600 rounded-full peer peer-checked:bg-blue-500 transition cursor-pointer"></div>
                      <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition peer-checked:translate-x-6"></div>
                    </label>
                  </div>

                  <div className="p-6 bg-slate-700/30 rounded-lg">
                    <h3 className="text-gray-900 dark:text-white font-medium mb-2">Active Sessions</h3>
                    <p className="text-slate-700 dark:text-slate-400  text-sm mb-4">Manage devices where you're logged in</p>
                    <button className="px-4 py-2 bg-red-600 dark:bg-red-500/20  text-white dark:text-red-400 rounded-lg hover:bg-red-700 dark:bg-red-500/30 transition">
                      Sign Out All Devices
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Wallet Section */}
            {activeSection === 'wallet' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Wallet Settings</h2>
                <div className="space-y-6">
                  <div>
                    <label className="block text-slate-500 dark:text-slate-300 mb-2 font-medium">Bitcoin Wallet Address</label>
                    <input
                      type="text"
                      name="walletAddress"
                      value={formData.walletAddress}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-700/30 dark:bg-slate-700/50 border border-slate-600 rounded-lg text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono"
                    />
                  </div>

                  <div className="p-6 bg-slate-700/30 rounded-lg">
                    <h3 className="text-gray-900 dark:text-white font-medium mb-2">Connected Wallets</h3>
                    <div className="space-y-3 mt-4">
                      <div className="flex items-center justify-between p-3 bg-slate-600/30 rounded-lg">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold">₿</span>
                          </div>
                          <div>
                            <p className="text-gray-900 dark:text-white font-medium">Bitcoin Wallet</p>
                            <p className="text-slate-700 dark:text-slate-400 text-sm">1A1z...DivfNa</p>
                          </div>
                        </div>
                        <button className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:text-blue-300 text-sm">Disconnect</button>
                      </div>
                    </div>
                    <button className="mt-4 px-4 py-2 bg-blue-500 dark:bg-blue-500/20 text-white dark:text-blue-400 rounded-lg hover:bg-blue-600 dark:bg-blue-500/30 transition">
                      + Add New Wallet
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Preferences Section */}
            {activeSection === 'preferences' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Preferences</h2>
                <div className="space-y-6">
                  <div className="flex items-center justify-between p-4 bg-slate-700/30 rounded-lg">
                    <div>
                      <h3 className="text-gray-900 dark:text-white font-medium mb-1">Dark Mode</h3>
                      <p className="text-slate-700 dark:text-slate-400  text-sm">Use dark theme across the application</p>
                    </div>
                    <label className="relative inline-block w-12 h-6">
                    <input
                     type="checkbox"
                     checked={theme === "dark"}
                     onChange={toggleTheme}
                     className="sr-only peer"
                    />
                    <div className="w-12 h-6 bg-slate-600 rounded-full peer peer-checked:bg-blue-500 transition cursor-pointer"></div>
                    <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition peer-checked:translate-x-6"></div>
                   </label>
                  </div>

                  <div>
                    <label className="block text-slate-700 dark:text-slate-300 mb-2 font-medium">Language</label>
                    <select
                      name="language"
                      value={formData.language}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option>English</option>
                      <option>Spanish</option>
                      <option>French</option>
                      <option>German</option>
                      <option>Japanese</option>
                    </select>
                  </div>

                  <div className="p-6 bg-slate-700/30 rounded-lg">
                    <h3 className="text-gray-900 dark:text-white font-medium mb-2">Data & Privacy</h3>
                    <p className="text-slate-700 dark:text-slate-400  text-sm mb-4">Download your data or delete your account</p>
                    <div className="flex gap-3">
                      <button className="px-4 py-2 bg-blue-600 dark:bg-blue-500/20 text-white dark:text-blue-400 rounded-lg hover:bg-blue-700 dark:bg-blue-500/30 transition">
                        Download Data
                      </button>
                      <button className="px-4 py-2 bg-red-600 dark:bg-red-500/20 text-white dark:text-red-400 rounded-lg hover:bg-redd-700 dark:bg-red-500/30 transition">
                        Delete Account
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div className="mt-8 pt-6 border-t border-slate-700">
             <button
            onClick={handleSave}
            className="flex items-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition font-medium"
            >
           <Save className="w-5 h-5" /> Save Changes
            </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}