import Link from "next/link";

export default function About() {
    return (
        <section className="mx-auto max-w-4xl px-6 py-32">
            <p className="text-left text-2xl font-light leading-relaxed text-neutral-500 md:text-4xl">
                Philipp Straub is more than a DJ. As the visionary behind{" "}
                <span className="cursor-pointer text-white transition-all duration-300 hover:text-white hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
                    Titan International
                </span>{" "}
                and a global consultant, he bridges the gap between underground
                electronic culture and high-level business strategy. A 25-year legacy
                shaping the industry from Vienna to the world.
            </p>
        </section>
    );
}
