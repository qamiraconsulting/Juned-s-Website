import { createContext, useContext, useMemo, useState, type ReactNode } from "react";

type CallbackModalContextValue = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
};

const CallbackModalContext = createContext<CallbackModalContextValue | null>(null);

export function CallbackModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const value = useMemo(() => ({ isOpen, open: () => setIsOpen(true), close: () => setIsOpen(false) }), [isOpen]);

  return <CallbackModalContext.Provider value={value}>{children}</CallbackModalContext.Provider>;
}

// "Request Callback" is meant to be a lighter ask than the full quote form
// (name, phone, best time to call) -- this hook lets any button anywhere in
// the tree open that shared modal instead of linking to /quote.
export function useCallbackModal() {
  const ctx = useContext(CallbackModalContext);
  if (!ctx) throw new Error("useCallbackModal must be used within a CallbackModalProvider");
  return ctx;
}
