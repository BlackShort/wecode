import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { FaBars } from "react-icons/fa";
import wecodeLight from '@/assets/wecode-light.png';
// import wecodeDark from '@/assets/wecode-dark.png';
import Image from "next/image";

export const Header = () => {
    return (
        <header className="px-4 sticky top-0 z-[99] md:px-5 pt-5 pb-3 flex items-center justify-between bg-white shadow-sm">
            <Link href="#" className="flex items-center gap-2" prefetch={false}>
                <Image
                    src={wecodeLight}
                    alt="WeCode"
                    className="object-cover object-top w-8 h-8"
                    priority
                />
                <span className="text-2xl font-bold text-gray-800">WeCode</span>
            </Link>
            <nav className="hidden md:flex items-center gap-6 font-medium">
                <Link href="#" className="text-gray-800 hover:underline" prefetch={false}>
                    About Us
                </Link>
                <Link href="#" className="text-gray-800 hover:underline" prefetch={false}>
                    Domains
                </Link>
                <Link href="#" className="text-gray-800 hover:underline" prefetch={false}>
                    Events
                </Link>
                <Link href="#" className="text-gray-800 hover:underline" prefetch={false}>
                    Members
                </Link>
                <Link href="#" className="text-gray-800 hover:underline" prefetch={false}>
                    Contact
                </Link>
            </nav>
            <Button className="hidden md:inline-flex bg-green-500 text-white hover:bg-green-600">Join Us</Button>
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="ghost" size="icon" className="md:hidden">
                        <FaBars className="w-6 h-6 text-gray-800" />
                    </Button>
                </SheetTrigger>
                <SheetContent side="right" className="bg-white text-gray-800 p-6 w-[300px] border-l border-gray-200">
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
                        <Button className="w-full">Join Us</Button>
                    </div>
                </SheetContent>
            </Sheet>
        </header>
    );
};
