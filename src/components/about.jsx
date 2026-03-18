'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function About() {
    return (
        <section id="about" className="py-24 px-4 max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        About
                    </h2>

                    <div className="space-y-6 text-foreground/80 leading-relaxed text-lg">
                        <p>
                            I&apos;m a final-year Computer Science student and SDE Intern at JBH Tech Innovation, building and delivering production-grade backend systems.
                        </p>
                        <p>
                            My focus is on designing systems that remain stable under real-world load and scale seamlessly over time. I don&apos;t just aim for functionality — I build solutions that are reliable, efficient, and engineered for long-term performance.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-6 mt-10">
                        <div>
                            <h4 className="text-2xl font-bold text-primary">4+</h4>
                            <p className="text-sm text-foreground/60 font-medium uppercase tracking-wider">Languages</p>
                        </div>
                        <div>
                            <h4 className="text-2xl font-bold text-accent">5+</h4>
                            <p className="text-sm text-foreground/60 font-medium uppercase tracking-wider">Core CSE Domains</p>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="relative block"
                >
                    <div className="aspect-4/5 max-w-[450px] mx-auto rounded-[3rem] border border-white/10 glass dark:glass-dark overflow-hidden relative group shadow-2xl">
                        <Image
                            src="/profile-2.jpg"
                            alt="Prashasti Pathak — Casual"
                            width={450}
                            height={562}
                            className="w-full h-full object-cover grayscale brightness-110 contrast-110 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
