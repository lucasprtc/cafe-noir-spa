"use client";
// components/FindUs.tsx

import Button from "../Buttons";
import { useState } from "react";

export default function Contact() {
    const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Ajoutez ici votre logique d'envoi
  };

  return (
    <section id="contact" className="flex flex-col md:gap-9 md:flex-row md:py-[50px] md:px-8 ">
        <div className="h-full md:w-[50%] flex flex-col justify-center space-y-3 container-grid pb-9 bg-dark-blue md:py-6 lg:py-10 md:px-[46px] md:rounded">
            <img src="/About/ContactUs.svg" alt="" className="object-cover w-full" />
            <img src="/About/ContactUs.svg" alt="" className="object-cover w-full" />
            <img src="/About/ContactUs.svg" alt="" className="object-cover w-full" />
        </div>
        <form onSubmit={handleSubmit} className="space-y-2 md:w-[50%] px-4 md:px-0 grid-col-6 py-9 md:py-0 bg-almond">
            <div className="col-span-6 space-y-2 flex flex-col h-full">
                <div className="">
                        <label htmlFor="name" className="block font-secondary text-lg text-dark-blue">
                        Name
                        </label>
                        <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        className="w-full px-4 py-4 md:py-3 border-3 border-light-blue rounded font-primary text-lg text-dark-blue leading-3 focus:border-light-orange focus:outline-none placeholder-dark-blue/60"
                        required
                        />
                </div>
                <div className="">
                        <label htmlFor="email" className="block font-secondary text-lg text-dark-blue">
                        Email
                        </label>
                        <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        className="w-full px-4 py-4 md:py-3 border-3 border-light-blue rounded font-primary text-lg text-dark-blue leading-3 focus:border-light-orange focus:outline-none placeholder-dark-blue/60"
                        required
                        />
                </div>
                <div className="">
                    <label htmlFor="message" className="block font-secondary text-lg text-dark-blue">
                    Message
                    </label>
                    <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Enter your message"
                    className="w-full px-4 py-4 border-3 border-light-blue rounded font-primary text-lg text-dark-blue  focus:border-light-orange focus:outline-none placeholder-dark-blue/60 resize-none"
                    required
                    />
                </div>
                <div className="flex justify-end">
                    <Button submit={true} text="Send Message" href="#" color="lightorange" />
                </div>
            </div>
        </form>
    </section>
  );
}
