import { Section } from "@/components/ui/section";
import { Heading } from "@/components/ui/typography";
import { PageHeader } from "@/components/layout/PageHeader";
import Image from "next/image";

const galleryImages = [
    { src: "/images/hero-ryokan.png", alt: "Exterior", category: "Exterior" },
    { src: "/images/room-suite.png", alt: "Suite Room", category: "Rooms" },
    { src: "/images/onsen-outdoor.png", alt: "Open-Air Bath", category: "Onsen" },
    { src: "/images/dining-kaiseki.png", alt: "Kaiseki", category: "Dining" },
    // Repeats for grid density
    { src: "/images/dining-kaiseki.png", alt: "Detail", category: "Dining" },
    { src: "/images/hero-ryokan.png", alt: "Interior", category: "Interior" },
];

export default function GalleryPage() {
    return (
        <main>
            <PageHeader
                title="Photo Gallery"
                subtitle="VISUALS"
                image="/images/hero-ryokan.png"
            />

            <Section>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {galleryImages.map((img, i) => (
                        <div key={i} className="aspect-square relative group overflow-hidden cursor-pointer bg-neutral-100">
                            <Image
                                src={img.src}
                                alt={img.alt}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <span className="text-white tracking-widest text-sm uppercase">{img.category}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </Section>
        </main>
    );
}
