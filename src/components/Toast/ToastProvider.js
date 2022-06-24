import { useState, useCallback, useMemo, useContext, createContext } from 'react';

import { generateUUidV4 } from '@/utils/utils';
import ToastContainer from './ToastContainer';

const ToastContext = createContext();

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const addToast = useCallback(({ title, description, severity = 'default' }) => {
    const newToast = { id: generateUUidV4(), title, description, severity };
    setToasts((prevState) => [newToast, ...prevState]);
  }, []);

  const closeToast = useCallback((toastId) => {
    setToasts((prevState) => prevState.filter((toast) => toast.id !== toastId));
  }, []);

  const value = useMemo(() => ({ toasts, addToast }), [addToast, toasts]);

  return (
    <ToastContext.Provider value={value}>
      {children}

      <ToastContainer toasts={toasts} onCloseToast={closeToast} />
    </ToastContext.Provider>
  );
}

export const useToast = () => useContext(ToastContext);
