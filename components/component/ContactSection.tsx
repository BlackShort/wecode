import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';
import wecodeEvent from '@/assets/WeCode_Link.jpg';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "../ui/textarea";
import Image from "next/image";
import Link from "next/link";

export const ContactSection = () => {
    return (
        <section id="contact" className="py-16 md:py-24 px-4 md:px-8">
            <div className="max-w-3xl mx-auto space-y-8 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
                <p className="text-text">
                    Have any questions or want to join WeCode? Feel free to reach out to us!
                </p>
                {/* <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <ContactForm />
                </motion.div> */}
                <div className="rounded-full w-[25rem] h-[25rem] border-[3px] border-slate-50 mx-auto">
                    <Image
                        src={wecodeEvent}
                        alt={'WeCode'}
                        className="object-cover object-top"
                        priority
                    />
                </div>
                <Link href={'https://chat.whatsapp.com/BuU2bAc6h7n3KEPyG8ZXGe'}>
                    <Button variant="outline" className="hidden md:inline-flex bg-green-500 mt-4 text-white hover:bg-green-600">Let's Connect</Button>
                </Link>
            </div>
        </section>
    );
};


const ContactForm = () => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline" className="hidden md:inline-flex bg-green-500 text-white hover:bg-green-600">Contact Us</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Contact Us</DialogTitle>
                    <DialogDescription>
                        Fill out the form below and we&apos;ll get back to you as soon as possible.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="name">
                            Name
                        </Label>
                        <Input id="name" placeholder="Enter your name" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="email">
                            Email
                        </Label>
                        <Input id="email" type="email" placeholder="Enter your email" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="message">
                            Message
                        </Label>
                        <Textarea id="message" placeholder="Enter your message" />
                    </div>
                </div>
                {/* <DialogFooter>
                    <Button type="submit">Send Message</Button>
                </DialogFooter> */}
            </DialogContent>
        </Dialog>
    )
}
