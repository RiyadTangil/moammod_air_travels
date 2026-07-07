'use client';
import React, { createContext, useContext, useState, useCallback } from 'react';

interface ToastData {
  icon: string;
  title: string;
  msg: string;
}

interface ToastContextType {
  showToast: (icon: string, title: string, msg: string) => void;
  toast: ToastData | null;
  visible: boolean;
}

const ToastContext = createContext<ToastContextType>({
  showToast: () => {},
  toast: null,
  visible: false,
});

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toast, setToast] = useState<ToastData | null>(null);
  const [visible, setVisible] = useState(false);

  const showToast = useCallback((icon: string, title: string, msg: string) => {
    setToast({ icon, title, msg });
    setVisible(true);
    setTimeout(() => setVisible(false), 4000);
  }, []);

  return (
    <ToastContext.Provider value={{ showToast, toast, visible }}>
      {children}
    </ToastContext.Provider>
  );
}

export const useToast = () => useContext(ToastContext);
