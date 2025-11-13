import { createContext, useContext, useState } from "react";
import { CheckCircle } from "lucide-react";

const ToastContext = createContext();

export function ToastProvider({ children }) {
  const [toast, setToast] = useState({ message: "", visible: false });

  const showToast = (message) => {
    setToast({ message, visible: true });
    setTimeout(() => setToast({ message: "", visible: false }), 2000);
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}

      {toast.visible && (
        <div className="fixed top-5 right-5 z-50 bg-green-500 text-white flex items-center gap-2 px-4 py-3 rounded-lg shadow-lg transition-all duration-500 ease-out">
          <CheckCircle className="w-5 h-5" />
          <span>{toast.message}</span>
        </div>
      )}
    </ToastContext.Provider>
  );
}

export function useToast() {
  return useContext(ToastContext);
}
