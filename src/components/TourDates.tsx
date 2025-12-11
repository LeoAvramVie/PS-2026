
import Link from "next/link";

const EVENTS = [
    {
        date: "MAR 14",
        isoDate: "2026-03-14T22:00",
        venue: "Watergate",
        city: "Berlin",
        link: "https://ra.co",
    },
    {
        date: "APR 02",
        isoDate: "2026-04-02T23:00",
        venue: "Pacha",
        city: "Ibiza",
        link: "https://pacha.com",
    },
    {
        date: "MAY 20",
        isoDate: "2026-05-20T14:00",
        venue: "Sonar Festival",
        city: "Barcelona",
        link: "https://sonar.es",
    },
    {
        date: "JUN 10",
        isoDate: "2026-06-10T20:00",
        venue: "Exhale",
        city: "Los Angeles",
        link: "https://exhaleparty.com",
    },
];

export default function TourDates() {
    const jsonLd = EVENTS.map((event) => ({
        "@context": "https://schema.org",
        "@type": "MusicEvent",
        "name": `Philipp Straub at ${event.venue}`,
        "startDate": event.isoDate,
        "location": {
            "@type": "Place",
            "name": event.venue,
            "address": {
                "@type": "PostalAddress",
                "addressLocality": event.city,
            },
        },
        "performer": {
            "@type": "Person",
            "name": "Philipp Straub",
        },
        "url": event.link,
    }));

    return (
        <section id="dates" className="mx-auto max-w-4xl px-6 py-24">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <div className="mb-12 flex items-baseline justify-between">
                <h2 className="text-sm font-bold tracking-widest text-neutral-500">
                    UPCOMING DATES
                </h2>
                <span className="text-xs text-neutral-600">2026 SEASON</span>
            </div>

            <div className="flex flex-col">
                {EVENTS.map((event, i) => (
                    <Link
                        key={i}
                        href={event.link}
                        target="_blank"
                        className="group grid grid-cols-[100px_1fr_auto] items-center border-t border-[#333] py-6 transition-colors duration-300 hover:bg-white hover:text-black"
                    >
                        <div className="font-mono text-sm text-neutral-400 transition-colors group-hover:text-black">
                            {event.date}
                        </div>
                        <div className="text-xl font-bold uppercase tracking-tight md:text-3xl">
                            {event.venue}
                        </div>
                        <div className="text-right text-sm font-medium uppercase tracking-widest md:text-base">
                            {event.city}
                        </div>
                    </Link>
                ))}
                {/* Bottom border for last item */}
                <div className="border-t border-[#333]" />
            </div>
        </section>
    );
}
