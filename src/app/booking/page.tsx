"use client";

import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { Section } from "@/components/ui/section";
import { Heading, Text } from "@/components/ui/typography";
import { PageHeader } from "@/components/layout/PageHeader";
import { rooms } from "@/content/rooms";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

function BookingContent() {
    const searchParams = useSearchParams();
    const initialCheckIn = searchParams.get("checkIn") || "";
    const initialCheckOut = searchParams.get("checkOut") || "";
    const initialGuests = searchParams.get("guests") || "2";
    const roomSlug = searchParams.get("room");

    const [searching, setSearching] = useState(false);

    // Simulate loading
    useEffect(() => {
        setSearching(true);
        const timer = setTimeout(() => {
            setSearching(false);
        }, 1000);
        return () => clearTimeout(timer);
    }, [searchParams]);

    return (
        <Section>
            <div className="max-w-4xl mx-auto">
                <div className="bg-neutral-50 p-6 mb-12 border border-border">
                    <div className="flex flex-wrap gap-6 text-sm">
                        <div>
                            <span className="text-muted-foreground block text-xs uppercase">Check-in</span>
                            <span className="font-medium">{initialCheckIn || "Select Date"}</span>
                        </div>
                        <div>
                            <span className="text-muted-foreground block text-xs uppercase">Check-out</span>
                            <span className="font-medium">{initialCheckOut || "Select Date"}</span>
                        </div>
                        <div>
                            <span className="text-muted-foreground block text-xs uppercase">Guests</span>
                            <span className="font-medium">{initialGuests} People</span>
                        </div>
                        <div className="ml-auto">
                            <Button variant="outline" size="sm" asChild>
                                <Link href="/">Modify Search</Link>
                            </Button>
                        </div>
                    </div>
                </div>

                <Heading level={2} className="mb-8">Available Rooms</Heading>

                {searching ? (
                    <div className="space-y-8 animate-pulse">
                        <div className="h-64 bg-neutral-200 rounded"></div>
                        <div className="h-64 bg-neutral-200 rounded"></div>
                    </div>
                ) : (
                    <div className="space-y-8">
                        {rooms.map(room => (
                            <div key={room.slug} className={`border border-border p-6 flex flex-col md:flex-row gap-8 ${roomSlug === room.slug ? 'ring-2 ring-accent' : ''}`}>
                                <div className="w-full md:w-1/3 aspect-[4/3] relative">
                                    <Image src={room.images[0]} alt={room.name} fill className="object-cover" />
                                </div>
                                <div className="w-full md:w-2/3 flex flex-col">
                                    <Heading level={3} className="mb-2">{room.name}</Heading>
                                    <Text className="text-muted-foreground text-sm mb-4 line-clamp-2">{room.description}</Text>

                                    <ul className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-neutral-500 mb-6">
                                        <li>Size: {room.size}m²</li>
                                        <li>Cap: {room.capacity}</li>
                                        <li>Bed: {room.bedType}</li>
                                    </ul>

                                    <div className="mt-auto flex items-center justify-between border-t border-border pt-4">
                                        <div>
                                            <span className="text-xs text-muted-foreground block">Regular Rate</span>
                                            <span className="text-xl font-heading">¥{room.price.toLocaleString()}</span>
                                            <span className="text-xs"> / night</span>
                                        </div>
                                        <Button asChild>
                                            <Link href={`/contact?subject=Reservation Request: ${room.name}&dates=${initialCheckIn}-${initialCheckOut}`}>
                                                Select Room
                                            </Link>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </Section>
    )
}

export default function BookingPage() {
    return (
        <main>
            <PageHeader
                title="Reservations"
                subtitle="BOOK YOUR STAY"
                image="/images/hero-ryokan.png"
            />
            <Suspense fallback={<div className="p-24 text-center">Loading...</div>}>
                <BookingContent />
            </Suspense>
        </main>
    );
}
