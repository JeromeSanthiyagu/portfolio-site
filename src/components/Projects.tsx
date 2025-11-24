import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resume';
import { Folder } from 'lucide-react';

const Projects: React.FC = () => {
    return (
        <section id="projects" className="py-20 bg-slate-900">
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
                        <h2 className="text-3xl font-bold text-white">Featured Projects</h2>
                    </div>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {resumeData.projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-turf-green/50 transition-all hover:shadow-lg hover:shadow-turf-green/5 group"
                        >
                            <div className="p-8 h-full flex flex-col">
                                <div className="flex justify-between items-start mb-6">
                                    <div className="p-3 bg-slate-900 rounded-lg text-turf-green">
                                        <Folder size={24} />
                                    </div>
                                    <div className="flex gap-2">
                                        {/* Placeholder for links if available in future */}
                                        {/* <a href="#" className="text-slate-400 hover:text-white transition-colors"><Github size={20} /></a> */}
                                        {/* <a href="#" className="text-slate-400 hover:text-white transition-colors"><ExternalLink size={20} /></a> */}
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-turf-green transition-colors">
                                    {project.title}
                                </h3>

                                <p className="text-slate-400 mb-6 flex-grow leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.tech.map((tech) => (
                                        <span
                                            key={tech}
                                            className="text-xs font-medium px-2 py-1 bg-slate-900 text-slate-300 rounded"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
