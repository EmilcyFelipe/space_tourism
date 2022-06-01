import React, { createContext, useState } from "react";

export const AppContext = createContext({});
const [destinySelected, setDestinySelected] = useState(null);

export default function AppProvider({ children }) {
  return (
    <AppContext.Provider value={{ destinySelected, setDestinySelected }}>
      {children}
    </AppContext.Provider>
  );
}
