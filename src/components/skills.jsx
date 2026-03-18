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
        <section id="skills" className="py-32 relative overflow-hidden bg-[#0A0C10]">
            <div className="container mx-auto px-6 relative z-10">
                <div className="space-y-40">
                    {/* Header: Technical Excellence (Visual Match Image 397) */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <div className="h-[1px] w-16 bg-primary/40"></div>
                            <span className="text-[10px] font-bold text-primary uppercase tracking-[0.4em]">SYSTEM_CAPABILITIES</span>
                        </div>
                        
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

                        <div className="pt-8">
                            <span className="text-[11px] font-black text-white/90 tracking-[0.3em]">01 // PROFESSIONAL_MASTERIES</span>
                        </div>
                    </div>

                    {/* Mastery Board (The Charts) */}
                    <div className="max-w-6xl space-y-24">
                        <div className="grid gap-20">
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
                                            <span className="text-5xl md:text-7xl font-black italic tracking-tighter uppercase text-white group-hover:text-primary transition-all duration-500 leading-none">
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
                    </div>

                    {/* Secondary Competencies Grid */}
                    <div className="pt-40">
                        <div className="grid lg:grid-cols-[1fr_400px] gap-24 items-start">
                            {/* Expertise Domains */}
                            <div className="grid md:grid-cols-2 gap-12">
                                {skillCategories.map((category, index) => (
                                    <div key={category.title} className="space-y-8">
                                        <div className="flex items-center gap-3">
                                            <div className="w-[1px] h-4 bg-primary/40"></div>
                                            <h3 className="text-xs font-black uppercase tracking-[0.4em] text-foreground/80">{category.title}</h3>
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {category.skills.map((s) => (
                                                <span key={s} className="px-3 py-2 bg-foreground/5 text-foreground/40 text-[9px] font-bold uppercase tracking-[0.2em] border border-white/5 hover:border-primary/20 hover:text-foreground transition-all">
                                                    {s}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Refined Developer Profile Sidebar */}
                            <div className="lg:sticky lg:top-32 space-y-12">
                                <div className="glass dark:glass-dark rounded-[2.5rem] border border-white/5 p-12 shadow-2xl relative overflow-hidden group">
                                    <div className="absolute inset-0 opacity-5 pointer-events-none" 
                                         style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '20px 20px' }} />

                                    <div className="space-y-12 relative z-10">
                                        <div className="space-y-8">
                                            <div className="space-y-1">
                                                <span className="text-[9px] font-black text-primary uppercase tracking-[0.4em]">SYSTEM_IDENTITY</span>
                                                <h4 className="text-2xl font-black text-white italic tracking-tighter uppercase">PRASHASTI PATHAK</h4>
                                            </div>
                                            
                                            <div className="space-y-6">
                                                <div className="flex flex-col">
                                                    <span className="text-[9px] font-bold text-foreground/30 uppercase tracking-widest leading-none mb-2">Core_Designation</span>
                                                    <span className="text-sm font-bold text-foreground/80 uppercase tracking-tighter">Backend Engineer & SDE Intern</span>
                                                </div>
                                                <div className="flex flex-col">
                                                    <span className="text-[9px] font-bold text-foreground/30 uppercase tracking-widest leading-none mb-2">Current_Priority</span>
                                                    <span className="text-sm font-bold text-foreground/80 uppercase tracking-tighter">Scalable Systems Architecture</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="pt-12 border-t border-white/5 leading-tight">
                                            <p className="text-2xl font-black italic text-foreground/10 group-hover:text-primary/40 transition-colors duration-700 uppercase">
                                                &quot;Engineering systems for real-world load.&quot;
                                            </p>
                                        </div>

                                        {/* Holographic Counter Styling */}
                                        <div className="flex items-center gap-6 pt-6">
                                            <div className="relative w-16 h-16 flex items-center justify-center">
                                                <div className="absolute inset-0 border border-primary/20 rounded-2xl rotate-45" />
                                                <div className="absolute inset-2 border border-primary/40 rounded-xl -rotate-12 animate-pulse" />
                                                <span className="text-2xl font-black text-primary italic">3+</span>
                                            </div>
                                            <div className="space-y-1">
                                                <div className="text-[10px] font-black uppercase tracking-[0.3em] text-foreground/90">LIVE_PROD_SYSTEMS</div>
                                                <div className="text-[9px] font-bold text-foreground/30 uppercase leading-none">Status: Optimized</div>
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
