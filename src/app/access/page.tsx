import { Section } from "@/components/ui/section";
import { Heading, Text } from "@/components/ui/typography";
import { PageHeader } from "@/components/layout/PageHeader";
import { siteConfig } from "@/content/site";
import { Button } from "@/components/ui/button";

export default function AccessPage() {
    return (
        <main>
            <PageHeader
                title="Location & Access"
                subtitle="JOURNEY"
                image="/images/hero-ryokan.png"
            />

            <Section>
                <div className="flex flex-col md:flex-row gap-16">
                    <div className="w-full md:w-1/2 space-y-8">
                        <div>
                            <Heading level={2}>Address</Heading>
                            <Text>{siteConfig.address.fullAddress}</Text>
                            <div className="mt-4">
                                <a
                                    href={`https://maps.google.com/?q=${siteConfig.address.fullAddress}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-accent underline"
                                >
                                    Open in Google Maps
                                </a>
                            </div>
                        </div>

                        <div>
                            <Heading level={3}>By Train</Heading>
                            <ul className="list-disc pl-5 space-y-2 text-foreground/80">
                                <li><strong>From Tokyo:</strong> Take the Tohoku Shinkansen to Utsunomiya (50 min), then transfer to the local line to Shimotsuke Station (30 min).</li>
                                <li><strong>From Station:</strong> Complimentary shuttle bus runs every hour from 14:00 to 17:00. Please book in advance.</li>
                            </ul>
                        </div>

                        <div>
                            <Heading level={3}>By Car</Heading>
                            <Text>
                                90 minutes from Tokyo via Tohoku Expressway. 20 minutes from the nearest interchange.
                                Free parking is available for 30 cars.
                            </Text>
                        </div>
                    </div>

                    <div className="w-full md:w-1/2 min-h-[400px] bg-neutral-200 flex items-center justify-center relative">
                        <Text className="text-neutral-500 font-bold">Map Embed Placeholder</Text>
                        {/* <iframe src="..." className="absolute inset-0 w-full h-full" /> */}
                    </div>
                </div>
            </Section>
        </main>
    );
}
