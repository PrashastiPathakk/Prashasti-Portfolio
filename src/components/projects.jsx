'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowRight, ShieldCheck, BarChart2, Users, Building2, Globe, Cpu } from 'lucide-react';
import Image from 'next/image';

const projects = [
    {
        id: 'devtinder',
        title: 'devTinder — Developer Networking Platform',
        tagline: 'Tinder-style connection platform built for developers.',
        icon: <Users className="text-primary" />,
        description: 'A full-stack web application that helps developers discover and connect with peers through a swipe-based matching interface — built with a production-grade Node.js backend.',
        problem: 'Developers lack a focused, low-friction way to find collaborators and peers beyond generic social platforms.',
        solution: 'Built a RESTful API with JWT authentication, interest-based matching logic, and persistent connection management — delivering a familiar UX pattern tailored to the developer ecosystem.',
        metrics: [
            { label: 'Auth Method', value: 'JWT' },
            { label: 'API Latency', value: '<200ms' },
            { label: 'Match Logic', value: 'Live' },
        ],
        tech: ['Node.js', 'Express.js', 'MongoDB', 'JWT', 'React'],
        github: 'https://github.com/PrashastiPathakk/devTinder',
        image: '/projects/devtinder.png',
    },
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
        id: 'hms',
        title: 'HMS — Hospital Management System',
        tagline: 'End-to-end backend for managing hospital operations.',
        icon: <Building2 className="text-primary" />,
        description: 'A backend system designed to handle patient records, appointment scheduling, and staff management for a multi-department hospital environment.',
        problem: 'Hospital workflows involve multiple roles, overlapping data access, and time-sensitive operations that are error-prone when managed manually or with poorly designed systems.',
        solution: 'Designed a role-based REST API with structured data models for patients, doctors, and appointments — ensuring clean separation of concerns and safe concurrent data access.',
        metrics: [
            { label: 'Roles Supported', value: '3+' },
            { label: 'Architecture', value: 'MVC' },
            { label: 'Data Safety', value: 'RBAC' },
        ],
        tech: ['Node.js', 'Express.js', 'MongoDB', 'JWT'],
        github: 'https://github.com/PrashastiPathakk/hms',
        image: '/projects/hms.png',
    },
    {
        id: 'travel-tour',
        title: 'Travel Tour Package — Booking Landing Page',
        tagline: 'A responsive travel booking frontend with rich UI.',
        icon: <Globe className="text-primary" />,
        description: 'A fully responsive, visually rich frontend for a travel and tour booking service — built with semantic HTML, modern CSS, and a focus on mobile-first design.',
        problem: 'Travel service websites often sacrifice mobile usability for desktop aesthetics, losing potential bookings from smartphone users.',
        solution: 'Designed a mobile-first, multi-section landing page with smooth layouts, destination cards, and clear CTAs that adapt cleanly across all screen sizes.',
        metrics: [
            { label: 'Mobile Score', value: '100%' },
            { label: 'Framework', value: 'Vanilla' },
            { label: 'Responsive', value: 'Yes' },
        ],
        tech: ['HTML', 'CSS', 'JavaScript'],
        github: 'https://github.com/PrashastiPathakk/Travel_Tour_Pacakage',
        image: '/projects/travel-tour.png',
        badge: 'Zero Server Calls'
    },
];

export default function Projects() {
    return (
        <section id="projects" className="py-24 px-4 max-w-7xl mx-auto font-mono">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                <div>
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 italic uppercase tracking-tighter">04 / <span className="gradient-text">Projects.</span></h2>
                    <p className="text-foreground/40 max-w-xl text-sm uppercase font-bold italic">// Engineering Case Studies.</p>
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

                            <h3 className="text-3xl font-bold mb-4 italic uppercase tracking-tight">{project.title}</h3>
                            <p className="text-lg text-foreground/60 mb-8 italic leading-relaxed text-justify">&quot;{project.tagline}&quot;</p>

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
