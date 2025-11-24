import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resume';

const About: React.FC = () => {
    return (
        <section id="about" className="py-20 bg-slate-900">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="flex items-center gap-4 mb-8">
                        <div className="h-1 w-12 bg-turf-green" />
                        <h2 className="text-3xl font-bold text-white">About Me</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6 text-slate-300 leading-relaxed">
                            <p>
                                {resumeData.personalInfo.summary}
                            </p>
                            <p>
                                Based in <span className="text-white font-medium">{resumeData.personalInfo.location}</span>,
                                I combine my passion for sports with technology to build efficient and dynamic applications.
                            </p>
                        </div>

                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-tr from-turf-green to-jersey-blue rounded-2xl blur-2xl opacity-20" />
                            <div className="relative bg-slate-800 p-8 rounded-2xl border border-slate-700">
                                <div className="space-y-4">
                                    <div>
                                        <h3 className="text-sm text-slate-400 uppercase tracking-wider">Education</h3>
                                        <p className="text-white font-medium mt-1">{resumeData.education[0].institution}</p>
                                        <p className="text-turf-green text-sm">{resumeData.education[0].degree}</p>
                                    </div>
                                    <div className="h-px bg-slate-700" />
                                    <div>
                                        <h3 className="text-sm text-slate-400 uppercase tracking-wider">Focus</h3>
                                        <p className="text-white font-medium mt-1">Web & Mobile Development</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
