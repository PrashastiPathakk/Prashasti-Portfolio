'use client';

import { motion } from 'framer-motion';
import { Phone, Send, Globe, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';

export default function Contact() {
    return (
        <section id="contact" className="py-32 px-4 bg-[#050505] text-white">
            <div className="max-w-4xl mx-auto space-y-32">
                {/* Contact Info Blocks */}
                <div className="flex flex-col items-center space-y-24">
                    {/* Phone */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col items-center space-y-8"
                    >
                        <div className="w-24 h-24 rounded-full bg-[#1A1A1A] flex items-center justify-center text-[#FFB400]">
                            <Phone size={32} strokeWidth={1.5} />
                        </div>
                        <div className="text-center space-y-4">
                            <h4 className="text-sm font-black uppercase tracking-[0.2em] text-white/50">Contact Number</h4>
                            <p className="text-2xl font-medium tracking-tight">+91 7985209830</p>
                        </div>
                    </motion.div>

                    {/* Email */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="flex flex-col items-center space-y-8"
                    >
                        <div className="w-24 h-24 rounded-full bg-[#1A1A1A] flex items-center justify-center text-[#FFB400]">
                            <Send size={32} strokeWidth={1.5} />
                        </div>
                        <div className="text-center space-y-4">
                            <h4 className="text-sm font-black uppercase tracking-[0.2em] text-white/50">Email Address</h4>
                            <p className="text-2xl font-medium tracking-tight">prashastipathak1@gmail.com</p>
                        </div>
                    </motion.div>

                    {/* Resume */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-col items-center space-y-8"
                    >
                        <div className="w-24 h-24 rounded-full bg-[#1A1A1A] flex items-center justify-center text-[#FFB400]">
                            <Globe size={32} strokeWidth={1.5} />
                        </div>
                        <div className="text-center space-y-4">
                            <h4 className="text-sm font-black uppercase tracking-[0.2em] text-white/50">Download Resume</h4>
                            <a href="#" className="text-2xl font-medium tracking-tight hover:text-[#FFB400] transition-colors">resumelink</a>
                        </div>
                    </motion.div>
                </div>

                {/* Hiring CTA */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="text-center space-y-12 py-20"
                >
                    <h2 className="text-4xl md:text-6xl font-medium tracking-tight leading-tight">
                        Have a Hiring or<br />Question?
                    </h2>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-16 py-6 bg-[#FFB400] text-black text-sm font-black uppercase tracking-[0.3em] rounded-full hover:bg-[#FFC433] transition-all shadow-[0_0_30px_rgba(255,180,0,0.2)]"
                    >
                        Click Here
                    </motion.button>
                </motion.div>

                {/* Social Bar */}
                <div className="flex flex-col md:flex-row items-center justify-between pt-10 border-t border-white/5 gap-8">
                    <div className="text-white/30 text-xs font-black uppercase tracking-[0.4em] text-center md:text-left leading-relaxed">
                        Find me<br />on
                    </div>
                    <div className="flex gap-4">
                        {[
                            { icon: <Linkedin size={20} />, href: '#' },
                            { icon: <Twitter size={20} />, href: '#' },
                            { icon: <Facebook size={20} />, href: '#' },
                            { icon: <Instagram size={20} />, href: '#' }
                        ].map((social, i) => (
                            <motion.a
                                key={i}
                                whileHover={{ y: -5, backgroundColor: '#FFB400', color: '#000' }}
                                href={social.href}
                                className="w-14 h-14 rounded-full bg-[#1A1A1A] flex items-center justify-center text-white transition-all duration-300"
                            >
                                {social.icon}
                            </motion.a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
