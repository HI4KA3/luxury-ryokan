import Image from "next/image";
import { Button } from "@/components/ui/button";
import { BookingWidget } from "@/components/booking/BookingWidget";

export function Hero() {
    return (
        <section className="relative h-screen w-full overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    src="/images/hero-ryokan.png"
                    alt="Ryokan Exterior"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/30" /> {/* Scrim */}
            </div>

            {/* Content */}
            <div className="relative h-full flex flex-col items-center justify-center text-center text-white px-4">
                <p className="tracking-[0.5em] mb-6 text-sm md:text-base animate-slide-up" style={{ animationDelay: "0.2s" }}>
                    SHIMOTSUKE, JAPAN
                </p>
                <h1 className="font-heading text-4xl md:text-7xl lg:text-8xl tracking-wider mb-8 drop-shadow-lg animate-slide-up" style={{ animationDelay: "0.4s" }}>
                    静寂と、贅の余白。
                </h1>
                <p className="font-display text-xl md:text-3xl tracking-widest italic opacity-90 mb-12 animate-slide-up" style={{ animationDelay: "0.6s" }}>
                    Silence, and the luxury of empty space.
                </p>

                <div className="flex space-x-6 animate-slide-up opacity-0" style={{ animationDelay: "0.8s", animationFillMode: "forwards" }}>
                    <Button variant="primary" size="lg" className="bg-white text-black hover:bg-white/90 border-none">
                        Check Availability
                    </Button>
                    <Button variant="outline" size="lg" className="text-white border-white hover:bg-white/20 hover:text-white bg-transparent">
                        View Rooms
                    </Button>
                </div>

                <div className="animate-fade-in opacity-0 mt-16 w-full px-4" style={{ animationDelay: "1s", animationFillMode: "forwards" }}>
                    <BookingWidget />
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
                <span className="block w-[1px] h-16 bg-white/50 mx-auto"></span>
            </div>
        </section>
    );
}
