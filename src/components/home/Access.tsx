import { Section } from "@/components/ui/section";
import { Heading, Text } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Access() {
    return (
        <Section className="bg-background">
            <div className="flex flex-col md:flex-row gap-12">
                <div className="w-full md:w-1/2">
                    <span className="text-accent tracking-[0.2em] text-sm block mb-4">LOCATION</span>
                    <Heading level={2}>Getting Here</Heading>
                    <Text className="mb-6">
                        Located just 90 minutes from Tokyo, KUU NO NIWA is easily accessible by train or car.
                        We offer a complimentary shuttle service from the nearest station.
                    </Text>
                    <div className="space-y-4 mb-8">
                        <div className="flex items-center">
                            <span className="font-bold w-24 text-sm">TRAIN</span>
                            <span className="text-sm">Tokyo Stn. → (Shinkansen 50 min) → Utsunomiya Stn. → (Local Line 30 min) → Shimotsuke</span>
                        </div>
                        <div className="flex items-center">
                            <span className="font-bold w-24 text-sm">CAR</span>
                            <span className="text-sm">Tohoku Expressway (90 min from Tokyo)</span>
                        </div>
                    </div>
                    <Link
                        href="/access"
                        className="inline-flex items-center justify-center rounded-md border px-4 py-2 text-sm hover:bg-neutral-100"
                    >
                        View Full Access Details
                    </Link>

                </div>
                <div className="w-full md:w-1/2 h-[400px] bg-neutral-200 relative flex items-center justify-center">
                    <Text className="text-neutral-500">Google Maps Placeholder</Text>
                    {/* In a real app, embed Google Maps iframe here */}
                </div>
            </div>
        </Section>
    );
}
