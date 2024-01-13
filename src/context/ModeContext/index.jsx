import React, { createContext, useContext, useState } from "react";

const ModeContext = createContext();

export const useModeContext = () => useContext(ModeContext);

const ModeContextComponent = ({ children }) => {
  const [mode, setMode] = useState(localStorage.getItem("mode" || "light"));
  const [isopen, setIsOpen] = useState(false);
  return (
    <ModeContext.Provider value={[mode, setMode, isopen, setIsOpen]}>
      {children}
    </ModeContext.Provider>
  );
};

export default ModeContextComponent;
