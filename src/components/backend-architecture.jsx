'use client';

import { motion } from 'framer-motion';
import { Layers, GitBranch, ShieldCheck } from 'lucide-react';

const principles = [
    {
        title: "Build for the User First",
        icon: <Layers size={32} className="text-primary" />,
        body: "Every technical decision I make traces back to one question: does this make the experience better? Clean architecture and optimized queries only matter if they serve the person on the other end of the screen."
    },
    {
        title: "Structure Prevents Chaos",
        icon: <GitBranch size={32} className="text-accent" />,
        body: "A well-organized codebase is a gift to your future self and your team. I invest in clean folder structure, consistent naming, and readable logic before worrying about optimization — because unmaintainable fast code is still broken code."
    },
    {
        title: "Ship It, Then Improve It",
        icon: <ShieldCheck size={32} className="text-primary" />,
        body: "Waiting for perfection is how projects die. I build working solutions first, get them in front of real users, and iterate based on actual feedback — not imagined requirements."
    }
];

export default function BackendArchitecture() {
    return (
        <section id="principles" className="py-24 px-4 bg-foreground/5 overflow-hidden font-mono">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 italic uppercase tracking-tighter">
                        03 / <span className="gradient-text">Principles</span>
                    </h2>
                    <p className="text-foreground/40 text-sm max-w-md uppercase font-bold italic">
                        // Engineering Philosophy.
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
                            className="p-8 rounded-2xl glass dark:glass-dark group hover:border-primary/50 transition-all duration-300 flex flex-col gap-6"
                        >
                            <div className="p-4 rounded-xl bg-white/5 group-hover:bg-primary/10 transition-colors w-fit">
                                {p.icon}
                            </div>
                            <h3 className="text-xl font-bold italic uppercase tracking-tight">{p.title}</h3>
                            <p className="text-foreground/60 text-sm leading-relaxed">
                                {p.body}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
