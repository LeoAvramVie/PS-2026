"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative h-[100dvh] w-full overflow-hidden bg-[#111]">
            {/* Background Video */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 h-full w-full object-cover grayscale contrast-[1.1] brightness-[0.6]"
            >
                <source src="/hero-loop.mp4" type="video/mp4" />
                {/* Fallback for browsers that don't support video */}
                <div className="absolute inset-0 bg-[#111]" />
            </video>

            {/* Navbar Overlay */}
            <nav className="absolute left-0 top-0 z-20 flex w-full items-center justify-between p-8 text-white">
                <div className="font-bold">PS</div>
                <div className="flex gap-8 text-xs font-medium uppercase tracking-[0.2em]">
                    <Link href="#dates" className="hover:opacity-70 transition-opacity">
                        Dates
                    </Link>
                    <Link href="#music" className="hover:opacity-70 transition-opacity">
                        Music
                    </Link>
                    <Link href="#contact" className="hover:opacity-70 transition-opacity">
                        Contact
                    </Link>
                </div>
            </nav>

            {/* Center Content */}
            <div className="relative z-10 flex h-full w-full items-center justify-center">
                <motion.h1
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="text-[clamp(3rem,14vw,12rem)] font-black text-white mix-blend-exclusion"
                >
                    PHILIPP STRAUB
                </motion.h1>
            </div>
        </section>
    );
}
