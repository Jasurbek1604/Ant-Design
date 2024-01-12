import React, { createContext, useContext, useState } from "react";

const ModeContext = createContext();

export const useModeContext = () => useContext(ModeContext);

const ModeContextComponent = ({ children }) => {
  const [mode, setMode] = useState(localStorage.getItem("mode" || "light"));
  return (
    <ModeContext.Provider value={[mode, setMode]}>
      {children}
    </ModeContext.Provider>
  );
};

export default ModeContextComponent;
