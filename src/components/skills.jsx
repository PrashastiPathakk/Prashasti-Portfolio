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
        <section id="skills" className="py-40 relative overflow-hidden bg-background">
            {/* Background Aesthetic Layers */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-10">
                <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/20 rounded-full blur-[120px]" />
                <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-accent/20 rounded-full blur-[120px]" />
                <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0)', backgroundSize: '40px 40px' }} />
                <span className="absolute top-20 right-20 text-[20rem] font-black text-white/[0.02] leading-none select-none italic">TECH</span>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Header Block */}
                <div className="space-y-6 mb-32">
                    <div className="flex items-center gap-4">
                        <div className="h-[1px] w-24 bg-primary/30" />
                        <span className="text-[10px] font-black text-primary uppercase tracking-[0.5em]">System_Capabilities</span>
                    </div>
                    <motion.h2 
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="text-6xl md:text-8xl font-black italic tracking-tighter text-foreground leading-[0.8] uppercase"
                    >
                        Technical <br /> <span className="gradient-text">Excellence.</span>
                    </motion.h2>
                </div>

                <div className="grid lg:grid-cols-[1fr_400px] gap-20 items-start">
                    {/* Main Content Area */}
                    <div className="space-y-40">
                        
                        {/* 01. Professional Masteries (Progress Bars) */}
                        <div className="space-y-16">
                            <div className="flex items-center justify-between">
                                <h3 className="text-sm font-black uppercase tracking-[0.4em] text-foreground/40 italic">01 // Professional_Masteries</h3>
                                <span className="h-[1px] flex-1 mx-8 bg-foreground/5" />
                            </div>

                            <div className="grid gap-16">
                                {[
                                    { name: 'JavaScript', level: 'Senior_Level', percentage: 90 },
                                    { name: 'Node.js', level: 'Architecture', percentage: 85 },
                                    { name: 'Express.js', level: 'Backend_Core', percentage: 85 },
                                    { name: 'Rest APIs', level: 'Optimization', percentage: 92 },
                                ].map((skill, index) => (
                                    <motion.div 
                                        key={skill.name}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="group"
                                    >
                                        <div className="flex justify-between items-end mb-6">
                                            <div className="flex items-baseline gap-6">
                                                <h4 className="text-5xl md:text-7xl font-black italic tracking-tighter uppercase text-foreground/90 group-hover:text-primary transition-all duration-700 leading-none">
                                                    {skill.name}
                                                </h4>
                                                <span className="text-xs font-mono text-primary/40 group-hover:text-primary/100 transition-colors">
                                                    [{skill.percentage}%]
                                                </span>
                                            </div>
                                            <div className="hidden md:block text-right">
                                                <span className="text-[10px] font-black text-foreground/20 uppercase tracking-[0.3em] block mb-1">Status</span>
                                                <span className="text-[10px] font-black text-primary uppercase tracking-[0.2em]">{skill.level}</span>
                                            </div>
                                        </div>
                                        <div className="h-[1px] w-full bg-foreground/10 relative">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.percentage}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
                                                className="absolute inset-0 bg-primary shadow-[0_0_20px_rgba(var(--primary-rgb),0.4)]"
                                            />
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* 02. Specialized Ecosystem (Category Grid) */}
                        <div className="space-y-16">
                            <div className="flex items-center justify-between">
                                <h3 className="text-sm font-black uppercase tracking-[0.4em] text-foreground/40 italic">02 // specialized_ecosystem</h3>
                                <span className="h-[1px] flex-1 mx-8 bg-foreground/5" />
                            </div>

                            <div className="grid md:grid-cols-2 gap-8">
                                {skillCategories.map((category, index) => (
                                    <motion.div
                                        key={category.title}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.05 }}
                                        className="group relative"
                                    >
                                        <div className="relative glass dark:glass-dark rounded-[2rem] border border-white/5 p-10 h-full flex flex-col gap-8 hover:border-primary/30 hover:bg-white/[0.02] transition-all duration-700 shadow-2xl">
                                            <div className="flex justify-between items-start">
                                                <div className={`w-14 h-14 rounded-2xl ${category.accent === 'primary' ? 'bg-primary/5 text-primary' : 'bg-accent/5 text-accent'} flex items-center justify-center ring-1 ring-white/5 group-hover:scale-110 transition-transform duration-500`}>
                                                    {category.icon}
                                                </div>
                                                <span className="text-[9px] font-black text-foreground/10 uppercase tracking-[0.4em]">Domain_0{index + 1}</span>
                                            </div>
                                            
                                            <div className="space-y-2">
                                                <h3 className="text-lg font-black tracking-widest text-foreground uppercase">{category.title}</h3>
                                                <div className="h-[2px] w-8 bg-primary/20 group-hover:w-full transition-all duration-700" />
                                            </div>

                                            <div className="flex flex-wrap gap-2 mt-auto">
                                                {category.skills.map((skill) => (
                                                    <span 
                                                        key={skill}
                                                        className="px-4 py-2 bg-foreground/5 text-foreground/40 text-[9px] font-black uppercase tracking-widest rounded-lg border border-white/5 hover:text-foreground hover:border-primary/20 transition-all duration-300"
                                                    >
                                                        {skill}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Sidebar: Tactical Overview */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:sticky lg:top-40 space-y-12"
                    >
                        <div className="relative glass dark:glass-dark rounded-[4rem] border border-white/10 p-12 shadow-[0_40px_100px_rgba(0,0,0,0.5)] overflow-hidden">
                            {/* Animated Scanner Effect */}
                            <motion.div 
                                animate={{ top: ['0%', '100%', '0%'] }}
                                transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                                className="absolute left-0 right-0 h-[2px] bg-primary/10 blur-sm pointer-events-none z-0"
                            />

                            <div className="space-y-12 relative z-10">
                                <div className="space-y-8">
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-2">
                                            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                                            <span className="text-[10px] font-black text-primary uppercase tracking-[0.5em]">Active_Operational_Profile</span>
                                        </div>
                                        <h4 className="text-3xl font-black text-foreground italic tracking-tighter leading-none">PRASHASTI <br /> PATHAK</h4>
                                    </div>
                                    
                                    <div className="space-y-6">
                                        <div className="flex flex-col gap-1">
                                            <span className="text-[9px] font-bold text-foreground/20 uppercase tracking-[0.4em]">Designation</span>
                                            <span className="text-sm font-bold text-foreground italic tracking-tight uppercase">Backend Infrastructure Engineer</span>
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <span className="text-[9px] font-bold text-foreground/20 uppercase tracking-[0.4em]">Location</span>
                                            <span className="text-sm font-bold text-foreground italic tracking-tight uppercase tracking-widest">Global Ops // Remote</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="pt-12 border-t border-white/5 leading-none space-y-4">
                                    <span className="text-[9px] font-black text-primary uppercase tracking-[0.4em]">Core_Philosophy</span>
                                    <p className="text-2xl font-black italic text-foreground/20 group-hover:text-foreground transition-all duration-1000 leading-[1.1]">
                                        &quot;solutions that remain stable under real-world load.&quot;
                                    </p>
                                </div>

                                {/* Holographic Project Counter */}
                                <div className="pt-12 border-t border-white/5 flex items-center gap-8">
                                    <div className="relative w-20 h-20 flex items-center justify-center">
                                        <motion.div 
                                            animate={{ rotate: 360 }}
                                            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                                            className="absolute inset-0 border-4 border-dashed border-primary/10 rounded-full"
                                        />
                                        <motion.div 
                                            animate={{ rotate: -360 }}
                                            transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                                            className="absolute inset-2 border border-primary/20 rounded-full"
                                        />
                                        <div className="text-3xl font-black italic text-primary">3+</div>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-foreground">Live_Deployments</span>
                                        <span className="text-[9px] font-bold text-foreground/20 uppercase mt-1">Industrial Standards</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Competencies Block */}
                        <div className="p-10 glass dark:glass-dark rounded-[3rem] border border-white/5 relative overflow-hidden group">
                            <span className="text-[10px] font-black text-primary uppercase tracking-[0.5em] mb-8 block">Foundations_Registry</span>
                            <div className="flex flex-wrap gap-3">
                                {workingKnowledge.map((tag) => (
                                    <span key={tag} className="text-[9px] font-black text-foreground/30 uppercase tracking-[0.2em] px-4 py-2 bg-foreground/[0.03] rounded-full border border-white/5 hover:text-foreground hover:bg-primary/5 hover:border-primary/20 transition-all duration-500">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
