import { Section } from "@/components/ui/section";
import { Heading, Text } from "@/components/ui/typography";
import { rooms } from "@/content/rooms";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() {
    return rooms.map((room) => ({
        slug: room.slug,
    }));
}

export default function RoomDetailPage({ params }: { params: { slug: string } }) {
    const room = rooms.find((r) => r.slug === params.slug);

    if (!room) {
        notFound();
    }

    return (
        <main>
            {/* Simple Header for Detail */}
            <div className="relative h-[60vh] w-full">
                <Image
                    src={room.images[0]}
                    alt={room.name}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16 text-white bg-gradient-to-t from-black/60 to-transparent">
                    <div className="container mx-auto">
                        <span className="block text-sm tracking-widest mb-2 opacity-80">GUEST ROOM</span>
                        <h1 className="font-heading text-4xl md:text-6xl mb-4">{room.name}</h1>
                        <p className="font-sans text-lg opacity-90 max-w-2xl">{room.descriptionJa}</p>
                    </div>
                </div>
            </div>

            <Section>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                    <div className="lg:col-span-2 space-y-12">
                        <div>
                            <Heading level={2}>Description</Heading>
                            <Text className="text-lg leading-relaxed mb-6">
                                {room.description}
                            </Text>
                            <Text className="text-muted-foreground">
                                Experience the pinnacle of Japanese hospitality in this meticulously designed room.
                                Whether you are gazing at the garden or relaxing in the bath, time stands still here.
                            </Text>
                        </div>

                        <div>
                            <Heading level={3}>Room Features</Heading>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                                {room.features.map((feature) => (
                                    <li key={feature} className="flex items-center text-foreground/80">
                                        <span className="w-1.5 h-1.5 bg-accent rounded-full mr-3" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Gallery Grid */}
                        <div className="grid grid-cols-2 gap-4">
                            {/* Placeholder for more images - reusing array if length > 1 */}
                            {room.images.map((img, i) => (
                                <div key={i} className="relative aspect-[4/3] rounded-sm overflow-hidden">
                                    <Image src={img} alt={`${room.name} ${i}`} fill className="object-cover" />
                                </div>
                            ))}
                            {/* Add some placeholders if only 1 image */}
                            {room.images.length === 1 && (
                                <div className="relative aspect-[4/3] bg-neutral-100 flex items-center justify-center text-muted-foreground">
                                    Image Placeholder
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="lg:col-span-1">
                        <div className="sticky top-24 border border-border p-8 rounded-sm bg-background shadow-sm">
                            <div className="text-center mb-6">
                                <span className="text-sm text-muted-foreground block mb-2">Rates from</span>
                                <span className="text-3xl font-heading">¥{room.price.toLocaleString()}</span>
                                <span className="text-xs text-muted-foreground block mt-1">per person / night</span>
                            </div>

                            <div className="space-y-4 mb-8 text-sm">
                                <div className="flex justify-between border-b border-border pb-2">
                                    <span className="text-muted-foreground">Capacity</span>
                                    <span>1 - {room.capacity} Guests</span>
                                </div>
                                <div className="flex justify-between border-b border-border pb-2">
                                    <span className="text-muted-foreground">Size</span>
                                    <span>{room.size} m²</span>
                                </div>
                                <div className="flex justify-between border-b border-border pb-2">
                                    <span className="text-muted-foreground">Bed Type</span>
                                    <span>{room.bedType}</span>
                                </div>
                            </div>

                            <Button className="w-full mb-4" asChild>
                                <Link href={`/booking?room=${room.slug}`}>Check Availability</Link>
                            </Button>
                            <Button variant="outline" className="w-full" asChild>
                                <Link href="/contact">Inquiry</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </Section>
        </main>
    );
}
