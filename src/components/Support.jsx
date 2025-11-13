import { useState } from 'react';
import { useTheme } from "../contexts/ThemeContext";
import { useToast } from "../contexts/ToastContext";
import { Mail, HelpCircle, MessageSquare, ClipboardPen, Save } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const faqData = [
    { question: "How do I reset my Mining Co. password?", answer: "Click 'Forgot Password' on the login page and follow instructions." },
    { question: "How to update wallet address?", answer: "Go to Wallet Settings and save new address." },
    { question: "How to contact support?", answer: "Use Submit Ticket form or email support@miningco.com." },
  ];
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Frequently Asked Questions</h2>
      {faqData.map((item, idx) => (
        <div key={idx} className="mb-4 border-b border-gray-600 pb-2">
          <button
            className="w-full text-left  text-gray-900 dark:text-blue-400 py-2 px-2 hover:bg-white dark:bg-slate-700 rounded"
            onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
          >
            {item.question}
          </button>
          {openIndex === idx && <p className="mt-2  text-slate-600 dark:text-gray-300 px-2">{item.answer}</p>}
        </div>
      ))}
    </div>
  );
};

const Submit = () => {
   const { showToast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    issue: '',
    message: ''
  });

  const handleInputChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    showToast("Support ticket submitted!");
    setFormData({ name: '', email: '', issue: '', message: '' });
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Submit a Support Ticket</h2>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <label className="block text-gray-700 mb-1">Your Name</label>
          <input
            type="text"
            name="name"
            onChange={handleInputChange}
            value={formData.name}
            className="w-full px-4 py-3 bg-slate-700/30 dark:bg-slate-800 rounded text-black dark:text-white"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-1">Email Address</label>
          <input
            type="email"
            name="email"
            onChange={handleInputChange}
            value={formData.email}
            className="w-full px-4 py-3 bg-slate-700/30 dark:bg-slate-800 rounded text-black dark:text-white"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-1">Issue Type</label>
          <select
            name="issue"
            value={formData.issue}
            onChange={handleInputChange}
             className="w-full px-4 py-3 bg-slate-700/30 dark:bg-slate-800 rounded text-black dark:text-white"
            required
          >
            <option value="">-- Select --</option>
            <option>Account Problem</option>
            <option>Payment/Withdrawal</option>
            <option>Mining Operation</option>
            <option>Security</option>
            <option>Other</option>
          </select>
        </div>
        <div>
          <label className="block text-gray-700 mb-1">Message</label>
          <textarea
            name="message"
            rows={4}
            onChange={handleInputChange}
            value={formData.message}
             className="w-full px-4 py-3 bg-slate-700/30 dark:bg-slate-800 rounded text-black dark:text-white"
            required
          />
        </div>
        <button
              type="submit"
          className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          <Save className="w-5 h-5" /> Submit Ticket
        </button>
      </form>
    </div>
  );
};

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim() !== "") {
      setMessages([...messages, { text: input, id: Date.now() }]);
      setInput("");
    }
  };

  const handleKeyDown = e => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold  text-gray-900 dark:text-white mb-6">Live Chat Support</h2>
      <div className="h-64 overflow-y-auto bg-slate-700/30 dark:bg-slate-800 p-4 rounded mb-4 text-black dark:text-white">
        {messages.length === 0 ? (
          <p className="text-gray-600 italic">No messages yet...</p>
        ) : (
          messages.map(msg => (
            <div key={msg.id} className="mb-2">
              {msg.text}
            </div>
          ))
        )}
      </div>
      <div className="flex gap-2">
        <textarea
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type your message..."
          className="flex-1 px-4 py-2 rounded  bg-slate-700/30  dark:bg-slate-700 text-black dark:text-white focus:outline-none resize-none"
          rows={2}
        />
        <button
          onClick={handleSend}
          className="bg-blue-600 px-4 rounded hover:bg-blue-700 transition text-white dark:text-black"
          aria-label="Send message"
        >
          Send
        </button>
      </div>
    </div>
  ); 
};

const Complaint = () => {
   const { showToast } = useToast();
  const [form, setForm] = useState({ issue: "", details: "" });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
     showToast("Sumbit Complaint successfully!");
     setForm({ issue: "", details: "" });
    
  };
  
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Complaints</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="issue"
          placeholder="Issue Title"
          value={form.issue}
          onChange={handleChange}
          required
          className="w-full px-4 py-3  bg-slate-700/30 dark:bg-slate-700 border border-slate-600 rounded text-black dark:text-white focus:outline-none"
        />
        <textarea
          name="details"
          placeholder="Describe your security concern..."
          rows={4}
          value={form.details}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 bg-slate-700/30 dark:bg-slate-700 border border-slate-600 rounded text-black dark:text-white focus:outline-none"
        />
        <button
            type="submit"
          className="bg-red-600 px-6 py-3 rounded hover:bg-red-700 transition text-white"
        >
          Submit Complaint
        </button>
      </form>
    </div>
  );
};

export default function Support() {
   const { theme, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState('submit');

  const sections = [
    { id: 'submit', name: 'Submit Ticket', icon: <Mail className="w-5 h-5" /> },
    { id: 'faq', name: 'FAQ', icon: <HelpCircle className="w-5 h-5" /> },
    { id: 'chat', name: 'Chat', icon: <MessageSquare className="w-5 h-5" /> },
    { id: 'complaint', name: 'Complaint', icon: <ClipboardPen className="w-5 h-5" /> },
  ];

  return (
    <div className="min-h-screen bg-color-white dark:bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8">
      <div className="mb-6">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">Support</h1>
      </div>
      <div className="max-w-6xl mx-auto flex gap-6">
        {/* Sidebar */}
        <div className="w-64 bg-gray-800/40 rounded-xl p-4 h-fit">
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
        <div className="flex-1 bg-gray-800/40 dark:bg-gray-900/50 rounded-xl p-8 text-gray-900 dark:text-white">
          {activeSection === 'submit' && <Submit />}
          {activeSection === 'faq' && <FAQ />}
          {activeSection === 'chat' && <Chat />}
          {activeSection === 'complaint' && <Complaint />}
        </div>
      </div>
    </div>
  );
}
