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
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { SiCodechef, SiLeetcode, SiCodeforces } from "react-icons/si";
import { IoMail } from "react-icons/io5";


const members = {
    "Competitive Programming": [
        {
            name: "Naman Kandpal",
            role: "Member",
            image: naman,
            achievements: "Published articles on competitive programming",
            instagram: '',
            github: 'https://github.com/Naman-Kandpal',
            linkedin: 'https://www.linkedin.com/in/naman-kandpal/',
            codeforces: '',
            codechef: '',
            leetcode: '',
            mail: '',
        },
        {
            name: "Umesh Bisht",
            role: "Member",
            image: user,
            achievements: "Contributor to open-source projects",
            instagram: '',
            github: 'https://github.com/Naman-Kandpal',
            linkedin: 'https://www.linkedin.com/in/naman-kandpal/',
            codeforces: '',
            codechef: '',
            leetcode: '',
            mail: '',
        },
        {
            name: "Sourav Singh Adhikari",
            role: "Member",
            image: user,
            achievements: "Top coder in national contest",
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
            achievements: "Expert in algorithms",
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
            achievements: "Lecturer on data structures",
            instagram: '',
            github: 'https://github.com/mohitxd-fr',
            linkedin: 'https://www.linkedin.com/in/mohit-fr',
            codeforces: '',
            codechef: '',
            leetcode: '',
            mail: '',
        },
        {
            name: "Vibha Chandola",
            role: "Vice President",
            image: vibha,
            achievements: "Winner of regional hackathon",
            instagram: 'https://www.instagram.com/vibha_chandola_/',
            github: 'https://github.com/vibha-cloud',
            linkedin: 'https://www.linkedin.com/in/vibha-chandola/',
            codeforces: '',
            codechef: '',
            leetcode: '',
            mail: '',
        }
    ],
    "Web Development": [
        {
            name: "Jeevan Joshi",
            role: "Member",
            image: jeevan,
            achievements: "Developer of popular web apps",
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
            achievements: "Full stack developer and mentor",
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
            achievements: "UI/UX designer with multiple awards",
            instagram: 'https://www.instagram.com/priyanshukumar_04/',
            github: 'https://github.com/BlackShort',
            linkedin: 'https://www.linkedin.com/in/priyanshu-kumar7374/',
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
            achievements: "Certified ethical hacker",
            instagram: 'https://www.instagram.com/mr_prince_.70',
            github: 'https://github.com/ankitpandey2004',
            linkedin: 'https://www.linkedin.com/in/ankit-pandey-b1697928a',
            codeforces: '',
            codechef: '',
            leetcode: '',
            mail: '',
        },
        {
            name: "Piyush Taragi",
            role: "Member",
            image: user,
            achievements: "Specialist in network security",
            instagram: '',
            github: '',
            linkedin: '',
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
            achievements: "Data scientist with multiple publications",
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
            achievements: "AI engineer with several patents",
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
            achievements: "Researcher in machine learning",
            instagram: 'https://www.instagram.com/sarthaxtic',
            github: 'https://github.com/sarthaxtic',
            linkedin: 'https://linkedin.com/in/sarthakchandvaria',
            codeforces: '',
            codechef: '',
            leetcode: '',
            mail: '',
        },
    ],
    "Visual Media": [
        {
            name: "Manas Verma",
            role: "Member",
            image: manas,
            achievements: "Award-winning graphic designer",
            instagram: 'https://www.instagram.com/manas_v.03',
            github: '',
            linkedin: 'http://linkedin.com/in/manas-verma-6174ab289',
            codeforces: '',
            codechef: '',
            leetcode: '',
            mail: '',
        },
        {
            name: "Shailesh Verma",
            role: "Member",
            image: shailesh,
            achievements: "Expert in video production",
            instagram: 'https://www.instagram.com/shaileshjukaria',
            github: 'https://github.com/shaileshjukaria',
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
                        Get to know the dedicated individuals who drive our community forward. Our members are at the heart of every event and initiative, bringing their unique skills and passion to create something extraordinary.
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
                                        <p className="text-gray-500 text-[12px] mt-2">{member.achievements}</p>
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