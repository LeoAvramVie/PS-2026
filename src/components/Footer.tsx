
import Link from "next/link";
import { Instagram, Mail, AudioLines } from "lucide-react";

export default function Footer() {
    return (
        <footer className="flex flex-col items-center justify-center py-20 bg-black">
            <div className="flex gap-8">
                <Link
                    href="https://www.instagram.com/philippstraub/"
                    target="_blank"
                    className="text-neutral-400 transition-colors hover:text-white"
                >
                    <Instagram size={24} />
                    <span className="sr-only">Instagram</span>
                </Link>
                <Link
                    href="https://soundcloud.com/philippstraub"
                    target="_blank"
                    className="text-neutral-400 transition-colors hover:text-white"
                >
                    <AudioLines size={24} />
                    <span className="sr-only">SoundCloud</span>
                </Link>
                <Link
                    href="mailto:contact@philippstraub.com"
                    className="text-neutral-400 transition-colors hover:text-white"
                >
                    <Mail size={24} />
                    <span className="sr-only">Contact</span>
                </Link>
            </div>

            <div className="mt-8 text-xs text-neutral-700">
                © 2025 Titan International. <span className="hover:text-neutral-500 cursor-pointer transition-colors">Imprint.</span>
            </div>
        </footer>
    );
}
