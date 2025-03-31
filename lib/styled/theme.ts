export const lightTheme = {
  colors: {
    primary: "#0070f3",
    secondary: "#7928ca",
    background: "#ffffff",
    text: "#000000",
    muted: "#f1f1f1",
    border: "#e2e8f0",
    error: "#e53e3e",
    success: "#38a169",
  },
  fonts: {
    body: "Inter, system-ui, sans-serif",
    heading: "Inter, system-ui, sans-serif",
  },
  fontSizes: {
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
  },
  space: {
    xs: "0.25rem",
    sm: "0.5rem",
    md: "1rem",
    lg: "1.5rem",
    xl: "2rem",
    "2xl": "4rem",
    "3xl": "8rem",
  },
  radii: {
    sm: "0.125rem",
    md: "0.25rem",
    lg: "0.5rem",
    full: "9999px",
  },
};

export const darkTheme = {
  ...lightTheme,
  colors: {
    ...lightTheme.colors,
    primary: "#0070f3",
    secondary: "#9f7aea",
    background: "#1a202c",
    text: "#f7fafc",
    muted: "#2d3748",
    border: "#4a5568",
  },
};

export type Theme = typeof lightTheme;
