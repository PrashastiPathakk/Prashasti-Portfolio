'use client';

import { motion } from 'framer-motion';
import { Cpu, Code, Server, Database, Cloud, Layers, Settings } from 'lucide-react';

const skillCategories = [
    {
        title: 'Languages',
        icon: <Code size={18} />,
        skills: ['C++', 'JavaScript', 'TypeScript', 'Python', 'SQL'],
        accent: 'primary'
    },
    {
        title: 'Backend Engineering',
        icon: <Server size={18} />,
        skills: ['Node.js', 'Express.js', 'REST APIs', 'WebSockets', 'JWT/Auth'],
        accent: 'accent'
    },
    {
        title: 'Databases & Caching',
        icon: <Database size={18} />,
        skills: ['PostgreSQL', 'MongoDB', 'Redis', 'Prisma ORM'],
        accent: 'primary'
    },
    {
        title: 'DevOps & Cloud',
        icon: <Cloud size={18} />,
        skills: ['Docker', 'AWS Basics', 'Vercel', 'CI/CD Pipelines'],
        accent: 'accent'
    },
    {
        title: 'Architecture & Quality',
        icon: <Layers size={18} />,
        skills: ['Microservices', 'System Design', 'Unit Testing', 'Scalability'],
        accent: 'primary'
    },
    {
        title: 'Tools & Ecosystem',
        icon: <Settings size={18} />,
        skills: ['Git/GitHub', 'Postman', 'Linux/Bash', 'Agile/Scrum'],
        accent: 'accent'
    }
];

const workingKnowledge = [
    'HTML', 'CSS', 'OOPs', 'DBMS', 'OS', 'Networking'
];

export default function Skills() {
    return (
        <section id="skills" className="py-24 px-4 bg-foreground/5 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
                    <div className="text-left">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4 uppercase">
                            Skills
                        </h2>
                        <p className="text-foreground/60 text-lg max-w-2xl leading-relaxed">
                            A breakdown of my technical proficiencies and core engineering expertise.
                        </p>
                    </div>
                </div>

                <div className="space-y-20">
                    {/* Header: Technical Excellence */}
                    <div className="text-center space-y-4 max-w-3xl mx-auto">
                        <motion.h2 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-6xl font-black tracking-tighter italic"
                        >
                            Technical <span className="gradient-text">Excellence.</span>
                        </motion.h2>
                        <motion.p 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-foreground/60 text-lg md:text-xl font-medium"
                        >
                            A modern stack designed for performance, security, and scalability.
                        </motion.p>
                    </div>

                    <div className="grid lg:grid-cols-[1fr_380px] gap-12 items-start">
                        {/* Left Column: Categorized Grid */}
                        <div className="grid md:grid-cols-2 gap-6">
                            {skillCategories.map((category, index) => (
                                <motion.div
                                    key={category.title}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.05 }}
                                    whileHover={{ y: -5 }}
                                    className="group relative"
                                >
                                    {/* Border Glow */}
                                    <div className={`absolute -inset-[1px] bg-linear-to-br ${category.accent === 'primary' ? 'from-primary/20 to-transparent' : 'from-accent/20 to-transparent'} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                                    
                                    <div className="relative glass dark:glass-dark rounded-3xl border border-white/5 p-8 h-full flex flex-col gap-6 shadow-xl">
                                        <div className="flex items-center gap-4">
                                            <div className={`w-10 h-10 rounded-xl ${category.accent === 'primary' ? 'bg-primary/10 text-primary' : 'bg-accent/10 text-accent'} flex items-center justify-center ring-1 ring-white/5`}>
                                                {category.icon}
                                            </div>
                                            <h3 className="text-lg font-black tracking-tight text-foreground/90 uppercase">{category.title}</h3>
                                        </div>

                                        <div className="flex flex-wrap gap-2 mt-auto">
                                            {category.skills.map((skill) => (
                                                <span 
                                                    key={skill}
                                                    className="px-3 py-1.5 bg-foreground/5 text-foreground/50 text-[10px] font-black uppercase tracking-widest rounded-lg border border-white/5 group-hover:border-primary/20 group-hover:text-foreground/80 transition-all"
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Right Column: Profile Card (Repurposed as a sidebar) */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="lg:sticky lg:top-32"
                        >
                            <div className="relative glass dark:glass-dark rounded-[2.5rem] border border-white/10 p-10 shadow-2xl overflow-hidden group">
                                {/* Abstract Background Grid */}
                                <div className="absolute inset-0 opacity-5 pointer-events-none" 
                                     style={{ backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

                                <div className="space-y-10 relative z-10">
                                    <div className="space-y-6">
                                        <div className="space-y-1">
                                            <span className="text-[10px] font-black text-primary uppercase tracking-[0.4em]">Engineered_By</span>
                                            <h4 className="text-xl font-black text-foreground italic tracking-tighter">PRASHASTI PATHAK</h4>
                                        </div>
                                        
                                        <div className="space-y-3">
                                            <div className="flex flex-col">
                                                <span className="text-[9px] font-bold text-foreground/30 uppercase tracking-widest">Profile</span>
                                                <span className="text-sm font-bold text-foreground/80">Backend Engineer & SDE Intern</span>
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="text-[9px] font-bold text-foreground/30 uppercase tracking-widest">Focus</span>
                                                <span className="text-sm font-bold text-foreground/80">Active SDE @ JBH Tech</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="pt-8 border-t border-white/5 space-y-4">
                                        <p className="text-base font-black italic text-foreground/50 leading-relaxed tracking-tight group-hover:text-foreground/80 transition-colors">
                                            &quot;Building systems that hold up under pressure and stay fast at scale.&quot;
                                        </p>
                                    </div>

                                    <div className="flex items-center gap-4 pt-4">
                                        <div className="flex -space-x-3">
                                            {[1, 2, 3, 4].map((i) => (
                                                <div key={i} className="w-8 h-8 rounded-full border border-primary/40 bg-background/80 backdrop-blur-md flex items-center justify-center text-[8px] font-black ring-2 ring-background">
                                                </div>
                                            ))}
                                        </div>
                                        <span className="text-[9px] font-black uppercase tracking-widest text-foreground/40 leading-none">
                                            3+ Live Projects
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Additional Tag Container */}
                            <div className="mt-8 p-6 glass dark:glass-dark rounded-3xl border border-white/5">
                                <span className="text-[9px] font-black text-foreground/20 uppercase tracking-[0.4em] mb-4 block">Foundations_Tags</span>
                                <div className="flex flex-wrap gap-2">
                                    {workingKnowledge.map((tag) => (
                                        <span key={tag} className="text-[10px] font-bold text-foreground/40 uppercase tracking-wider px-3 py-1 bg-foreground/5 rounded-md border border-white/5">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
