import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

export const Footer = () => {
    return (
        <footer className="bg-gray-100 py-8 px-4 md:px-8 border-t border-gray-200">
            <div className="max-w-5xl mx-auto flex flex-col items-center justify-center space-y-4">
                <div className="flex gap-4">
                    <a href="#" aria-label="Twitter">
                        <FaTwitter className="w-6 h-6 text-gray-600 hover:text-blue-500 transition-colors" />
                    </a>
                    <a href="#" aria-label="GitHub">
                        <FaGithub className="w-6 h-6 text-gray-600 hover:text-black transition-colors" />
                    </a>
                    <a href="#" aria-label="LinkedIn">
                        <FaLinkedin className="w-6 h-6 text-gray-600 hover:text-blue-700 transition-colors" />
                    </a>
                </div>
                <p className="text-gray-600 text-sm text-center">
                    Copyright &copy; 2024 WeCode | All rights reserved.
                </p>
            </div>
        </footer>
    );
};
