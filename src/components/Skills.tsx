import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resume';
import { Code, Smartphone, GitBranch, Terminal, Cpu } from 'lucide-react';

const Skills: React.FC = () => {
    const getIcon = (category: string) => {
        switch (category) {
            case 'languages': return <Code size={24} />;
            case 'mobile': return <Smartphone size={24} />;
            case 'web': return <Cpu size={24} />;
            case 'tools': return <GitBranch size={24} />;
            default: return <Terminal size={24} />;
        }
    };

    return (
        <section id="skills" className="py-20 bg-slate-950 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 left-0 w-full h-full"
                    style={{ backgroundImage: 'radial-gradient(circle, #3b82f6 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-12"
                >
                    <div className="flex items-center gap-4 mb-4">
                        <div className="h-1 w-12 bg-turf-green" />
                        <h2 className="text-3xl font-bold text-white">Skills & Expertise</h2>
                    </div>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {Object.entries(resumeData.skills).map(([category, items], index) => (
                        <motion.div
                            key={category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-slate-900 p-6 rounded-xl border border-slate-800 hover:border-turf-green/50 transition-colors group"
                        >
                            <div className="flex items-center gap-3 mb-4 text-turf-green">
                                <div className="p-2 bg-slate-800 rounded-lg group-hover:bg-turf-green/10 transition-colors">
                                    {getIcon(category)}
                                </div>
                                <h3 className="text-xl font-bold capitalize">{category}</h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {items.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1 bg-slate-800 text-slate-300 text-sm rounded-full border border-slate-700"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
