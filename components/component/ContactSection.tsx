import { Button } from "@/components/ui/button";

export const ContactSection = () => {
    return (
        <section id="contact" className="py-16 md:py-24 px-4 md:px-8">
            <div className="max-w-3xl mx-auto space-y-8 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
                <p className="text-muted-foreground">
                    Have any questions or want to join WeCode? Feel free to reach out to us!
                </p>
                <Button className="px-8 py-3 text-lg">Contact Us</Button>
            </div>
        </section>
    );
};
