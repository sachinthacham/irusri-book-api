import React, { useState, ReactNode, createContext } from "react";

interface selectedCardContextType {
  selectedCard: string;
  setSelectedCard: (value: string) => void;
}

export const SelectedCardContext =
  createContext<selectedCardContextType | null>(null);
export const SelectedCardProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [selectedCard, setSelectedCard] = useState<string>("");
  return (
    <SelectedCardContext.Provider value={{ selectedCard, setSelectedCard }}>
      {children}
    </SelectedCardContext.Provider>
  );
};
