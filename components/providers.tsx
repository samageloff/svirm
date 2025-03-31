"use client";

import type React from "react";

import { ThemeProvider as NextThemeProvider } from "next-themes";
import { Provider as ReduxProvider } from "react-redux";
import { ThemeProvider as StyledComponentsProvider } from "styled-components";
import { store } from "@/lib/redux/store";
import { lightTheme } from "@/lib/styled/theme";
import StyledComponentsRegistry from "@/lib/styled/registry";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ReduxProvider store={store}>
      <StyledComponentsRegistry>
        <StyledComponentsProvider theme={lightTheme}>
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
