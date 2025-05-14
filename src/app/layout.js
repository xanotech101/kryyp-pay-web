// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata = {
  title: "Kryppay",
  description: "Crypto Extange app",
};

import Nav from '@/Components/Nav/nav'; 
import  ThemeProvider  from "@/Components/ThemeProvider/ThemeProvider"; 

export default function RootLayout({ children }) {
  return (
 <html lang="en">
  
      <body>
         <ThemeProvider>
        <Nav />
       {children}
        </ThemeProvider>
      </body>
     
    </html>
  );
}

  
