'use client';

import { motion } from 'framer-motion';
import { Code2, Database, Layout, Terminal, Brain, Cpu } from 'lucide-react';

const coreStack = [
    { name: 'JavaScript', level: 'EXPERT', percentage: 95 },
    { name: 'Node.js', level: 'EXPERT', percentage: 90 },
    { name: 'Express.js', level: 'PROFICIENT', percentage: 85 },
    { name: 'MongoDB', level: 'PROFICIENT', percentage: 80 },
    { name: 'REST API Design', level: 'PROFICIENT', percentage: 85 },
];

const workingKnowledge = [
    'React', 'HTML', 'CSS', 'Python', 'C++', 'SQL', 'Git', 'GitHub', 'Postman', 'DSA'
];

export default function Skills() {
    return (
        <section id="skills" className="py-24 px-4 bg-foreground/5 overflow-hidden font-mono">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
                    <div className="text-left">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4 italic uppercase tracking-tighter">
                            02 / <span className="gradient-text">Skills</span>
                        </h2>
                        <p className="text-foreground/40 text-sm max-w-md uppercase font-bold">
                            // Technical competency self-assessed based on production experience and depth of architectural knowledge.
                        </p>
                    </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-16">
                    {/* Core Stack */}
                    <div>
                        <h3 className="text-xs font-bold uppercase tracking-[0.3em] mb-10 text-primary">Core Stack.</h3>
                        <div className="space-y-10">
                            {coreStack.map((skill) => (
                                <div key={skill.name} className="group">
                                    <div className="flex justify-between items-end mb-3">
                                        <div className="flex items-end gap-4">
                                            <span className="text-2xl font-bold tracking-tighter italic uppercase">{skill.name}</span>
                                            <span className="text-[10px] pb-1 font-bold text-foreground/30 uppercase">{skill.level}</span>
                                        </div>
                                        <span className="text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity text-primary">{skill.percentage}%</span>
                                    </div>
                                    <div className="h-2 w-full bg-foreground/5 relative overflow-hidden">
                                        <motion.div
                                            initial={{ x: '-100%' }}
                                            whileInView={{ x: `${skill.percentage - 100}%` }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1, ease: 'easeOut' }}
                                            className="absolute inset-0 bg-primary"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Working Knowledge */}
                    <div>
                        <h3 className="text-xs font-bold uppercase tracking-[0.3em] mb-10 text-accent">Working Knowledge.</h3>
                        <div className="flex flex-wrap gap-3">
                            {workingKnowledge.map((skill) => (
                                <motion.span
                                    key={skill}
                                    whileHover={{ scale: 1.05 }}
                                    className="px-6 py-3 border border-foreground/10 text-sm font-bold uppercase tracking-wider hover:border-primary/50 hover:bg-primary/5 transition-all"
                                >
                                    {skill}
                                </motion.span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
