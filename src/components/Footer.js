'use client'
import { useState, useEffect } from "react";

const Footer=() =>
{
        const [ currentYear, setCurrentYear ]=useState( new Date().getFullYear() );

        useEffect( () =>
        {
                const year=new Date().getFullYear();
                setCurrentYear( year );
        }, [] );

        return (
                <footer className="bg-blue-900 text-white py-10">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                                {/* Top Section with Branding and Social Media Icons */ }
                                <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                                        {/* Branding */ }
                                        <div className="flex items-center space-x-4">
                                                <img src="images/logo.png" alt="ComfNet Logo" className="h-10" /> {/* Replace /logo.png with the actual logo path */ }
                                        </div>
                                        {/* Social Media Icons */ }
                                        <div className="flex space-x-4">
                                                <a href="#" className="bg-white text-blue-900 rounded-full p-2 hover:bg-gray-200">
                                                        <i className="fab fa-twitter"></i>
                                                </a>
                                                <a href="#" className="bg-white text-blue-900 rounded-full p-2 hover:bg-gray-200">
                                                        <i className="text-black text-xl fab fa-facebook"></i>
                                                </a>
                                                <a href="#" className="bg-white text-blue-900 rounded-full p-2 hover:bg-gray-200">
                                                        <i className="fab fa-x"></i>
                                                </a>
                                                <a href="#" className="bg-white text-blue-900 rounded-full p-2 hover:bg-gray-200">
                                                        <i className="fab fa-instagram"></i>
                                                </a>
                                                <a href="#" className="bg-white text-blue-900 rounded-full p-2 hover:bg-gray-200">
                                                        <i className="fab fa-linkedin"></i>
                                                </a>
                                        </div>
                                </div>
                                {/* Main Content Section */ }
                                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                                        {/* Other sections */ }
                                        <div>
                                                <h3 className="font-bold text-lg mb-4">Our Offices</h3>
                                                <p>Kuhnkestr. 4, 24118 Kiel, Germany</p>
                                                <p>Kajen 10, 20459 Hamburg, Germany</p>
                                                <p className="mt-2 flex items-center">
                                                        <span className="material-icons mr-2">place</span> Branch Location
                                                </p>
                                        </div>
                                        {/* Quick Links */ }
                                        <div>
                                                <h3 className="font-bold text-lg mb-4">Quick Links</h3>
                                                <ul>
                                                        <li><a href="#" className="hover:underline">Home</a></li>
                                                        <li><a href="#" className="hover:underline">Services</a></li>
                                                        <li><a href="#" className="hover:underline">About Us</a></li>
                                                        <li><a href="#" className="hover:underline">Career</a></li>
                                                        <li><a href="#" className="hover:underline">Industries</a></li>
                                                </ul>
                                        </div>
                                        {/* Support */ }
                                        <div>
                                                <h3 className="font-bold text-lg mb-4">Support</h3>
                                                <ul>
                                                        <li><a href="#" className="hover:underline">Contact us</a></li>
                                                        <li><a href="#" className="hover:underline">Imprint</a></li>
                                                </ul>
                                        </div>
                                        {/* Lets Get Connected */ }
                                        <div>
                                                <h3 className="font-bold text-lg mb-4">Lets Get Connected</h3>
                                                <p>Email: <a href="mailto:info@comfnet.de" className="text-blue-300 hover:underline">info@comfnet.de</a></p>
                                                <p>Phone: <a href="tel:+49407163470" className="text-blue-300 hover:underline">+49 40 7163470</a></p>
                                                <form className="mt-4">
                                                        <input
                                                                type="email"
                                                                placeholder="Email"
                                                                className="w-full px-4 py-2 rounded-md text-black mb-2"
                                                        />
                                                        <button className="w-full bg-white text-blue-900 font-bold py-2 px-4 rounded-md hover:bg-gray-200">
                                                                Get your consultation - Free
                                                        </button>
                                                </form>
                                        </div>
                                </div>
                                {/* Bottom Section */ }
                                <div className="mt-10 border-t border-white/20 pt-6 text-center text-sm">
                                        <p>Copyright © { currentYear } ComfNet Solutions GmbH. All Rights Reserved.</p>
                                        <div className="mt-2 space-x-4">
                                                <a href="#" className="hover:underline">Terms of Use</a>
                                                <a href="#" className="hover:underline">Privacy Policy</a>
                                                <a href="#" className="hover:underline">Do Not Sell My Personal Information</a>
                                        </div>
                                </div>
                        </div>
                </footer>
        );
};

export default Footer;
