'use client'

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import ServiceSection from "../components/servicesection";
import { IoCall } from "react-icons/io5";
import { FaLocationDot, FaClock } from "react-icons/fa6";
import { motion } from "framer-motion";
import { useForm } from 'react-hook-form';

function ContactPage() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data: any) => {
        console.log(data);
        // Add your form submission logic here
    };

    return (
        <>
            <section className="Hero_Section w-full h-[320px] flex flex-col justify-center items-center bg-gray-50" style={{ backgroundImage: 'url(banner2.png)' }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Contact Us</h2>
                    <Breadcrumb className="text-gray-600">
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/" className="hover:text-primary">Home</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator className="text-gray-400" />
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/contact" className="text-primary">Contact</BreadcrumbLink>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </motion.div>
            </section>

            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get in touch with us</h2>
                    <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
                        Have questions about our products or services? We're here to help! Reach out to our friendly team for assistance.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Contact Information */}
                    <motion.div
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        className="space-y-8 bg-white p-8 rounded-xl shadow-lg"
                    >
                        <div className="flex items-start space-x-4">
                            <div className="bg-primary/10 p-3 rounded-full">
                                <FaLocationDot className="text-2xl text-primary" />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-2">Our Office</h3>
                                <p className="text-gray-600">236 5th SE Avenue<br />New York NY10000, United States</p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="bg-primary/10 p-3 rounded-full">
                                <IoCall className="text-2xl text-primary" />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-2">Contact Numbers</h3>
                                <p className="text-gray-600">+1 (555) 123-4567</p>
                                <p className="text-gray-600">+1 (555) 890-1234</p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="bg-primary/10 p-3 rounded-full">
                                <FaClock className="text-2xl text-primary" />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-2">Working Hours</h3>
                                <p className="text-gray-600">Mon-Fri: 9:00 AM - 10:00 PM</p>
                                <p className="text-gray-600">Sat-Sun: 9:00 AM - 9:00 PM</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.form
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        onSubmit={handleSubmit(onSubmit)}
                        className="bg-white p-8 rounded-xl shadow-lg space-y-6"
                    >
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                Full Name
                            </label>
                            <input
                                {...register("name", { required: true })}
                                type="text"
                                id="name"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                placeholder="John Doe"
                            />
                            {errors.name && <span className="text-sm text-red-500">This field is required</span>}
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                Email Address
                            </label>
                            <input
                                {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                                type="email"
                                id="email"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                placeholder="john@example.com"
                            />
                            {errors.email && <span className="text-sm text-red-500">Valid email is required</span>}
                        </div>

                        <div>
                            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                                Subject
                            </label>
                            <input
                                {...register("subject", { required: true })}
                                type="text"
                                id="subject"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                placeholder="How can we help?"
                            />
                            {errors.subject && <span className="text-sm text-red-500">Subject is required</span>}
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                Message
                            </label>
                            <textarea
                                {...register("message", { required: true })}
                                id="message"
                                rows={4}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                placeholder="Type your message here..."
                            ></textarea>
                            {errors.message && <span className="text-sm text-red-500">Message is required</span>}
                        </div>

                        <button
                            className="w-full py-4 bg-primary hover:bg-primary-dark text-white font-semibold rounded-lg transition-colors"
                            type="submit"
                        >Send Message</button>
                    </motion.form>
                </div>
            </section>

            {/* Embedded Map */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
                <div className="rounded-xl overflow-hidden shadow-lg">
                    <iframe
                        title="Office Location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.183948771218!2d-73.98542828459313!3d40.74844047932793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b30eac9f%3A0xaca05ca48ab5ac2c!2s350%205th%20Ave%2C%20New%20York%2C%20NY%2010118%2C%20USA!5e0!3m2!1sen!2s!4v1623862346547!5m2!1sen!2s"
                        width="100%"
                        height="400"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                    ></iframe>
                </div>
            </div>

            <ServiceSection />
        </>
    );
};

export default ContactPage;