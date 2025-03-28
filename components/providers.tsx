"use client";

import type React from "react";

import { ThemeProvider as NextThemeProvider } from "next-themes";
import { Provider as ReduxProvider } from "react-redux";
import { ThemeProvider as StyledComponentsProvider } from "styled-components";
import { useState, useEffect } from "react";
import { store } from "@/lib/redux/store";
import { lightTheme, darkTheme } from "@/lib/styled/theme";
import StyledComponentsRegistry from "@/lib/styled/registry";

export function Providers({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);
  const [currentTheme, setCurrentTheme] = useState(lightTheme);

  // Update the theme only on the client side
  useEffect(() => {
    setMounted(true);

    // Check for user's preferred color scheme
    const isDarkMode =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    setCurrentTheme(isDarkMode ? darkTheme : lightTheme);

    // Listen for changes in color scheme preference
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e: MediaQueryListEvent) => {
      setCurrentTheme(e.matches ? darkTheme : lightTheme);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  // Prevent rendering with wrong theme
  if (!mounted) {
    return null;
  }

  return (
    <ReduxProvider store={store}>
      <StyledComponentsRegistry>
        <StyledComponentsProvider theme={currentTheme}>
          <NextThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </NextThemeProvider>
        </StyledComponentsProvider>
      </StyledComponentsRegistry>
    </ReduxProvider>
  );
}
