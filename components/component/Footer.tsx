import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

export const Footer = () => {
    return (
        <footer className="bg-[#2d2e32] py-8 px-4 md:px-8">
            <div className="max-w-5xl mx-auto flex flex-col items-center justify-center space-y-4">
                <div className="flex gap-4">
                    <a href="#" aria-label="Twitter">
                        <FaTwitter className="w-6 h-6 text-muted-foreground hover:text-primary" />
                    </a>
                    <a href="#" aria-label="GitHub">
                        <FaGithub className="w-6 h-6 text-muted-foreground hover:text-primary" />
                    </a>
                    <a href="#" aria-label="LinkedIn">
                        <FaLinkedin className="w-6 h-6 text-muted-foreground hover:text-primary" />
                    </a>
                </div>
                <p className="text-muted-foreground text-sm text-center">
                    &copy; 2024 WeCode. All rights reserved.
                </p>
            </div>
        </footer>
    );
};
