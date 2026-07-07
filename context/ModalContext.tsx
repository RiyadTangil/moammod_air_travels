'use client';
import React, { createContext, useContext, useState, useCallback } from 'react';

interface ModalContextType {
  isOpen: boolean;
  serviceName: string;
  openModal: (service?: string) => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextType>({
  isOpen: false,
  serviceName: 'General Inquiry',
  openModal: () => {},
  closeModal: () => {},
});

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [serviceName, setServiceName] = useState('General Inquiry');

  const openModal = useCallback((service = 'General Inquiry') => {
    setServiceName(service);
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
    document.body.style.overflow = '';
  }, []);

  return (
    <ModalContext.Provider value={{ isOpen, serviceName, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
}

export const useModal = () => useContext(ModalContext);
