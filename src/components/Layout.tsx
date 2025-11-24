import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { resumeData } from '../data/resume';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className="min-h-screen bg-slate-900 text-slate-200 selection:bg-turf-green selection:text-slate-900">
            <nav className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
                <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                    <div className="text-xl font-bold text-white tracking-tighter">
                        JEROM<span className="text-turf-green">.</span>
                    </div>
                    <div className="hidden md:flex space-x-8 text-sm font-medium">
                        <a href="#about" className="hover:text-turf-green transition-colors">About</a>
                        <a href="#skills" className="hover:text-turf-green transition-colors">Skills</a>
                        <a href="#projects" className="hover:text-turf-green transition-colors">Projects</a>
                        <a href="#contact" className="hover:text-turf-green transition-colors">Contact</a>
                    </div>
                </div>
            </nav>

            <main className="pt-16">
                {children}
            </main>

            <footer className="bg-slate-950 py-8 border-t border-slate-800">
                <div className="container mx-auto px-4 text-center">
                    <div className="flex justify-center space-x-6 mb-4">
                        <a href={`mailto:${resumeData.personalInfo.email}`} className="text-slate-400 hover:text-turf-green transition-colors">
                            <Mail size={20} />
                        </a>
                        <a href="#" className="text-slate-400 hover:text-turf-green transition-colors">
                            <Linkedin size={20} />
                        </a>
                        <a href="#" className="text-slate-400 hover:text-turf-green transition-colors">
                            <Github size={20} />
                        </a>
                    </div>
                    <p className="text-slate-500 text-sm">
                        © {new Date().getFullYear()} Jerom Santhiyagu A. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
