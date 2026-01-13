import { Section } from "@/components/ui/section";
import { Heading, Text } from "@/components/ui/typography";
import { PageHeader } from "@/components/layout/PageHeader";
import { siteConfig } from "@/content/site";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
    return (
        <main>
            <PageHeader
                title="Contact Us"
                subtitle="INQUIRY"
                image="/images/hero-ryokan.png"
            />

            <Section>
                <div className="max-w-2xl mx-auto text-center mb-16">
                    <Heading level={2}>Get in Touch</Heading>
                    <Text className="mb-6">
                        For reservations or inquiries, please use the form below or contact us directly.
                    </Text>
                    <div className="flex flex-col md:flex-row justify-center gap-8 text-sm font-medium">
                        <span>Tel: {siteConfig.contact.phone}</span>
                        <span>Email: {siteConfig.contact.email}</span>
                    </div>
                </div>

                <form className="max-w-xl mx-auto space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label htmlFor="name" className="text-sm font-medium">Name</label>
                            <input type="text" id="name" className="w-full p-3 border border-border bg-background focus:outline-none focus:border-accent" placeholder="Your Name" />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium">Email</label>
                            <input type="email" id="email" className="w-full p-3 border border-border bg-background focus:outline-none focus:border-accent" placeholder="your@email.com" />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                        <select id="subject" className="w-full p-3 border border-border bg-background focus:outline-none focus:border-accent">
                            <option>Reservation Inquiry</option>
                            <option>Special Request</option>
                            <option>Other</option>
                        </select>
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium">Message</label>
                        <textarea id="message" rows={5} className="w-full p-3 border border-border bg-background focus:outline-none focus:border-accent" placeholder="How can we help you?"></textarea>
                    </div>
                    <Button className="w-full">Send Message</Button>
                </form>
            </Section>
        </main>
    );
}
