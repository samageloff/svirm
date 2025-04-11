import type React from "react";
import { Inter } from "next/font/google";
import { Providers } from "../components/providers";

import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sam Ageloff - Software Engineer",
  description:
    "A collection of projects and experiments by Sam Ageloff, a software engineer based in Chicago/Oak Park.",
  keywords:
    "web development, software engineering, projects, experiments, Sam Ageloff",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta
          name="keywords"
          content="web development, projects, experiments, Sam Ageloff"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="A collection of projects and experiments by Sam Ageloff, a software engineer based in Chicago/Oak Park."
        />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        <Providers>
          <div className="relative flex min-h-screen flex-col">
            <main>{children}</main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
