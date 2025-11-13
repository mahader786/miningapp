import { Routes, Route, useLocation } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import User from "./components/User";
import Dashboard from "./components/Dashboard";
import Transaction from "./components/Transaction";
import Setting from "./components/Setting";
import Kyc from "./components/Kyc";
import Support from "./components/Support";
import Adminlogin from "./components/Adminlogin";

function App() {
  const location = useLocation();

  const isLoginPage = location.pathname === "/";

  return (
    <>
      {isLoginPage ? (
        <Routes>
          <Route path="/" element={<Adminlogin />} />
        </Routes>
      ) : (
        <div className="flex flex-col min-h-screen">
          <Header />
        <div className="flex h-screen overflow-hidden">
            <Sidebar />
            <div className="flex-1 overflow-y-auto">
              <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/user" element={<User />} />
                <Route path="/transaction" element={<Transaction />} />
                <Route path="/setting" element={<Setting />} />
                <Route path="/kyc" element={<Kyc />} />
                <Route path="/support" element={<Support />} />
              </Routes>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
