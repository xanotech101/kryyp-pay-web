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
  verification: {
    google: "gzHa6EcS_SI0KMCc3bJW2a3V8V9bZ0MJx0fvQ6XnmRs",
  },
};


import ThemeProvider from "../component/ThemeProvider/ThemeProvider";

export default function RootLayout({ children }) {
  return (
 <html lang="en">
  
      <body className="bg-lightbg dark:bg-darkbg">
         <ThemeProvider>
       {children}
        </ThemeProvider>
      </body>
     
    </html>
  );
}

  
