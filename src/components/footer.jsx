import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react';
import GithubActivity from './github-activity';
import ArchModalTrigger from './arch-modal-trigger';

export default function Footer() {
    return (
        <footer className="bg-[#050505] py-16 px-4 border-t border-white/5">
            <div className="max-w-4xl mx-auto text-center space-y-6">
                <div className="text-white/40 text-sm font-medium tracking-wide">
                    Copyright ©{new Date().getFullYear()} All rights reserved | ❤️ by Prashasti Pathak
                </div>
            </div>
        </footer>
    );
}
