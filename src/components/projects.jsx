'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowRight, ShieldCheck, BarChart2, Users, Building2, Globe, Cpu } from 'lucide-react';
import Image from 'next/image';

const projects = [
    {
        id: 'dsa-tracker',
        title: 'DSA Tracker — Problem Progress Dashboard',
        tagline: 'Track your DSA journey with intelligent categorization.',
        icon: <BarChart2 className="text-primary" />,
        description: 'A browser-based productivity tool for tracking Data Structures & Algorithms progress across topics, difficulty levels, and platforms — with persistent state and visual stats.',
        problem: 'DSA preparation is unstructured and hard to measure — most developers lose track of what they have solved, what to revisit, and where their gaps are.',
        solution: 'Built a client-side tracker with localStorage persistence, topic-wise categorization, and completion stats that survive page reloads without a backend dependency.',
        metrics: [
            { label: 'Server Calls', value: '0' },
            { label: 'Storage', value: 'Local' },
            { label: 'Topic Coverage', value: 'Full DSA' },
        ],
        tech: ['JavaScript', 'HTML', 'CSS', 'localStorage API'],
        github: 'https://github.com/PrashastiPathakk/DSA-Tracker',
        image: '/projects/dsa-tracker.png',
        badge: 'Zero Server Calls'
    },
    {
        id: 'forecast-hub',
        title: 'Simple Forecast Hub — Predictive Weather Engine',
        tagline: 'A clean, intuitive interface for global weather insights.',
        icon: <ShieldCheck className="text-primary" />,
        description: 'A high-performance weather aggregation platform that provides real-time atmospheric data and predictive trends with a focus on UX clarity and speed.',
        problem: 'Most weather applications are cluttered with ads and redundant data, making it difficult to get a quick, accurate forecast summary.',
        solution: 'Developed a streamlined hub that leverages weather APIs to deliver precise forecasts, dynamic visualisations, and location-based insights in a minimalist wrapper.',
        metrics: [
            { label: 'API Calls', value: 'Real-time' },
            { label: 'Frontend', value: 'Vite/React' },
            { label: 'Accuracy', value: '99%' },
        ],
        tech: ['React', 'TailwindCSS', 'Weather API', 'Framer Motion'],
        github: 'https://github.com/PrashastiPathakk/simple-forecast-hub',
        image: '/projects/forecast.png',
    },
    {
        id: 'password-gen',
        title: 'Random Password Generator — Security Tool',
        tagline: 'Robust, client-side encryption-ready password utility.',
        icon: <Cpu className="text-primary" />,
        description: 'A lightweight security application designed to generate cryptographically strong passwords based on customizable entropy parameters.',
        problem: 'Users frequently reuse weak passwords across multiple platforms, leading to severe security vulnerabilities and data breaches.',
        solution: 'Engineered a secure, client-side generator that allows users to customize length and character sets, ensuring all computations happen locally for maximum privacy.',
        metrics: [
            { label: 'Security', value: 'Low' },
            { label: 'Computation', value: 'Client' },
            { label: 'Efficiency', value: 'O(n)' },
        ],
        tech: ['HTML', 'CSS', 'JavaScript', 'Crypto API'],
        github: 'https://github.com/PrashastiPathakk/Random-Password-Generator',
        image: '/projects/password.png',
        badge: 'Privacy Focused'
    },
];

export default function Projects() {
    return (
        <section id="projects" className="py-24 px-4 max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                <div>
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 uppercase">Projects</h2>
                    <p className="text-foreground/40 max-w-xl text-sm uppercase font-bold text-primary tracking-widest leading-loose">Software Engineering Portfolio</p>
                </div>
                <motion.a
                    whileHover={{ x: 10, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://github.com/PrashastiPathakk"
                    target="_blank"
                    className="flex items-center gap-2 text-primary font-bold group uppercase text-sm tracking-widest"
                >
                    View More on GitHub <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </motion.a>
            </div>

            <div className="flex flex-col gap-32">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
                    >
                        {/* Visuals / Media */}
                        <div className="flex-1 w-full relative">
                            <div className="aspect-video bg-foreground/5 border border-white/5 overflow-hidden relative group">
                                {/* Image Renderer */}
                                {project.image && (
                                    <div className="absolute inset-0 z-0">
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                                        />
                                    </div>
                                )}

                                {/* Fallback Icon (Z-indexed above image but lower opacity) */}
                                <div className="absolute inset-0 flex items-center justify-center opacity-20 group-hover:opacity-10 transition-opacity duration-700 z-10 pointer-events-none">
                                    <Cpu size={120} />
                                </div>

                                <div className="absolute inset-0 bg-linear-to-t from-background/90 via-transparent to-transparent z-20" />

                                {/* Metrics Overlay */}
                                <div className="absolute bottom-6 left-6 right-6 flex justify-between gap-4 z-30">
                                    {project.metrics.map((m) => (
                                        <div key={m.label} className="p-3 bg-background/50 backdrop-blur-xl flex-1 text-center border border-white/5">
                                            <div className="text-xl font-bold text-primary">{m.value}</div>
                                            <div className="text-[10px] uppercase font-bold text-foreground/40">{m.label}</div>
                                        </div>
                                    ))}
                                </div>

                                {project.badge && (
                                    <div className="absolute top-6 left-6 z-30">
                                        <span className="px-3 py-1 bg-primary text-black text-[10px] font-bold uppercase tracking-widest">
                                            {project.badge}
                                        </span>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Content */}
                        <div className="flex-1">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-2 bg-foreground/5 border border-white/10 text-primary">
                                    {project.icon}
                                </div>
                                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-foreground/40">Case Study</span>
                            </div>

                            <h3 className="text-3xl font-bold mb-4 uppercase tracking-tight">{project.title}</h3>
                            <p className="text-lg text-foreground/60 mb-8 leading-relaxed text-justify">&quot;{project.tagline}&quot;</p>

                            <div className="space-y-6 mb-10">
                                <div>
                                    <h4 className="text-xs font-bold text-primary uppercase mb-2 tracking-widest">[ The Problem ]</h4>
                                    <p className="text-foreground/80 leading-relaxed text-sm">{project.problem}</p>
                                </div>
                                <div>
                                    <h4 className="text-xs font-bold text-accent uppercase mb-2 tracking-widest">[ Our Solution ]</h4>
                                    <p className="text-foreground/80 leading-relaxed text-sm">{project.solution}</p>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-2 mb-10">
                                {project.tech.map((t) => (
                                    <span key={t} className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest bg-foreground/5 border border-foreground/10">
                                        {t}
                                    </span>
                                ))}
                            </div>
                            <div className="flex items-center gap-6">
                                <motion.a
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-4 px-8 py-4 bg-primary text-black font-bold text-xs uppercase tracking-widest transition-all"
                                >
                                    <Github size={18} /> View Source Code
                                </motion.a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
