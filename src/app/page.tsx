import { Hero } from "@/components/home/Hero";
import { Essence } from "@/components/home/Essence";
import { FeaturedRooms } from "@/components/home/FeaturedRooms";
import { Teaser } from "@/components/home/Teaser";
import { Access } from "@/components/home/Access";

export default function Home() {
    return (
        <main className="min-h-screen">
            <Hero />
            <Essence />
            <FeaturedRooms />

            <Teaser
                title="Healing Waters"
                subtitle="ONSEN"
                description="Our source-fed hot springs rich in sodium chloride warm you from the core. Enjoy the changing seasons from our open-air baths."
                image="/images/onsen-outdoor.png"
                href="/onsen"
            />

            <Teaser
                title="Seasonal Kaiseki"
                subtitle="DINING"
                description="We express the four seasons through locally sourced ingredients and exquisite pottery. A feast for both the eyes and the palate."
                image="/images/dining-kaiseki.png"
                href="/dining"
                reverse
            />

            <Access />
        </main>
    );
}
