import { Inter } from "next/font/google";

import HomePage from './HomePage'

import "./globals.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Imagem do Dia - Api da Nasa",
  description: "Site usado para estudos",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <HomePage />
        
        {children}
        </body>
    </html>
  );
}