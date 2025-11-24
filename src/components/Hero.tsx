import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resume';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
            {/* Sports Background Elements */}
            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
                {/* Tactical Board Lines */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] border-4 border-slate-700 rounded-3xl" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[2px] h-[500px] bg-slate-700" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] border-4 border-slate-700 rounded-full" />

                {/* Abstract X and O */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute top-20 right-20 text-slate-800 text-9xl font-bold opacity-50"
                >
                    ×
                </motion.div>
                <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-20 left-20 w-32 h-32 border-8 border-slate-800 rounded-full opacity-50"
                />
            </div>

            <div className="container mx-auto px-4 z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-turf-green font-medium tracking-wider mb-4 uppercase">
                        {resumeData.personalInfo.title}
                    </h2>
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
                        {resumeData.personalInfo.name}
                    </h1>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg mb-10 leading-relaxed">
                        {resumeData.personalInfo.summary.split('.')[0]}.
                    </p>

                    <div className="flex justify-center gap-4">
                        <a
                            href="#projects"
                            className="px-8 py-3 bg-turf-green text-slate-900 font-bold rounded-full hover:bg-green-400 transition-colors flex items-center gap-2"
                        >
                            View Work <ArrowRight size={20} />
                        </a>
                        <a
                            href="#contact"
                            className="px-8 py-3 border border-slate-700 text-white font-bold rounded-full hover:bg-slate-800 transition-colors"
                        >
                            Contact Me
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
