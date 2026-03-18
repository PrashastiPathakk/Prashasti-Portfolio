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
        <section id="skills" className="py-32 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col gap-4 mb-24">
                    <motion.h2 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-xs font-black uppercase tracking-[0.5em] text-primary"
                    >
                        Skills
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-black tracking-tighter text-foreground/90 italic"
                    >
                        Advanced <span className="text-primary">Engineering</span> Arsenal.
                    </motion.p>
                </div>

                <div className="space-y-40">
                    {/* Section 1: Main Skills Chart (Core Proficiencies) */}
                    <div className="max-w-4xl space-y-20">
                        <div className="grid gap-14">
                            {[
                                { name: 'JavaScript', level: 'EXPERT', percentage: 90 },
                                { name: 'Node.js', level: 'EXPERT', percentage: 85 },
                                { name: 'Express.js', level: 'PROFICIENT', percentage: 85 },
                                { name: 'MongoDB', level: 'PROFICIENT', percentage: 80 },
                                { name: 'PostgreSQL', level: 'PROFICIENT', percentage: 80 },
                                { name: 'REST API Design', level: 'PROFICIENT', percentage: 88 },
                            ].map((skill, index) => (
                                <motion.div 
                                    key={skill.name}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="group"
                                >
                                    <div className="flex justify-between items-end mb-4">
                                        <div className="flex items-baseline gap-4">
                                            <span className="text-4xl md:text-6xl font-black italic tracking-tighter uppercase text-foreground/90 group-hover:text-primary transition-colors duration-500 leading-none">
                                                {skill.name}
                                            </span>
                                            <span className="text-[10px] font-black text-primary/30 group-hover:text-primary/60 transition-colors">
                                                {skill.percentage}%
                                            </span>
                                        </div>
                                        <span className="text-[10px] font-black text-foreground/40 uppercase tracking-[0.2em] mb-3">
                                            {skill.level}
                                        </span>
                                    </div>
                                    <div className="h-[2px] w-full bg-foreground/5 relative overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${skill.percentage}%` }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                                            className="absolute inset-0 bg-primary group-hover:bg-accent transition-colors duration-500 shadow-[0_0_15px_rgba(var(--primary-rgb),0.5)]"
                                        />
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Section 2: Technical Excellence (Domain Expertise) */}
                    <div className="space-y-24">
                        <div className="space-y-4">
                            <motion.h3 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-3xl md:text-5xl font-black tracking-tighter italic"
                            >
                                Technical <span className="gradient-text">Excellence.</span>
                            </motion.h3>
                            <p className="text-foreground/40 text-xs font-bold uppercase tracking-[0.3em]">
                                High Performance Infrastructure & Frontend Mastery
                            </p>
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
                                        className="group relative"
                                    >
                                        <div className="relative glass dark:glass-dark rounded-3xl border border-white/5 p-8 h-full flex flex-col gap-6 hover:border-primary/20 transition-all duration-500">
                                            <div className="flex items-center gap-4">
                                                <div className={`w-10 h-10 rounded-xl ${category.accent === 'primary' ? 'bg-primary/10 text-primary' : 'bg-accent/10 text-accent'} flex items-center justify-center ring-1 ring-white/5`}>
                                                    {category.icon}
                                                </div>
                                                <h3 className="text-sm font-black tracking-widest text-foreground/90 uppercase">{category.title}</h3>
                                            </div>

                                            <div className="flex flex-wrap gap-2 mt-auto">
                                                {category.skills.map((skill) => (
                                                    <span 
                                                        key={skill}
                                                        className="px-3 py-1.5 bg-foreground/5 text-foreground/50 text-[10px] font-bold uppercase tracking-widest rounded-lg border border-white/5 group-hover:text-foreground/80 transition-all"
                                                    >
                                                        {skill}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Right Column: Profile Sidebar */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="lg:sticky lg:top-32 space-y-8"
                            >
                                <div className="relative glass dark:glass-dark rounded-[3rem] border border-white/10 p-10 shadow-2xl overflow-hidden group">
                                    <div className="absolute inset-0 opacity-5 pointer-events-none" 
                                         style={{ backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)', backgroundSize: '16px 16px' }} />

                                    <div className="space-y-10 relative z-10">
                                        <div className="space-y-6">
                                            <div className="space-y-1">
                                                <span className="text-[10px] font-black text-primary uppercase tracking-[0.4em]">Engineered_By</span>
                                                <h4 className="text-xl font-black text-foreground italic tracking-tighter">PRASHASTI PATHAK</h4>
                                            </div>
                                            
                                            <div className="space-y-4">
                                                <div className="flex flex-col">
                                                    <span className="text-[9px] font-bold text-foreground/30 uppercase tracking-widest">Current Position</span>
                                                    <span className="text-sm font-bold text-foreground/80 lowercase">backend engineer & sde intern</span>
                                                </div>
                                                <div className="flex flex-col">
                                                    <span className="text-[9px] font-bold text-foreground/30 uppercase tracking-widest">Industry Focus</span>
                                                    <span className="text-sm font-bold text-foreground/80 tracking-tight">Scalable Systems & Distributed APIs</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="pt-8 border-t border-white/5 leading-tight">
                                            <p className="text-xl font-black italic text-foreground/20 group-hover:text-foreground/80 transition-colors duration-700">
                                                &quot;solutions that remain stable under real-world load.&quot;
                                            </p>
                                        </div>

                                        {/* Redesigned Project Counter: Holographic Shields */}
                                        <div className="flex items-center gap-6 pt-4">
                                            <div className="relative flex items-center justify-center">
                                                {[0, 1, 2].map((i) => (
                                                    <motion.div
                                                        key={i}
                                                        animate={{ rotate: 360, scale: [1, 1.05, 1] }}
                                                        transition={{ duration: 10 + i * 2, repeat: Infinity, ease: 'linear' }}
                                                        className="absolute inset-0 border border-primary/20 rounded-xl"
                                                        style={{ transform: `rotate(${i * 45}deg)` }}
                                                    />
                                                ))}
                                                <div className="w-12 h-12 bg-primary/20 rounded-xl backdrop-blur-md flex items-center justify-center relative z-10 border border-primary/50 text-primary font-black text-xl">
                                                    3+
                                                </div>
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-foreground/90 leading-none">Live Projects</span>
                                                <span className="text-[9px] font-bold text-foreground/30 uppercase mt-1">Production Grade</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Bottom Tech Stack Pill */}
                                <div className="p-8 glass dark:glass-dark rounded-[2rem] border border-white/5 relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-20 transition-opacity">
                                        <Cpu size={40} />
                                    </div>
                                    <span className="text-[9px] font-black text-primary uppercase tracking-[0.4em] mb-6 block">Foundation_Tags</span>
                                    <div className="flex flex-wrap gap-2">
                                        {workingKnowledge.map((tag) => (
                                            <span key={tag} className="text-[9px] font-bold text-foreground/40 uppercase tracking-widest px-3 py-1.5 bg-foreground/5 rounded-lg border border-white/5 hover:border-accent/40 hover:text-foreground transition-all">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
