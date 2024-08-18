import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { FaBars } from "react-icons/fa";
import wecode from '@/assets/wecode.png';
import Image from "next/image";
export const Header = () => {
    return (
        <header className="px-4 sticky top-0 z-[99] bg-black md:px-8 py-6 flex items-center justify-between">
            <Link href="#" className="flex items-center gap-2" prefetch={false}>
                <Image
                    src={wecode}
                    alt="Founder"
                    className="object-cover object-top w-8 h-8"
                    priority
                />
                <span className="text-2xl font-bold text-white">WeCode</span>
            </Link>
            <nav className="hidden md:flex items-center gap-6">
                <Link href="#" className="text-white hover:underline" prefetch={false}>
                    About Us
                </Link>
                <Link href="#" className="text-white hover:underline" prefetch={false}>
                    Domains
                </Link>
                <Link href="#" className="text-white hover:underline" prefetch={false}>
                    Events
                </Link>
                <Link href="#" className="text-white hover:underline" prefetch={false}>
                    Members
                </Link>
                <Link href="#" className="text-white hover:underline" prefetch={false}>
                    Contact
                </Link>
            </nav>
            <Button className="hidden md:inline-flex bg-green-500">Join Us</Button>
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="ghost" size="icon" className="md:hidden">
                        <FaBars className="w-6 h-6 text-white" />
                    </Button>
                </SheetTrigger>
                <SheetContent side="right" className="bg-[#a29bfe] text-white p-6 w-[300px]">
                    <div className="flex flex-col gap-6">
                        <Link href="#" className="text-lg font-medium hover:underline" prefetch={false}>
                            About Us
                        </Link>
                        <Link href="#" className="text-lg font-medium hover:underline" prefetch={false}>
                            Domains
                        </Link>
                        <Link href="#" className="text-lg font-medium hover:underline" prefetch={false}>
                            Events
                        </Link>
                        <Link href="#" className="text-lg font-medium hover:underline" prefetch={false}>
                            Members
                        </Link>
                        <Link href="#" className="text-lg font-medium hover:underline" prefetch={false}>
                            Contact
                        </Link>
                        <Button>Join Us</Button>
                    </div>
                </SheetContent>
            </Sheet>
        </header>
    );
};
