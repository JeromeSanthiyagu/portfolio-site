import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resume';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
    return (
        <section id="contact" className="py-20 bg-slate-900">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto text-center mb-16"
                >
                    <h2 className="text-3xl font-bold text-white mb-4">Get In Touch</h2>
                    <p className="text-slate-400">
                        I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>
                </motion.div>

                <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-8"
                    >
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-slate-800 rounded-lg text-turf-green">
                                <Phone size={24} />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-white mb-1">Phone</h3>
                                <p className="text-slate-400">{resumeData.personalInfo.phone}</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-slate-800 rounded-lg text-turf-green">
                                <Mail size={24} />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-white mb-1">Email</h3>
                                <a href={`mailto:${resumeData.personalInfo.email}`} className="text-slate-400 hover:text-turf-green transition-colors">
                                    {resumeData.personalInfo.email}
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-slate-800 rounded-lg text-turf-green">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-white mb-1">Location</h3>
                                <p className="text-slate-400">{resumeData.personalInfo.location}</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.form
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-4"
                        onSubmit={(e) => e.preventDefault()}
                    >
                        <div className="grid grid-cols-2 gap-4">
                            <input
                                type="text"
                                placeholder="Name"
                                className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-turf-green transition-colors"
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-turf-green transition-colors"
                            />
                        </div>
                        <input
                            type="text"
                            placeholder="Subject"
                            className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-turf-green transition-colors"
                        />
                        <textarea
                            placeholder="Message"
                            rows={4}
                            className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-turf-green transition-colors resize-none"
                        />
                        <button
                            type="submit"
                            className="w-full bg-turf-green text-slate-900 font-bold py-3 rounded-lg hover:bg-green-400 transition-colors flex items-center justify-center gap-2"
                        >
                            Send Message <Send size={18} />
                        </button>
                    </motion.form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
