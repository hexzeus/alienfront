"use client";  // Ensure this is a client component

import { useState, useEffect } from "react";
import Intro from "./components/Intro";
import { Inter } from "next/font/google";
import Image from "next/image";
import "./globals.css"; // Ensure global styles are applied

const inter = Inter({ subsets: ["latin"] });

export default function ClientRootLayout({ children }: { children: React.ReactNode }) {
    const [showIntro, setShowIntro] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowIntro(false);
        }, 3000); // Duration of the intro

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={`${inter.className} bg-gradient-to-b from-darkSpace to-deepSpace min-h-screen text-alienGreen`}>
            {showIntro ? (
                <Intro />
            ) : (
                <>
                    <header className="p-6 text-center bg-gradient-to-r from-alienPurple to-alienBlue shadow-lg flex items-center justify-center transition-transform duration-500 hover:scale-105">
                        <Image src="/favicon.ico" alt="Brand Logo" width={64} height={64} className="mr-4 animate-spin-slow" />
                        <h1 className="text-5xl font-extrabold tracking-tight drop-shadow-lg text-glow">
                            Galactic Oasis
                        </h1>
                    </header>
                    <main className="min-h-screen p-6 flex justify-center items-center transition-all duration-700 ease-in-out">
                        {children}
                    </main>
                    <footer className="p-4 text-center bg-gradient-to-r from-alienPurple to-alienBlue shadow-lg transition-colors duration-500 hover:from-alienBlue hover:to-alienPurple">
                        <p className="text-lg tracking-wider">&copy; 2024 Galactic Oasis. All rights reserved.</p>
                    </footer>
                </>
            )}
        </div>
    );
}
