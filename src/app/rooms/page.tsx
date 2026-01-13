import { Section } from "@/components/ui/section";
import { Heading, Text } from "@/components/ui/typography";
import { rooms } from "@/content/rooms";
import { Hero } from "@/components/home/Hero"; // Reusing Hero or create a simple page header? 
// Better create a PageHeader component for internal pages.
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

function PageHeader({ title, subtitle, image }: { title: string, subtitle: string, image: string }) {
    return (
        <section className="relative h-[50vh] w-full flex items-center justify-center overflow-hidden">
            <Image src={image} alt={title} fill className="object-cover brightness-75" priority />
            <div className="relative z-10 text-center text-white">
                <span className="text-sm tracking-[0.3em] block mb-4 animate-fade-in">{subtitle}</span>
                <Heading level={1} className="text-white mb-0 animate-slide-up">{title}</Heading>
            </div>
        </section>
    )
}

export default function RoomsPage() {
    return (
        <main>
            <PageHeader
                title="Guest Rooms"
                subtitle="ACCOMMODATION"
                image="/images/room-suite.png"
            />

            <Section>
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <Heading level={2}>A Sanctuary of Silence</Heading>
                    <Text>
                        Designed with the concept of "empty space," our rooms offer a minimalist sanctuary where the mind can rest.
                        All rooms feature tatami mats, low furnishings, and views of the surrounding nature.
                    </Text>
                </div>

                <div className="space-y-24">
                    {rooms.map((room, index) => (
                        <div key={room.slug} className={`flex flex-col md:flex-row gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                            <div className="w-full md:w-1/2 aspect-[4/3] relative group overflow-hidden">
                                <Link href={`/rooms/${room.slug}`}>
                                    <Image
                                        src={room.images[0]}
                                        alt={room.name}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                </Link>
                            </div>
                            <div className="w-full md:w-1/2">
                                <Heading level={3} className="mb-4">
                                    <Link href={`/rooms/${room.slug}`} className="hover:text-accent transition-colors">
                                        {room.name}
                                    </Link>
                                </Heading>
                                <Text className="mb-6">{room.description}</Text>
                                <div className="grid grid-cols-2 gap-4 mb-8 text-sm text-muted-foreground border-y border-border py-4">
                                    <div>Size: {room.size}m²</div>
                                    <div>Capacity: 1-{room.capacity} Guests</div>
                                    <div>Bed: {room.bedType}</div>
                                    <div>View: {room.features[1]}</div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <Button asChild>
                                        <Link href={`/booking?room=${room.slug}`}>Book Now</Link>
                                    </Button>
                                    <Button variant="outline" asChild>
                                        <Link href={`/rooms/${room.slug}`}>View Details</Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Section>
        </main>
    );
}
