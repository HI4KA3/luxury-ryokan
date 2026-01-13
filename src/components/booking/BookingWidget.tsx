"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

interface BookingWidgetProps {
    className?: string;
}

export function BookingWidget({ className }: BookingWidgetProps) {
    const router = useRouter();
    const [checkIn, setCheckIn] = useState("");
    const [checkOut, setCheckOut] = useState("");
    const [guests, setGuests] = useState("2");

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        const params = new URLSearchParams({
            checkIn,
            checkOut,
            guests
        });
        router.push(`/booking?${params.toString()}`);
    };

    return (
        <form onSubmit={handleSearch} className={cn("bg-white p-6 md:p-8 shadow-lg flex flex-col md:flex-row gap-4 items-end max-w-4xl mx-auto w-full", className)}>
            <div className="w-full md:w-1/3">
                <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2 font-medium">Check-in</label>
                <input
                    type="date"
                    className="w-full border-b border-gray-300 pb-2 focus:outline-none focus:border-accent bg-transparent text-gray-900"
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    required
                />
            </div>
            <div className="w-full md:w-1/3">
                <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2 font-medium">Check-out</label>
                <input
                    type="date"
                    className="w-full border-b border-gray-300 pb-2 focus:outline-none focus:border-accent bg-transparent text-gray-900"
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                    required
                />
            </div>
            <div className="w-full md:w-1/4">
                <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2 font-medium">Guests</label>
                <select
                    className="w-full border-b border-gray-300 pb-2 focus:outline-none focus:border-accent bg-transparent text-gray-900"
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                >
                    {[1, 2, 3, 4, 5, 6].map(n => (
                        <option key={n} value={n}>{n} Guests</option>
                    ))}
                </select>
            </div>
            <div className="w-full md:w-auto">
                <Button className="w-full md:w-auto min-w-[140px]">Search</Button>
            </div>
        </form>
    );
}
