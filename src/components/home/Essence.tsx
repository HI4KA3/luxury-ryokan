import { Section } from "@/components/ui/section";
import { Heading, Text } from "@/components/ui/typography";
import Image from "next/image";

export function Essence() {
    return (
        <Section className="bg-background">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1 relative h-[400px] md:h-[600px] w-full">
                    <Image
                        src="/images/room-suite.png" // Reusing suite image for essence visual
                        alt="Tatami Room"
                        fill
                        className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    />
                </div>
                <div className="order-1 md:order-2 md:pl-12">
                    <span className="text-accent tracking-[0.2em] text-sm block mb-4">OUR PHILOSOPHY</span>
                    <Heading level={2}>A Timeless Retreat</Heading>
                    <div className="space-y-6">
                        <Text>
                            Nestled in the mountains of Shimotsuke, KUU NO NIWA (Garden of the Sky) offers a sanctuary away from the modern world.
                        </Text>
                        <Text>
                            Every detail, from the aroma of burning incense to the texture of the tatami mats, is curated to bring you back to your senses. Here, time flows slower.
                        </Text>
                        <div className="writing-vertical-rl text-lg font-serif border-r border-accent/30 pr-4 h-48 leading-loose tracking-widest text-foreground/80 hidden md:block">
                            心がほどける、<br />
                            なにもしない贅沢。
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
}
