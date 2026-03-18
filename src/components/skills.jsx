'use client';

import { motion } from 'framer-motion';
import { Cpu, Code, Server, Database, Cloud, Layers, Settings, Shield, Terminal, Activity } from 'lucide-react';

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
                <div className="space-y-32">
                    {/* Header: Core Stack (Image 670 Match) */}
                    <div className="space-y-12">
                        <div className="flex items-center gap-3">
                            <span className="text-[11px] font-black text-primary uppercase tracking-[0.4em]">CORE STACK.</span>
                        </div>
                        
                        <div className="grid lg:grid-cols-[1fr_480px] gap-20 items-start">
                            {/* Left: Skill Bars (Mastery Board) */}
                            <div className="space-y-12">
                                {[
                                    { name: 'JAVASCRIPT', level: 'EXPERT', percentage: 80 },
                                    { name: 'NODE.JS', level: 'EXPERT', percentage: 85 },
                                    { name: 'EXPRESS.JS', level: 'PROFICIENT', percentage: 85 },
                                    { name: 'MONGODB', level: 'PROFICIENT', percentage: 80 },
                                    { name: 'POSTGRESQL', level: 'PROFICIENT', percentage: 80 },
                                    { name: 'REST API DESIGN', level: 'PROFICIENT', percentage: 85 },
                                ].map((skill, index) => (
                                    <motion.div 
                                        key={skill.name}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.05 }}
                                        className="group"
                                    >
                                        <div className="flex items-end justify-between mb-2">
                                            <div className="flex items-baseline gap-3">
                                                <span className="text-4xl font-black italic tracking-tighter uppercase text-white leading-none">
                                                    {skill.name}
                                                </span>
                                                <span className="text-[10px] font-black text-primary/60">
                                                    {skill.percentage}%
                                                </span>
                                            </div>
                                            <span className="text-[11px] font-black text-white uppercase tracking-[0.1em]">
                                                {skill.level}
                                            </span>
                                        </div>
                                        
                                        <div className="h-[2px] w-full bg-white/5 relative">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.percentage}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                                                className="absolute inset-y-0 left-0 bg-primary"
                                            />
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Right: Profile Summary Card (Image 670 / 469 Match) */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="bg-[#1A1D24] rounded-[3rem] p-16 h-full shadow-4xl relative overflow-hidden group border border-white/5"
                            >
                                {/* Background Chip Icon */}
                                <div className="absolute top-12 right-12 opacity-[0.03] group-hover:opacity-[0.1] transition-opacity duration-1000 rotate-12">
                                    <Cpu size={140} strokeWidth={1} />
                                </div>

                                <div className="space-y-12 relative z-10">
                                    <div className="space-y-10">
                                        {[
                                            { label: 'PROFILE:', value: 'Backend Engineer & SDE Intern' },
                                            { label: 'DOMAIN:', value: 'Scalable Systems, REST APIs, Distributed Logic' },
                                            { label: 'EDUCATION:', value: 'Final Year — Bachelor of Computer Science' },
                                            { label: 'LOCATION:', value: 'Active SDE Intern @ JBH Tech Innovation' },
                                        ].map((item) => (
                                            <div key={item.label} className="grid grid-cols-[120px_1fr] items-start gap-6">
                                                <span className="text-[10px] font-black text-primary uppercase tracking-widest pt-1">{item.label}</span>
                                                <span className="text-base font-bold text-white leading-tight uppercase tracking-tight">{item.value}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="h-[1px] w-full bg-white/5" />

                                    <div className="grid grid-cols-[120px_1fr] items-start gap-6">
                                        <span className="text-[10px] font-black text-primary/60 uppercase tracking-widest pt-1">TECH FOCUS:</span>
                                        <p className="text-base font-medium text-white/90 leading-relaxed italic">
                                            &quot;Building systems that hold up under pressure and stay fast at scale.&quot;
                                        </p>
                                    </div>

                                    {/* Overlapping Circles (Rings) - Reverted from Blocks per Image 670 */}
                                    <div className="flex items-center gap-8 pt-8">
                                        <div className="flex -space-x-4">
                                            {[0, 1, 2, 3].map((i) => (
                                                <div key={i} className="w-12 h-12 rounded-full border-2 border-[#1A1D24] bg-primary/20 backdrop-blur-md shadow-xl" />
                                            ))}
                                        </div>
                                        <span className="text-[11px] font-black uppercase tracking-[0.2em] text-white">
                                            4+ Live Production Projects
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* Section 2: Backend Engineering Principles (Image 697 Match) */}
                    <div className="pt-40 space-y-24 text-center">
                        <div className="space-y-6 max-w-4xl mx-auto">
                            <h3 className="text-5xl md:text-7xl font-black text-white leading-none tracking-tighter uppercase italic">
                                BACKEND <span className="text-primary">FOUNDATIONS.</span>
                            </h3>
                            <p className="text-lg text-foreground/60 leading-relaxed font-medium uppercase tracking-widest text-[11px]">
                                I focus on building maintainable backend systems using proven engineering patterns and scalable API design.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {[
                                { title: 'REST API DESIGN', icon: <Code size={24} /> },
                                { title: 'MVC ARCHITECTURE', icon: <Layers size={24} /> },
                                { title: 'JWT AUTHENTICATION', icon: <Settings size={24} /> },
                                { title: 'SECURE API DESIGN', icon: <Shield size={22} /> },
                                { title: 'DATABASE SCHEMA DESIGN', icon: <Database size={22} /> },
                                { title: 'ERROR HANDLING & LOGGING', icon: <Terminal size={22} /> },
                                { title: 'API RATE LIMITING', icon: <Activity size={22} /> },
                                { title: 'CLEAN BACKEND ARCHITECTURE', icon: <Layers size={22} /> },
                            ].map((principle, index) => (
                                <motion.div
                                    key={principle.title}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.05 }}
                                    className="bg-[#1A1D24] border border-white/5 rounded-3xl p-10 flex flex-col items-center justify-center gap-6 hover:border-primary/40 transition-all group aspect-square md:aspect-auto md:h-52"
                                >
                                    <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-primary group-hover:bg-primary/10 transition-colors">
                                        {principle.icon}
                                    </div>
                                    <span className="text-[11px] font-black text-white/90 uppercase tracking-[0.2em] text-center leading-tight">
                                        {principle.title}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Section 3: Technical Excellence (Image 698 Match) */}
                    <div className="pt-40 space-y-24 text-center">
                        <div className="space-y-6 max-w-4xl mx-auto">
                            <h3 className="text-5xl md:text-7xl font-black text-white leading-none tracking-tighter uppercase italic">
                                TECHNICAL <span className="text-primary">SCOPE.</span>
                            </h3>
                            <p className="text-lg text-foreground/60 leading-relaxed font-medium uppercase tracking-widest text-[11px]">
                                A modern stack designed for performance, security, and scalability.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {skillCategories.map((category, index) => (
                                <motion.div
                                    key={category.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-[#1A1D24] border border-white/5 rounded-[2.5rem] p-10 text-left space-y-10 hover:border-primary/20 transition-all group"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-all">
                                            {category.icon}
                                        </div>
                                        <h4 className="text-xl font-black text-white uppercase tracking-tight italic">
                                            {category.title}
                                        </h4>
                                    </div>

                                    <div className="flex flex-wrap gap-2">
                                        {category.skills.map((skill) => (
                                            <span 
                                                key={skill}
                                                className="px-4 py-2 bg-black/20 border border-white/10 rounded-full text-xs font-bold text-white/70 hover:text-white hover:border-primary/40 transition-all"
                                            >
                                                {skill}
                                            </span>
                                        ))}
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
