import Link from "next/link";
import Image from "next/image";
import { Section } from "@/components/ui/section";
import { Heading, Text } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

interface TeaserProps {
    title: string;
    subtitle: string;
    description: string;
    image: string;
    href: string;
    reverse?: boolean;
}

export function Teaser({ title, subtitle, description, image, href, reverse = false }: TeaserProps) {
    return (
        <Section className="py-24">
            <div className={cn("flex flex-col md:flex-row gap-12 md:gap-24 items-center", reverse ? "md:flex-row-reverse" : "")}>
                <div className="w-full md:w-1/2 aspect-[3/4] md:aspect-[4/5] relative">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="w-full md:w-1/2 text-center md:text-left">
                    <span className="text-accent tracking-[0.2em] text-sm block mb-4">{subtitle}</span>
                    <Heading level={2}>{title}</Heading>
                    <Text className="mb-8 max-w-md mx-auto md:mx-0">
                        {description}
                    </Text>
                    <Link href={href} className="inline-block border-b border-foreground pb-1 hover:text-accent hover:border-accent transition-colors tracking-widest uppercase text-sm">
                        Discover More
                    </Link>
                </div>
            </div>
        </Section>
    );
}
