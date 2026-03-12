'use client';

import { motion } from 'framer-motion';
import { Layers, GitBranch, ShieldCheck } from 'lucide-react';

const principles = [
    {
        title: "User-Centric Engineering",
        icon: <Layers size={32} className="text-primary" />,
        body: "Technical decisions are rooted in user experience. Clean architecture and efficient systems are primarily means to deliver seamless, reliable applications to the end user."
    },
    {
        title: "Robust Architecture",
        icon: <GitBranch size={32} className="text-accent" />,
        body: "I prioritize structured, maintainable codebases. Scalability and longevity are achieved through consistent naming conventions, modular logic, and proactive documentation."
    },
    {
        title: "Iterative Development",
        icon: <ShieldCheck size={32} className="text-primary" />,
        body: "Functional solutions are better than deferred perfection. I build, deploy, and refine systems based on real-world feedback and validated requirements."
    }
];

export default function BackendArchitecture() {
    return (
        <section id="principles" className="py-24 px-4 bg-foreground/5 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 uppercase">
                        Engineering Principles
                    </h2>
                    <p className="text-foreground/60 text-lg max-w-2xl leading-relaxed">
                        The core philosophies that guide my software development process and architectural choices.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {principles.map((p, index) => (
                        <motion.div
                            key={p.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="p-10 rounded-[2.5rem] glass dark:glass-dark group hover:border-primary/50 transition-all duration-500 flex flex-col gap-6 shadow-xl shadow-black/5"
                        >
                            <div className="p-5 rounded-2xl bg-foreground/5 group-hover:bg-primary/10 transition-all duration-500 w-fit">
                                {p.icon}
                            </div>
                            <h3 className="text-xl font-bold uppercase tracking-tight group-hover:text-primary transition-colors">{p.title}</h3>
                            <p className="text-foreground/60 leading-relaxed">
                                {p.body}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
