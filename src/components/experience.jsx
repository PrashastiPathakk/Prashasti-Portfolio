'use client';

import { motion } from 'framer-motion';
import { Calendar, Award, MapPin, Users } from 'lucide-react';

const experience = [
    {
        role: "Software Development Engineer Intern",
        company: "JBH Tech Innovation",
        period: "2026 January – Present",
        description: "Focusing on building and delivering production-ready backend systems designed for high-performance and scalability.",
        achievements: [
            "Developing high-performance backend systems with focus on scalability and reliability",
            "Designing RESTful APIs and backend services using Node.js and Express.js",
            "Managing structured data and queries efficiently with PostgreSQL",
            "Leveraging Redis for caching and performance optimization",
            "Using RabbitMQ to handle asynchronous workflows and decouple services",
            "Implementing secure, scalable authentication and authorization systems",
            "Writing clean, maintainable code following industry-standard architecture practices",
        ],
    },
];

const achievements = [
    {
        title: "HackerRank Problem Solving Certification",
        issuer: "HackerRank",
        tag: "[ Certified ]",
        detail: "Verified proficiency in data structures, algorithms, and logical reasoning through standardized assessments.",
    },
    {
        title: "Active DSA Practitioner",
        issuer: "LeetCode / GeeksforGeeks",
        tag: "[ Ongoing ]",
        detail: "Consistent practice across LeetCode, GeeksforGeeks, and HackerRank — building problem-solving depth across arrays, trees, graphs, and dynamic programming.",
    },
];

export default function Experience() {
    return (
        <section id="experience" className="py-24 px-4 bg-[#050505]">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-3 gap-16">
                    <div className="lg:col-span-2">
                        <div className="mb-12">
                            <h2 className="text-3xl md:text-5xl font-bold mb-4 uppercase">
                                Experience
                            </h2>
                            <p className="text-foreground/40 text-sm max-w-md uppercase font-bold text-primary tracking-widest leading-loose">
                                Professional Background
                            </p>
                        </div>

                        <div className="space-y-16">
                            {experience.map((item, index) => (
                                <motion.div
                                    key={item.role}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    className="relative pl-8 border-l-2 border-primary/20"
                                >
                                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-background" />

                                    <div className="mb-6">
                                        <h3 className="text-2xl font-bold uppercase tracking-tight">{item.role}</h3>
                                        <div className="flex flex-wrap gap-4 mt-2 text-primary font-bold uppercase text-xs tracking-widest">
                                            <span className="flex items-center gap-1"><MapPin size={14} /> {item.company}</span>
                                            <span className="flex items-center gap-1"><Calendar size={14} /> {item.period}</span>
                                        </div>
                                    </div>

                                    <p className="text-foreground/60 mb-8 max-w-2xl text-sm leading-relaxed">{item.description}</p>

                                    <ul className="space-y-4">
                                        {item.achievements.map((ach) => (
                                            <li key={ach} className="flex items-start gap-4 text-sm text-foreground/90 font-bold group leading-relaxed">
                                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0 group-hover:scale-150 transition-transform" />
                                                {ach}
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold mb-12 uppercase tracking-widest text-foreground/40">// Achievements.</h2>
                        <div className="space-y-6">
                            {achievements.map((item, index) => (
                                <motion.div
                                    key={item.title}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="p-6 rounded-2xl glass dark:glass-dark border border-white/5 flex flex-col gap-4 group"
                                >
                                    <div className="flex justify-between items-start">
                                        <div className="p-3 rounded-xl bg-foreground/5 text-primary">
                                            <Award size={24} />
                                        </div>
                                        <span className="text-[10px] font-bold text-primary uppercase tracking-tighter">{item.tag}</span>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-sm uppercase mb-1 tracking-tight group-hover:text-primary transition-colors">
                                            {item.title}
                                        </h4>
                                        <p className="text-[10px] uppercase font-bold text-foreground/30 mb-3">{item.issuer}</p>
                                        <p className="text-xs text-foreground/60 leading-relaxed font-sans">{item.detail}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

