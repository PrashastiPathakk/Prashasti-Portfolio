'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronRight, Download } from 'lucide-react';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Hero() {
    const { scrollY } = useScroll();
    const opacity = useTransform(scrollY, [0, 200], [1, 0]);

    return (
        <section id="hero" className="min-h-[90vh] flex flex-col items-center justify-center px-4 pt-32 lg:pt-32 relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px]" />
            <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[120px]" />

            <div className="max-w-7xl w-full grid md:grid-cols-2 gap-12 items-center text-left relative z-10">
                {/* Left Column: Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6 mt-6 inline-block border border-primary/20"
                    >
                        <span className="inline-block w-2 h-2 rounded-full bg-primary animate-pulse mr-2" />
                        Available for Internships & Full-Time Roles
                    </motion.span>

                    <div className="mb-4">
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-primary text-lg font-bold tracking-widest uppercase"
                        >
                            Hi, I&apos;m Prashasti Pathak
                        </motion.span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
                        Building robust, scalable, and <span className="gradient-text">user-centric solutions.</span>
                    </h1>

                    <p className="text-base md:text-lg text-foreground/70 mb-10 leading-relaxed max-w-2xl">
                        Full-Stack Developer focused on architecting production-grade applications — currently an SDE Intern at JBH Tech Innovation.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center gap-4 mb-12">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                            className="px-8 py-3 rounded-full bg-primary text-white font-semibold flex items-center gap-2 shadow-lg shadow-primary/25 w-full sm:w-auto justify-center"
                        >
                            VIEW PROJECTS <ChevronRight size={20} />
                        </motion.button>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => window.open('/resume.pdf', '_blank')}
                            className="px-8 py-3 rounded-full border border-foreground/10 hover:bg-foreground/5 font-semibold flex items-center gap-2 transition-colors w-full sm:w-auto justify-center"
                        >
                            RESUME <Download size={20} />
                        </motion.button>
                    </div>

                    {/* Stats Row */}
                    <div className="grid grid-cols-3 gap-8 pt-8 border-t border-foreground/5">
                        {[
                            { value: "4", label: "Production-Ready Projects" },
                            { value: "1", label: "Active Internship" },
                            { value: "2+", label: "Years of Development" }
                        ].map((stat, i) => (
                            <div key={i}>
                                <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                                <div className="text-[11px] uppercase tracking-widest font-bold text-foreground/40 leading-tight">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Right Column: Hero Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, x: 30 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    style={{ opacity }}
                    className="relative block"
                >
                    <motion.div 
                        layoutId="hero-profile-pic"
                        className="aspect-4/5 max-w-[450px] mx-auto rounded-[3rem] border border-white/10 glass dark:glass-dark overflow-hidden relative group shadow-2xl"
                    >
                        <Image
                            src="/profile.png"
                            alt="Prashasti Pathak — Software Developer"
                            width={450}
                            height={562}
                            priority
                            className="w-full h-full object-cover grayscale brightness-110 contrast-110 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    </motion.div>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer"
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
                <div className="w-1 h-12 bg-linear-to-b from-primary to-transparent rounded-full" />
            </motion.div>
        </section>
    );
}
