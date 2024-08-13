"use client";  // Ensure this is a client component

export default function Intro() {
    return (
        <div className="h-screen w-screen bg-gradient-to-r from-black to-deepSpace flex items-center justify-center relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 bg-stars-pattern opacity-50 animate-twinkle"></div>
            <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-alienGreen rounded-full filter blur-2xl opacity-30 animate-pulse-slow"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-alienPurple rounded-full filter blur-3xl opacity-20 animate-pulse-slow"></div>

            {/* Main Content */}
            <div className="relative z-10 flex flex-col items-center">
                {/* Logo with advanced animation */}
                <img
                    src="/favicon.ico"
                    alt="Brand Logo"
                    className="w-32 h-32 animate-bounce-slow drop-shadow-alienGlow"
                />
                <h1 className="mt-4 text-6xl font-extrabold tracking-widest text-alienGreen animate-fadeIn">
                    Galactic Oasis
                </h1>
            </div>

            {/* Bottom Glow */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-alienBlue to-transparent opacity-60 blur-lg"></div>
        </div>
    );
}
