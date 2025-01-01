import React, { createContext, useState, ReactNode } from "react";

interface BookContextType {
  language: string;
  category: string;
  setlanguage: (value: string) => void;
  setCategory: (value: string) => void;
}

export const BookContext = createContext<BookContextType | null>(null);

export const BookProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [language, setlanguage] = useState<string>("");
  const [category, setCategory] = useState<string>("");

  return (
    <BookContext.Provider
      value={{ language, category, setlanguage, setCategory }}
    >
      {children}
    </BookContext.Provider>
  );
};
