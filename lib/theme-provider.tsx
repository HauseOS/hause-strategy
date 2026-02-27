"use client";

import * as React from "react";

interface ThemeProviderProps {
  children: React.ReactNode;
  attribute?: string;
  defaultTheme?: string;
  enableSystem?: boolean;
}

export function ThemeProvider({
  children,
  attribute = "class",
  defaultTheme = "dark",
  enableSystem = true,
}: ThemeProviderProps) {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);

    // Set initial theme
    const savedTheme =
      typeof window !== "undefined"
        ? localStorage.getItem("theme")
        : defaultTheme;

    const theme = savedTheme || (enableSystem ? getSystemTheme() : defaultTheme);
    applyTheme(theme);
  }, [defaultTheme, enableSystem]);

  const toggleTheme = () => {
    const current =
      typeof window !== "undefined"
        ? document.documentElement.classList.contains("light")
          ? "light"
          : "dark"
        : "dark";
    const newTheme = current === "dark" ? "light" : "dark";
    applyTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <ThemeContext.Provider value={{ toggleTheme, mounted }}>
      {mounted && children}
    </ThemeContext.Provider>
  );
}

function getSystemTheme() {
  if (typeof window !== "undefined") {
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }
  return "dark";
}

function applyTheme(theme: string) {
  if (typeof document === "undefined") return;
  const html = document.documentElement;
  if (theme === "light") {
    html.classList.add("light");
  } else {
    html.classList.remove("light");
  }
}

const ThemeContext = React.createContext<{
  toggleTheme: () => void;
  mounted: boolean;
}>({
  toggleTheme: () => {},
  mounted: false,
});

export function useTheme() {
  return React.useContext(ThemeContext);
}
