'use client';

import { motion } from 'framer-motion';

const skillCategories = [
    {
        title: 'Languages',
        skills: ['C', 'C++', 'Java', 'Python', 'JavaScript']
    },
    {
        title: 'Web Development',
        skills: ['HTML', 'CSS', 'React', 'Node.js', 'Express.js']
    },
    {
        title: 'Databases & Tools',
        skills: ['PostgreSQL', 'MongoDB', 'Git', 'GitHub', 'VS Code']
    },
    {
        title: 'CS Fundamentals',
        skills: ['DSA', 'OOPs', 'DBMS', 'OS', 'Networking']
    }
];

export default function Skills() {
    return (
        <section id="skills" className="py-24 px-4 bg-foreground/5 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="text-left mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 uppercase">
                        Technical Skills
                    </h2>
                    <p className="text-foreground/60 text-lg max-w-2xl leading-relaxed">
                        A comprehensive overview of my technical proficiencies and core engineering competencies.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {skillCategories.map((category) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="p-8 rounded-3xl bg-background border border-foreground/5 hover:border-primary/30 transition-all group"
                        >
                            <h3 className="text-primary font-bold uppercase tracking-widest text-xs mb-6 pb-2 border-b border-foreground/5 group-hover:border-primary/20 transition-colors">
                                {category.title}
                            </h3>
                            <div className="flex flex-col gap-4">
                                {category.skills.map((skill) => (
                                    <div key={skill} className="flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                                        <span className="text-foreground/80 font-medium">{skill}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
