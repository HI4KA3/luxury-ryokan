import { Heading } from "@/components/ui/typography";
import Image from "next/image";

interface PageHeaderProps {
    title: string;
    subtitle: string;
    image: string;
}

export function PageHeader({ title, subtitle, image }: PageHeaderProps) {
    return (
        <section className="relative h-[50vh] w-full flex items-center justify-center overflow-hidden">
            <Image src={image} alt={title} fill className="object-cover brightness-75" priority />
            <div className="absolute inset-0 bg-black/20" />
            <div className="relative z-10 text-center text-white">
                <span className="text-sm tracking-[0.3em] block mb-4 animate-fade-in uppercase">{subtitle}</span>
                <Heading level={1} className="text-white mb-0 animate-slide-up drop-shadow-md">{title}</Heading>
            </div>
        </section>
    );
}
