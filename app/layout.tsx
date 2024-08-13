import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Import the favicon
import favicon from './favicon.ico';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bathroom Review App",
  description: "Explore and review bathrooms across the galaxy!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-darkSpace text-alienGreen`}>
        <header className="p-6 text-center bg-gradient-to-r from-alienPurple to-alienBlue shadow-md flex items-center justify-center">
          {/* Logo and Title */}
          <img src={favicon.src} alt="Brand Logo" className="w-12 h-12 mr-4" />
          <h1 className="text-5xl font-extrabold tracking-tight">BATHROOM REVIEWS</h1>
        </header>
        <main className="min-h-screen p-6 flex justify-center items-center">
          {children}
        </main>
        <footer className="p-4 text-center bg-gradient-to-r from-alienPurple to-alienBlue shadow-md">
          <p className="text-lg">&copy; 2024 BATHROOM REVIEWS. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
