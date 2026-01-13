import Link from "next/link";
import Image from "next/image";
import { Section } from "@/components/ui/section";
import { Heading, Text } from "@/components/ui/typography";
import { rooms } from "@/content/rooms";
import { Button } from "@/components/ui/button";

export function FeaturedRooms() {
    return (
        <Section className="bg-foreground text-background">
            <div className="flex justify-between items-end mb-12">
                <div>
                    <span className="text-accent tracking-[0.2em] text-sm block mb-4">ACCOMMODATION</span>
                    <Heading level={2} className="text-background mb-0">Guest Rooms</Heading>
                </div>
                <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-black hidden md:inline-flex" asChild>
                    <Link href="/rooms">View All Rooms</Link>
                </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {rooms.map((room) => (
                    <Link key={room.slug} href={`/rooms/${room.slug}`} className="group block">
                        <div className="relative aspect-[4/3] overflow-hidden mb-4">
                            <Image
                                src={room.images[0]}
                                alt={room.name}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                        <h3 className="text-xl font-heading mb-2 group-hover:text-accent transition-colors">{room.name}</h3>
                        <Text variant="muted" className="text-background/60 line-clamp-2 md:h-12">
                            {room.description}
                        </Text>
                        <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-4">
                            <span className="text-sm font-mono text-accent">From ¥{room.price.toLocaleString()}</span>
                            <span className="text-xs uppercase tracking-wider text-background/50 group-hover:translate-x-2 transition-transform">Details &rarr;</span>
                        </div>
                    </Link>
                ))}
            </div>

            <div className="mt-8 text-center md:hidden">
                <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-black w-full" asChild>
                    <Link href="/rooms">View All Rooms</Link>
                </Button>
            </div>
        </Section>
    );
}
