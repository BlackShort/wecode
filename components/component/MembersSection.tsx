import Image from "next/image";
import user from '@/assets/user.jpeg';
import priyanshu from '@/assets/priyanshu.png';
import vibha from '@/assets/vibha.png';
import mohit from '@/assets/mohit.png';
import naman from '@/assets/naman.jpg';
import divya from '@/assets/divya.jpg';
import harshit from '@/assets/harshit.jpg';
import jeevan from '@/assets/jeevan.jpg';
import sarthak from '@/assets/sarthak.jpg';
import jatin from '@/assets/jatin.jpg';
import ankit from '@/assets/ankit.png';
import atul from '@/assets/atul.jpg';
import shailesh from '@/assets/shailesh.jpg';
import manas from '@/assets/manas.jpg';
import piyush from '@/assets/piyush.jpg';
import umesh from '@/assets/umesh.jpg';
import sourav from '@/assets/sourav.jpg';
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { SiCodechef, SiLeetcode, SiCodeforces } from "react-icons/si";
import { IoMail } from "react-icons/io5";


const members = {
    "Competitive Programming": [
        {
            name: "Naman Kandpal",
            role: "Member",
            image: naman,
            tagline: 'Coding your way to competitive excellence',
            instagram: '',
            github: '',
            linkedin: 'https://www.linkedin.com/in/naman-kandpal/',
            codeforces: 'http://codeforces.com/profile/smeshitnam',
            codechef: '',
            leetcode: 'http://codeforces.com/profile/smeshitnam',
            mail: '',
        },
        {
            name: "Umesh Bisht",
            role: "Member",
            image: umesh,
            tagline: 'Try Again!',
            instagram: '',
            github: '',
            linkedin: 'https://www.linkedin.com/in/umesh-bisht-10713624b',
            codeforces: 'https://codeforces.com/profile/Umesh_singh',
            codechef: '',
            leetcode: 'https://leetcode.com/u/coder_Beast/',
            mail: '',
        },
        {
            name: "Sourav Singh Adhikari",
            role: "Member",
            image: sourav,
            tagline: 'Solving challenges with precision and speed',
            instagram: '',
            github: '',
            linkedin: 'https://www.linkedin.com/in/sourav-singh-adhikari-4213231b7/',
            codeforces: 'https://codeforces.com/profile/CallmeSourav',
            codechef: '',
            leetcode: 'https://leetcode.com/u/sourav_singh_adhikari/',
            mail: '',
        },
    ],
    "Data Structure": [
        {
            name: "Divya Shah",
            role: "Member",
            image: divya,
            tagline: 'DSA enthusiast',
            instagram: 'https://www.instagram.com/d.ivya.x',
            github: '',
            linkedin: 'https://www.linkedin.com/in/divya-shah-5b654b29b/',
            codeforces: '',
            codechef: '',
            leetcode: 'https://leetcode.com/u/divyashah09/',
            mail: '',
        },
        {
            name: "Mohit Budhlakoti",
            role: "Member",
            image: mohit,
            tagline: 'Organizing data for efficient algorithms',
            instagram: '',
            github: 'https://github.com/mohitxd-fr',
            linkedin: 'https://www.linkedin.com/in/mohit-fr',
            codeforces: '',
            codechef: '',
            leetcode: 'https://leetcode.com/u/moheat/',
            mail: '',
        },
        {
            name: "Vibha Chandola",
            role: "Vice President",
            image: vibha,
            tagline: 'Master the Core of Efficient Coding',
            instagram: '',
            github: 'https://github.com/vibha-cloud',
            linkedin: 'https://www.linkedin.com/in/vibha-chandola/',
            codeforces: '',
            codechef: '',
            leetcode: 'https://leetcode.com/u/vc_vibha23/',
            mail: '',
        }
    ],
    "Web Development": [
        {
            name: "Jeevan Joshi",
            role: "Member",
            image: jeevan,
            tagline: "Building dynamic websites for the future",
            instagram: 'https://www.instagram.com/jeevanjoshii',
            github: 'https://github.com/JeevanJoshi4434',
            linkedin: 'https://www.linkedin.com/in/-jeevanjoshi/',
            codeforces: '',
            codechef: '',
            leetcode: '',
            mail: '',
        },
        {
            name: "Harshit Bisht",
            role: "Member",
            image: harshit,
            tagline: "Crafting seamless online experiences",
            instagram: 'https://www.instagram.com/harshitbisht_18/',
            github: 'https://github.com/harshitbisht18',
            linkedin: 'http://www.linkedin.com/in/harshit-bisht-7x18',
            codeforces: '',
            codechef: '',
            leetcode: '',
            mail: '',
        },
        {
            name: "Priyanshu Kumar",
            role: "President",
            image: priyanshu,
            tagline: 'Transforming ideas into interactive web designs',
            instagram: 'https://www.instagram.com/priyanshukumar_04/',
            github: 'https://github.com/BlackShort',
            linkedin: 'https://www.linkedin.com/in/priyanshu-kumar7374/',
            codeforces: '',
            codechef: '',
            leetcode: '',
            mail: '',
        },
    ],
    "AI and ML": [
        {
            name: "Atul Joshi",
            role: "Member",
            image: atul,
            tagline: "Empowering innovations with AI & ML Excellence",
            github: 'https://github.com/AtulJoshi1206',
            linkedin: 'https://www.linkedin.com/in/atul-joshi-54928018a',
            codeforces: '',
            codechef: '',
            leetcode: '',
            mail: '',
        },
        {
            name: "Jatin Singh Mehra",
            role: "Member",
            image: jatin,
            tagline: 'Crafting smarter solutions through AI.',
            instagram: '',
            github: 'https://github.com/dev-jatin-mehra',
            linkedin: '',
            codeforces: '',
            codechef: '',
            leetcode: '',
            mail: 'dev.jatin.singh@gmail.com',
        },
        {
            name: "Sarthak Chandvaria",
            role: "Member",
            image: sarthak,
            tagline: 'Turning data into intelligent decisions',
            instagram: '',
            github: 'https://github.com/sarthaxtic',
            linkedin: 'https://linkedin.com/in/sarthakchandvaria',
            codeforces: '',
            codechef: '',
            leetcode: '',
            mail: '',
        },
    ],
    Cybersecurity: [
        {
            name: "Ankit Pandey",
            role: "Managing Director",
            image: ankit,
            tagline: 'Don’t get hacked. Get protected.',
            instagram: 'https://www.instagram.com/mr_prince_.70',
            github: '',
            linkedin: 'https://www.linkedin.com/in/ankit-pandey-b1697928a',
            codeforces: '',
            codechef: '',
            leetcode: '',
            mail: 'Hackerankit2025@gmail.com',
        },
        {
            name: "Piyush Taragi",
            role: "Member",
            image: piyush,
            tagline: 'Certified Ethical Hacker (EC Council)',
            instagram: 'https://www.instagram.com/mahender_pratap_singh_',
            github: '',
            linkedin: 'https://www.linkedin.com/in/piyush-taragi-41902127a',
            codeforces: '',
            codechef: '',
            leetcode: '',
            mail: 'Piyushtaragi452@gmail.com',
        },
    ],
    "Visual Media": [
        {
            name: "Manas Verma",
            role: "Member",
            image: manas,
            tagline: 'Capturing moments, creating timeless art',
            instagram: 'https://www.instagram.com/manas_v.03',
            github: '',
            linkedin: 'http://linkedin.com/in/manas-verma-6174ab289',
            codeforces: '',
            codechef: '',
            leetcode: '',
            mail: '',
        },
        {
            name: "Shailesh Jukaria",
            role: "Member",
            image: shailesh,
            tagline: 'Framing life through the lens',
            instagram: 'https://www.instagram.com/shaileshjukaria',
            github: '',
            linkedin: 'https://www.linkedin.com/in/shailesh-jukaria-1500b4265',
            codeforces: '',
            codechef: '',
            leetcode: '',
            mail: '',
        },
    ]
};

