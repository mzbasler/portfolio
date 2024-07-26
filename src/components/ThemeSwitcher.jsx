import React, { useState, useEffect } from "react";

const ThemeSwitcher = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    const theme = isDarkMode ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <button onClick={toggleTheme} style={{ margin: "20px" }}>
      Switch to {isDarkMode ? "Light" : "Dark"} Theme
    </button>
  );
};

export default ThemeSwitcher;
