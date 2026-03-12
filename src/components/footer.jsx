import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react';
import GithubActivity from './github-activity';
import ArchModalTrigger from './arch-modal-trigger';

export default function Footer() {
    return (
        <footer className="border-t border-white/5 py-12 px-4 bg-background">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
                    <div className="flex flex-col gap-4">
                        <div className="font-extrabold text-3xl uppercase tracking-tight gradient-text">Prashasti Pathak</div>
                        <p className="text-foreground/40 max-w-xs text-xs uppercase font-bold">
                            // Software Developer & SDE Intern.
                            <br />
                            // Building for the next billion users.
                        </p>
                    </div>

                    <div className="flex gap-4 items-center">
                        <Link href="https://github.com/PrashastiPathakk" target="_blank" className="p-4 bg-foreground/5 border border-white/5 text-foreground/40 hover:text-primary transition-all">
                            <Github size={18} />
                        </Link>
                        <Link href="https://www.linkedin.com/in/prashastipathakk" target="_blank" className="p-4 bg-foreground/5 border border-white/5 text-foreground/40 hover:text-primary transition-all">
                            <Linkedin size={18} />
                        </Link>
                        <Link href="mailto:prashastipathak1@gmail.com" className="p-4 bg-foreground/5 border border-white/5 text-foreground/40 hover:text-primary transition-all">
                            <Mail size={18} />
                        </Link>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 gap-6">
                    <div className="flex items-center gap-4 text-[10px] uppercase font-bold tracking-widest text-foreground/30">
                        <span>&copy; {new Date().getFullYear()} PRASHASTI. TERMINAL_MODE: ACTIVE.</span>
                        <ArchModalTrigger />
                    </div>

                    <GithubActivity />
                </div>
            </div>
        </footer>
    );
}
