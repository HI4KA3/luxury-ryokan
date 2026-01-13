import { Section } from "@/components/ui/section";
import { Heading, Text } from "@/components/ui/typography";
import { PageHeader } from "@/components/layout/PageHeader";

export default function AboutPage() {
    return (
        <main>
            <PageHeader
                title="Our Story"
                subtitle="PHILOSOPHY"
                image="/images/hero-ryokan.png"
            />

            <Section>
                <div className="max-w-3xl mx-auto space-y-12">
                    <div>
                        <Heading level={2}>The Luxury of Empty Space</Heading>
                        <Text className="text-lg leading-relaxed">
                            In a world full of noise, we believe true luxury is silence.
                            KUU NO NIWA (Garden of the Sky) was built on the philosophy of "Ma" (Negative Space).
                            It is not just about what is there, but what is not there.
                        </Text>
                    </div>

                    <div>
                        <Heading level={3}>History</Heading>
                        <Text>
                            Established in 1920 as a small tea house for travelers, we have evolved into a sanctuary for modern souls.
                            The current architecture, completed in 2024, marries traditional sukiya style with modern minimalism.
                        </Text>
                    </div>

                    <div>
                        <Heading level={3}>Hospitality (Omotenashi)</Heading>
                        <Text>
                            We anticipate your needs before you realize them yourself.
                            Our service is invisible, yet ever-present.
                        </Text>
                    </div>
                </div>
            </Section>
        </main>
    );
}
