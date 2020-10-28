import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

const ThemeLight = {
  palette: {
    primary: "#239b56",
    secondary: "#7e5109",
    ligth: "#DBC2AF",
    cancel: "#e70012",
  },
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(ThemeLight);

  return (
    <ThemeContext.Provider
      value={{
        theme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
