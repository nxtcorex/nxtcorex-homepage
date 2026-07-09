"use client";

import * as React from "react";

export function ThemeInitializer() {
  React.useEffect(() => {
    // Check if theme preference is stored
    const storedTheme = localStorage.getItem("theme");
    
    if (storedTheme) {
      document.documentElement.classList.remove("light", "dark");
      document.documentElement.classList.add(storedTheme);
    } else {
      // Default to light theme
      document.documentElement.classList.add("light");
    }
  }, []);

  return null;
}