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
                <div className="space-y-40">
                    {/* Header: Technical Excellence (Visual Match Image 397) */}
                    <div className="space-y-6">
                        <div className="space-y-0">
                            <motion.h2 
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="text-6xl md:text-9xl font-black italic tracking-tighter leading-[0.85] uppercase text-white"
                            >
                                SKILLS
                            </motion.h2>
                            <motion.h2 
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="text-6xl md:text-9xl font-black italic tracking-tighter leading-[0.85] uppercase gradient-text"
                            >
                                MASTERY.
                            </motion.h2>
                        </div>


                    </div>

                    {/* Mastery Board (The Charts) + Profile Summary (Image 469) */}
                    <div className="grid lg:grid-cols-[1fr_480px] gap-20 items-start">
                        {/* Left: Skill Bars */}
                        <div className="space-y-20">
                            {[
                                { name: 'JAVASCRIPT', level: 'SENIOR_LEVEL', percentage: 98 },
                                { name: 'NODE.JS', level: 'ARCHITECTURE', percentage: 85 },
                                { name: 'EXPRESS.JS', level: 'BACKEND_CORE', percentage: 85 },
                                { name: 'REST APIS', level: 'OPTIMIZATION', percentage: 92 },
                                { name: 'MONGODB', level: 'DATABASE_LEAD', percentage: 80 },
                                { name: 'POSTGRESQL', level: 'RELATIONAL_ARCH', percentage: 80 },
                            ].map((skill, index) => (
                                <motion.div 
                                    key={skill.name}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.05 }}
                                    className="group relative"
                                >
                                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-5">
                                        <div className="flex items-baseline gap-4">
                                            <span className="text-5xl md:text-6xl font-black italic tracking-tighter uppercase text-white group-hover:text-primary transition-all duration-500 leading-none">
                                                {skill.name}
                                            </span>
                                            <span className="text-[10px] md:text-xs font-black text-primary/50 group-hover:text-primary transition-colors">
                                                [{skill.percentage}%]
                                            </span>
                                        </div>

                                        <div className="flex flex-col items-start md:items-end">
                                            <span className="text-[9px] font-black text-foreground/30 uppercase tracking-[0.4em] mb-1">Status</span>
                                            <span className="text-xs font-black text-primary uppercase tracking-[0.15em]">
                                                {skill.level}
                                            </span>
                                        </div>
                                    </div>
                                    
                                    <div className="h-[1.5px] w-full bg-foreground/5 relative">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${skill.percentage}%` }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                                            className="absolute inset-y-0 left-0 bg-primary shadow-[0_0_20px_rgba(var(--primary-rgb),0.4)]"
                                        />
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Right: Profile Summary Card (Image 469 Match Refined) */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-[#1A1D24] rounded-[3rem] border border-white/10 p-14 h-full shadow-4xl relative overflow-hidden group"
                        >
                            {/* Background Chip Icon */}
                            <div className="absolute top-12 right-12 opacity-[0.03] group-hover:opacity-[0.1] transition-opacity duration-1000 rotate-12">
                                <Cpu size={160} strokeWidth={1} />
                            </div>

                            <div className="space-y-12 relative z-10">
                                <div className="space-y-10">
                                    {[
                                        { label: 'PROFILE:', value: 'Backend Engineer & SDE Intern' },
                                        { label: 'DOMAIN:', value: 'Scalable Systems, REST APIs, Distributed Logic' },
                                        { label: 'EDUCATION:', value: 'Final Year — Bachelor of Computer Science' },
                                        { label: 'LOCATION:', value: 'Active SDE Intern @ JBH Tech Innovation' },
                                    ].map((item) => (
                                        <div key={item.label} className="grid grid-cols-[130px_1fr] items-start gap-6">
                                            <span className="text-[11px] font-black text-primary/90 uppercase tracking-[0.2em] pt-1">{item.label}</span>
                                            <span className="text-base font-black text-white leading-tight uppercase tracking-tight">{item.value}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="h-[1px] w-full bg-white/10" />

                                <div className="grid grid-cols-[130px_1fr] items-start gap-6 pt-2">
                                    <span className="text-[11px] font-black text-primary/70 uppercase tracking-[0.2em] pt-2">TECH FOCUS:</span>
                                    <p className="text-2xl font-black italic text-white tracking-tighter leading-[1.1] uppercase">
                                        &quot;BUILDING SYSTEMS THAT HOLD UP UNDER PRESSURE AND STAY FAST AT SCALE.&quot;
                                    </p>
                                </div>

                                {/* Modern Project Indicator: Glowing Blocks (Replacing Rings) */}
                                <div className="flex items-center gap-8 pt-10">
                                    <div className="flex gap-2">
                                        {[0, 1, 2, 3].map((i) => (
                                            <div key={i} className="w-8 h-8 bg-primary/20 border border-primary/40 rounded-sm shadow-[0_0_15px_rgba(var(--primary-rgb),0.2)] animate-pulse" 
                                                 style={{ animationDelay: `${i * 0.2}s` }} />
                                        ))}
                                    </div>
                                    <div className="space-y-1">
                                        <span className="text-sm font-black uppercase tracking-[0.2em] text-white leading-none block">
                                            4+ Live Production Projects
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Section 2: Technical (Visual Match Image 443) */}
                    <div className="pt-40 space-y-20">
                        <div className="flex items-center gap-4">
                            <div className="h-[1px] w-12 bg-primary/40"></div>
                            <span className="text-[10px] font-black text-primary uppercase tracking-[0.5em]">TECHNICAL.</span>
                        </div>

                        <div className="grid lg:grid-cols-[1fr_420px] gap-24 items-start">
                            {/* Expertise Domains Grid */}
                            <div className="grid md:grid-cols-2 gap-x-20 gap-y-16">
                                {skillCategories.map((category) => (
                                    <div key={category.title} className="space-y-6">
                                        <div className="flex items-center gap-3">
                                            <div className="w-[1.5px] h-3 bg-primary"></div>
                                            <h3 className="text-[11px] font-black uppercase tracking-[0.3em] text-white/90">{category.title}</h3>
                                        </div>
                                        <div className="flex flex-wrap gap-2.5">
                                            {category.skills.map((s) => (
                                                <span key={s} className="px-3.5 py-1.5 bg-[#121418] text-white/80 text-[10px] font-bold uppercase tracking-[0.1em] border border-white/5 hover:border-primary/40 transition-all rounded-sm">
                                                    {s}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Refined Developer Profile Sidebar (Match Image 443) */}
                            <div className="h-full">
                                <div className="bg-[#121418] rounded-[2.5rem] border border-white/5 p-14 h-full shadow-2xl relative overflow-hidden group">
                                    <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
                                         style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

                                    <div className="space-y-14 relative z-10">
                                        <div className="space-y-10">
                                            <div className="space-y-2">
                                                <span className="text-[9px] font-black text-primary uppercase tracking-[0.5em]">SYSTEM_IDENTITY</span>
                                                <h4 className="text-3xl font-black text-white italic tracking-tighter uppercase leading-none italic">PRASHASTI PATHAK</h4>
                                            </div>
                                            
                                            <div className="space-y-8 text-sm font-bold text-white/60 tracking-tighter leading-tight uppercase">
                                                <div className="space-y-1">
                                                    <div className="text-[9px] text-white/20 leading-none">Priority_Stream:</div>
                                                    <div className="text-white/80">Backend Engineering & Distributed Systems</div>
                                                </div>
                                                <div className="flex flex-col gap-1">
                                                    <span className="text-[9px] text-white/20 leading-none">Current_Status:</span>
                                                    <span className="text-white/80 tracking-tighter">SDE Intern @ JBH Tech Innovation</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="pt-14 border-t border-white/5 leading-tight">
                                            <p className="text-2xl font-black italic text-white/5 transition-colors group-hover:text-primary/10 transition-colors duration-700 uppercase">
                                                &quot;Architecture over code.&quot;
                                            </p>
                                        </div>

                                        {/* Status Component: Compact Counter */}
                                        <div className="flex items-center gap-6 pt-6">
                                            <div className="relative w-14 h-14 flex items-center justify-center">
                                                <div className="absolute inset-0 border border-primary/30 rounded-lg rotate-45 group-hover:rotate-90 transition-transform duration-700" />
                                                <span className="text-2xl font-black text-primary italic">3+</span>
                                            </div>
                                            <div className="space-y-1">
                                                <div className="text-[10px] font-black uppercase tracking-[0.3em] text-white">NODES_OPTIMIZED</div>
                                                <div className="text-[9px] font-bold text-white/20 uppercase tracking-widest leading-none">STATUS: ACTIVE</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
