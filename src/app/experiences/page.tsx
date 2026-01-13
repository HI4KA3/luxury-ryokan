import { Section } from "@/components/ui/section";
import { Heading, Text } from "@/components/ui/typography";
import { PageHeader } from "@/components/layout/PageHeader";

export default function ExperiencesPage() {
    return (
        <main>
            <PageHeader
                title="Experiences"
                subtitle="ACTIVITIES"
                image="/images/room-suite.png"
            />

            <Section>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="border border-border p-6 hover:border-accent transition-colors">
                        <span className="text-4xl text-accent mb-4 block">01</span>
                        <Heading level={3}>Tea Ceremony</Heading>
                        <Text>Experience the art of tea in our traditional tea room.</Text>
                    </div>
                    <div className="border border-border p-6 hover:border-accent transition-colors">
                        <span className="text-4xl text-accent mb-4 block">02</span>
                        <Heading level={3}>Incense Appreciation</Heading>
                        <Text>Learn to listen to the scent of precious woods (Kodo).</Text>
                    </div>
                    <div className="border border-border p-6 hover:border-accent transition-colors">
                        <span className="text-4xl text-accent mb-4 block">03</span>
                        <Heading level={3}>Morning Yoga</Heading>
                        <Text>Start your day with gentle movement overlooking the garden.</Text>
                    </div>
                </div>
            </Section>
        </main>
    );
}
