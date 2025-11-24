import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resume';
import { GraduationCap, Award } from 'lucide-react';

const Education: React.FC = () => {
    return (
        <section id="education" className="py-20 bg-slate-950">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-12"
                >
                    <div className="flex items-center gap-4 mb-4">
                        <div className="h-1 w-12 bg-turf-green" />
                        <h2 className="text-3xl font-bold text-white">Education & Certifications</h2>
                    </div>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Education Column */}
                    <div>
                        <div className="flex items-center gap-3 mb-8">
                            <GraduationCap className="text-turf-green" size={28} />
                            <h3 className="text-2xl font-bold text-white">Education</h3>
                        </div>

                        <div className="space-y-8 border-l-2 border-slate-800 pl-8 ml-3">
                            {resumeData.education.map((edu, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="relative"
                                >
                                    <div className="absolute -left-[41px] top-0 w-5 h-5 bg-slate-900 border-4 border-turf-green rounded-full" />
                                    <h4 className="text-xl font-bold text-white">{edu.institution}</h4>
                                    <p className="text-turf-green font-medium mb-1">{edu.degree}</p>
                                    <div className="flex justify-between text-sm text-slate-400">
                                        <span>{edu.duration}</span>
                                        <span className="font-semibold text-slate-300">{edu.score}</span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Certifications Column */}
                    <div>
                        <div className="flex items-center gap-3 mb-8">
                            <Award className="text-turf-green" size={28} />
                            <h3 className="text-2xl font-bold text-white">Certifications</h3>
                        </div>

                        <div className="grid gap-4">
                            {resumeData.certifications.map((cert, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="bg-slate-900 p-6 rounded-xl border border-slate-800 flex items-start gap-4 hover:border-turf-green/30 transition-colors"
                                >
                                    <div className="mt-1 text-turf-green">
                                        <Award size={20} />
                                    </div>
                                    <p className="text-slate-300 font-medium">{cert}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
