import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';

export const ContactSection = () => {
    return (
        <section id="contact" className="py-16 md:py-24 px-4 md:px-8">
            <div className="max-w-3xl mx-auto space-y-8 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
                <p className="text-text">
                    Have any questions or want to join WeCode? Feel free to reach out to us!
                </p>
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Button className="px-8 pt-2 pb-[0.7rem] text-lg bg-green-500 text-white">Contact Us</Button>
                </motion.div>
            </div>
        </section>
    );
};
