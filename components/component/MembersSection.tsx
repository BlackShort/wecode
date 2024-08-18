import Image from "next/image";
import user from '@/assets/user.jpeg';
import priyanshu from '@/assets/priyanshu.png';
import vibha from '@/assets/vibha.png';
import naman from '@/assets/naman.jpg';
import divya from '@/assets/divya.jpg';
import harshit from '@/assets/harshit.jpg';
import jeevan from '@/assets/jeevan.jpg';
import sarthak from '@/assets/sarthak.jpg';
import jatin from '@/assets/jatin.jpg';
import atul from '@/assets/atul.jpg';
import shailesh from '@/assets/shailesh.jpg';
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";


const members = {
    "Competitive Programming": [
        {
            name: "Naman Kandpal",
            role: "Member",
            image: naman,
            achievements: "Published articles on competitive programming",
            instagram: '',
            github: '',
            linkedin: '',
        },
        {
            name: "Umesh Bisht",
            role: "Member",
            image: user,
            achievements: "Contributor to open-source projects",
            instagram: '',
            github: 'https://github.com/Naman-Kandpal',
            linkedin: 'https://www.linkedin.com/in/naman-kandpal/',
        },
        {
            name: "Sourav Singh Adhikari",
            role: "Member",
            image: user,
            achievements: "Top coder in national contest",
            instagram: '',
            github: '',
            linkedin: '',
        },
    ],
    "Data Structure": [
        {
            name: "Divya Shah",
            role: "Member",
            image: divya,
            achievements: "Expert in algorithms",
            instagram: '',
            github: '',
            linkedin: '',
        },
        {
            name: "Mohit Budhlakoti",
            role: "Member",
            image: user,
            achievements: "Lecturer on data structures",
            instagram: '',
            github: '',
            linkedin: '',
        },
        {
            name: "Vibha Chandola",
            role: "Vice President",
            image: vibha,
            achievements: "Winner of regional hackathon",
            instagram: 'https://www.instagram.com/vibha_chandola_/',
            github: 'https://github.com/vibha-cloud',
            linkedin: 'https://www.linkedin.com/in/vibha-chandola/',
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
        },
        {
            name: "Harshit Bisht",
            role: "Member",
            image: harshit,
            achievements: "Full stack developer and mentor",
            instagram: 'https://www.instagram.com/harshitbisht_18/',
            github: 'https://github.com/harshitbisht18',
            linkedin: 'http://www.linkedin.com/in/harshit-bisht-7x18',
        },
        {
            name: "Priyanshu Kumar",
            role: "President",
            image: priyanshu,
            achievements: "UI/UX designer with multiple awards",
            instagram: 'https://www.instagram.com/priyanshukumar_04/',
            github: 'https://github.com/BlackShort',
            linkedin: 'https://www.linkedin.com/in/priyanshu-kumar7374/',
        },
    ],
    Cybersecurity: [
        {
            name: "Ankit Pandey",
            role: "Managing Director",
            image: user,
            achievements: "Certified ethical hacker",
            instagram: '',
            github: '',
            linkedin: '',
        },
        {
            name: "Piyush Taragi",
            role: "Member",
            image: user,
            achievements: "Specialist in network security",
            instagram: '',
            github: '',
            linkedin: '',
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
        },
        {
            name: "Jatin Singh Mehra",
            role: "Member",
            image: jatin,
            achievements: "AI engineer with several patents",
            instagram: '',
            github: 'https://github.com/dev-jatin-mehra',
            linkedin: '',
        },
        {
            name: "Sarthak Chandvaria",
            role: "Member",
            image: sarthak,
            achievements: "Researcher in machine learning",
            instagram: 'https://www.instagram.com/sarthaxtic',
            github: 'https://github.com/sarthaxtic',
            linkedin: 'https://linkedin.com/in/sarthakchandvaria',
        },
    ],
    "Visual Media": [
        {
            name: "Manas Verma",
            role: "Member",
            image: user,
            achievements: "Expert in multimedia projects",
            instagram: '',
            github: '',
            linkedin: '',
        },
        {
            name: "Shailesh Jukaria",
            role: "Member",
            image: shailesh,
            achievements: "Award-winning visual designer",
            instagram: 'https://www.instagram.com/shaileshjukaria',
            github: 'https://github.com/shaileshjukaria',
            linkedin: 'https://www.linkedin.com/in/shailesh-jukaria-1500b4265',
        },
    ],
};

export const MembersSection = () => {
    return (
        <section id="members" className="bg-[#2d2e32] py-16 md:py-24 px-4 md:px-8">
            <div className="max-w-6xl mx-auto space-y-8">
                <div className="text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Members</h2>
                    <p className="text-muted-foreground">
                        Meet the talented individuals who make WeCode a thriving community.
                    </p>
                </div>
                {Object.entries(members).map(([group, membersList]) => (
                    <div key={group} className="mb-16">
                        <h3 className="text-xl font-medium mb-4">{group}</h3>
                        <div className="flex overflow-x-auto gap-8">
                            {membersList.map((member) => (
                                <div key={member.name} className="bg-[#1a1b1e] rounded-lg p-4 flex-shrink-0 w-[22em]">
                                    <div className="flex items-center gap-6">
                                        <Image
                                            src={member.image}
                                            width={120}
                                            height={120}
                                            alt={member.name}
                                            className="h-full rounded-md object-cover object-top"
                                            style={{ aspectRatio: "120/140", objectFit: "cover" }}
                                        />
                                        <div className="flex-1">
                                            <h3 className="text-lg font-medium mb-1">{member.name}</h3>
                                            <p className="text-muted-foreground text-sm mb-2">{member.role}</p>
                                            <p className="text-muted-foreground text-xs mb-4">{member.achievements}</p>
                                            <div className="flex gap-4">
                                                {member.instagram?.length != 0 && <a href={member.instagram} target="__blank" aria-label="Instagram">
                                                    <FaInstagram className="w-6 h-6 text-muted-foreground hover:text-pink-500" />
                                                </a>}
                                                {member.github?.length != 0 &&<a href={member.github}  target="__blank" aria-label="GitHub">
                                                    <FaGithub className="w-6 h-6 text-muted-foreground hover:text-slate-100" />
                                                </a>}
                                                {member.linkedin?.length != 0 &&<a href={member.linkedin} target="__blank" aria-label="LinkedIn">
                                                    <FaLinkedin className="w-6 h-6 text-muted-foreground hover:text-blue-500" />
                                                </a>}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
