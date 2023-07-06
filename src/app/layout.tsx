import { Inter } from "next/font/google";
import React from "react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ChatGPT",
  description: "Chat Global Para Todelovers",
};

const RootLayout: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {
  return (
    <html lang="pt-br">
      <body className={inter.className}>{children}</body>
    </html>
  );
};

export default RootLayout;