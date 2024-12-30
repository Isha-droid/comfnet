"use client"
import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const Contact: React.FC = () => {
    const [phone, setPhone] = useState("");

    return (
        <section
            className="relative p-4 text-white min-h-screen flex items-center justify-center bg-cover bg-center"
            style={{
                backgroundImage: "url('/free_contact.png')"
            }}
        >
            <div className="w-full max-w-4xl">
                <h2 className="text-3xl font-bold mb-6 text-left">Contact Us</h2>
                <form className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    <div className="flex flex-col">
                        <label className="mb-2 text-sm">Name*</label>
                        <input
                            type="text"
                            className="bg-transparent border-b border-gray-300 text-white p-2 focus:outline-none focus:border-yellow-400"
                            placeholder="Enter your name"
                        />
                    </div>
                  
                    <div className="flex flex-col">
                        <label className="mb-2 text-sm">Phone*</label>
                        <PhoneInput
                            country={"us"}
                            value={phone}
                            onChange={(phone) => setPhone(phone)}
                            inputStyle={{
                                background: "transparent",
                                border: "none",
                                borderBottom: "1px solid #ccc",
                                color: "white",
                            }}
                            buttonStyle={{
                                background: "transparent",
                                border: "none",
                                borderBottom: "1px solid #ccc",
                            }}
                        />
                    </div>
                   
                    <div className="flex flex-col">
                        <label className="mb-2 text-sm">Email address*</label>
                        <input
                            type="email"
                            className="bg-transparent border-b border-gray-300 text-white p-2 focus:outline-none focus:border-yellow-400"
                            placeholder="Enter your email"
                        />
                    </div>
                   
                    <div className="flex flex-col">
                        <label className="mb-2 text-sm">Total experience (years)*</label>
                        <input
                            type="number"
                            className="bg-transparent border-b border-gray-300 text-white p-2 focus:outline-none focus:border-yellow-400"
                            placeholder="Enter your experience"
                        />
                    </div>
                
                    <div className="md:col-span-2">
                        <button
                            type="submit"
                            className="w-full py-3 bg-yellow-400 text-gray-900 font-bold rounded-lg hover:bg-yellow-500 transition-all"
                        >
                            Submit application
                        </button>
                    </div>
                </form>
               
                <p className="mt-4 text-sm text-gray-300">
                    By submitting this form, you consent to us contacting you regarding
                    your inquiry and confirm that you agree to our terms of use and
                    privacy policy.
                </p>
            </div>
        </section>
    );
};

export default Contact;