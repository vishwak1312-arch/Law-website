"use client";
// ─── CONSULTATION MODAL CONTEXT ───
// Provides global state management for the Book Consultation modal.
// Any component can call openConsultationModal() to trigger the modal.

import { createContext, useContext, useState, useCallback, type ReactNode } from "react";

interface ConsultationModalContextType {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const ConsultationModalContext = createContext<ConsultationModalContextType>({
  isOpen: false,
  openModal: () => {},
  closeModal: () => {},
});

export function ConsultationModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = useCallback(() => setIsOpen(true), []);
  const closeModal = useCallback(() => setIsOpen(false), []);

  return (
    <ConsultationModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
    </ConsultationModalContext.Provider>
  );
}

export function useConsultationModal() {
  return useContext(ConsultationModalContext);
}