const colorMapping: { [key: string]: { borderColor: string; bgColor: string } } = {
    "Competitive Programming": {
        borderColor: "border-blue-500",
        bgColor: "bg-blue-100"
    },
    "Data Structure": {
        borderColor: "border-green-500",
        bgColor: "bg-green-100"
    },
    "Web Development": {
        borderColor: "border-red-500",
        bgColor: "bg-red-100"
    },
    "Cybersecurity": {
        borderColor: "border-yellow-500",
        bgColor: "bg-yellow-100"
    },
    "AI and ML": {
        borderColor: "border-purple-500",
        bgColor: "bg-purple-100"
    },
    "Visual Media": {
        borderColor: "border-pink-500",
        bgColor: "bg-pink-100"
    },
};

export const MembersSection = () => {
    return (
        <section id="members" className="py-16 bg-[#e5e5e5] md:py-24 px-4 md:px-8">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Meet Our Members</h2>
                    <p className="text-gray-600">
                        Get to know the dedicated individuals who drive our community forward. Our member are at the heart of every event and initiative, bringing their unique skills and passion to create something extraordinary.
                    </p>
                </div>
                {Object.entries(members).map(([category, membersList]) => {
                    const { borderColor, bgColor } = colorMapping[category] || {
                        borderColor: "border-gray-500",
                        bgColor: "bg-slate-300"
                    };
                    return (
                        <div key={category} className="mb-12">
                            <h4 className={`text-xl md:text-2xl font-semibold mb-6 ${borderColor} border-l-4 px-4 pb-1 w-fit ${bgColor}`}>{category}</h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                                {membersList.map((member, index) => (
                                    <div key={index} className="bg-slate-50 flex flex-col items-center text-center p-6 rounded-[20px] shadow-lg">
                                        <div className="rounded-full w-[120px] h-[120px] border-[3px] border-slate-50 mx-auto mb-4 overflow-hidden">
                                            <Image
                                                src={member.image}
                                                alt={member.name}
                                                className="object-cover object-top"
                                                priority
                                            />
                                        </div>
                                        <h5 className="text-lg font-semibold mb-2">{member.name}</h5>
                                        <p className="text-gray-500 font-semibold text-[12px]">{member.role}</p>
                                        {member.tagline && <p className="text-gray-500 text-[12px] mt-2">{member.tagline}</p>}
                                        <div className="flex space-x-4 mt-4">
                                            {member.mail && (
                                                <a href={`mailto:${member.mail}`} target="__blank" aria-label="Email">
                                                    <IoMail className="w-6 h-6 text-muted-foreground hover:text-red-500" />
                                                </a>
                                            )}
                                            {member.instagram && (
                                                <a href={member.instagram} target="__blank" aria-label="Instagram">
                                                    <FaInstagram className="w-6 h-6 text-muted-foreground hover:text-pink-500" />
                                                </a>
                                            )}
                                            {member.github && (
                                                <a href={member.github} target="__blank" aria-label="GitHub">
                                                    <FaGithub className="w-6 h-6 text-muted-foreground hover:text-blue-900" />
                                                </a>
                                            )}
                                            {member.linkedin && (
                                                <a href={member.linkedin} target="__blank" aria-label="LinkedIn">
                                                    <FaLinkedin className="w-6 h-6 text-muted-foreground hover:text-blue-500" />
                                                </a>
                                            )}
                                            {member.codeforces && (
                                                <a href={member.codeforces} target="__blank" aria-label="Codeforces">
                                                    <SiCodeforces className="w-6 h-6 text-muted-foreground hover:text-yellow-500" />
                                                </a>
                                            )}
                                            {member.codechef && (
                                                <a href={member.codechef} target="__blank" aria-label="CodeChef">
                                                    <SiCodechef className="w-6 h-6 text-muted-foreground hover:text-orange-900" />
                                                </a>
                                            )}
                                            {member.leetcode && (
                                                <a href={member.leetcode} target="__blank" aria-label="LeetCode">
                                                    <SiLeetcode className="w-6 h-6 text-muted-foreground hover:text-orange-500" />
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};