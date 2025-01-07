import React from 'react';
import logo from '/src/assets/f1.png';

const Footer = () => {
    return (
        <footer className="bg-[#28282B] text-white py-6 mt-12">
            <div className="container mx-auto text-center">
                <div className="mb-4">
                    <img
                        src={logo}
                        alt="Formula 1 Logo"
                        className="h-[60px] mx-auto"
                    />
                </div>

                <div className="mb-6">
                    <ul className="flex justify-center space-x-6">
                        <li>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Contact</a>
                        </li>
                        <li>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Terms of Service</a>
                        </li>
                    </ul>
                </div>

                <div className="text-gray-400 text-sm">
                    <p>&copy; {new Date().getFullYear()} Formula 1. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
