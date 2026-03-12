'use client';

import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, MessageSquare, ArrowUpRight } from 'lucide-react';

const socials = [
    { name: 'LinkedIn', icon: <Linkedin size={24} />, href: 'https://www.linkedin.com/in/prashastipathakk', color: 'hover:text-[#0077b5]' },
    { name: 'GitHub', icon: <Github size={24} />, href: 'https://github.com/PrashastiPathakk', color: 'hover:text-primary' },
    { name: 'Email', icon: <Mail size={24} />, href: 'mailto:prashastipathak1@gmail.com', color: 'hover:text-red-500' },
];

export default function Contact() {
    return (
        <section id="contact" className="py-24 px-4 overflow-hidden relative border-t border-white/5">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] -z-10" />

            <div className="max-w-4xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="p-12 md:p-20 rounded-[3rem] glass dark:glass-dark border border-white/10"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold mb-8">
                        <MessageSquare size={16} /> <span className="uppercase tracking-widest leading-loose">Get In Touch</span>
                    </div>

                    <h2 className="text-4xl md:text-7xl font-bold mb-6 uppercase">
                        Contact
                    </h2>

                    <p className="text-lg text-foreground/60 mb-12 max-w-xl mx-auto leading-relaxed">
                        Actively seeking Software Developer and SDE roles (full-time or internship). Typical response time: under 24 hours.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="mailto:prashastipathak1@gmail.com"
                            className="px-10 py-5 bg-primary text-black font-extrabold flex items-center gap-2 text-xs uppercase tracking-[0.2em]"
                        >
                            Email Me <ArrowUpRight size={18} />
                        </motion.a>

                        <div className="flex gap-4">
                            {socials.map((social) => (
                                <motion.a
                                    key={social.name}
                                    whileHover={{ y: -5 }}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`p-5 bg-foreground/5 border border-white/10 transition-colors ${social.color}`}
                                >
                                    {social.icon}
                                </motion.a>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
