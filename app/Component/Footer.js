import React from 'react';


const Footer = () => {
    return (
        <footer className="bg-[#FFF8F2] text-gray-700 py-12 mt-12 font-sans">
            {/* <div className="max-w-6xl mx-auto flex flex-wrap justify-between px-8"> */}
            <div className="max-w-6xl mx-auto flex flex-wrap justify-between px-8">
                <div className="flex-1 min-w-[200px] mb-8 pr-8">
                    <h3 className="text-orange-500 mb-4 text-xl font-bold">Little Adventures</h3>
                    <p>Creating memorable experiences for children through engaging programs and a nurturing environment.</p>
                    <div className="flex space-x-4 mt-6">
                        <a
                            href="#"
                            aria-label="Facebook"
                            className="w-9 h-9 bg-orange-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition"
                        >
                            <i className="fa fa-facebook"></i>
                        </a>
                        <a
                            href="#"
                            aria-label="Instagram"
                            className="w-9 h-9 bg-orange-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition"
                        >
                            <i className="fa fa-instagram"></i>
                        </a>
                        <a
                            href="#"
                            aria-label="Twitter"
                            className="w-9 h-9 bg-orange-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition"
                        >
                            <i className="fa fa-twitter"></i>
                        </a>
                    </div>
                </div>

                <div className="flex-1 min-w-[200px] mb-8 pr-8">
                    <h4 className="text-gray-800 mb-4 text-lg font-semibold">Quick Links</h4>
                    <ul className="space-y-2">
                        {['Home', 'Location', 'Program', 'Contact', 'About', 'F&Q'].map((link) => (
                            <li key={link}>
                                <a href="#" className="text-gray-700 hover:text-orange-500 transition">
                                    {link}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="flex-1 min-w-[200px] mb-8 pr-8">
                    <h4 className="text-gray-800 mb-4 text-lg font-semibold">Contact Us</h4>
                    <p className="mb-2">
                        <i className="fa fa-map-marker text-orange-500 mr-2"></i> 162 Playground Ave, SW , Calgary, AB
                    </p>
                    <p className="mb-2">
                        <i className="fa fa-phone text-orange-500 mr-2"></i> (555) 123-4567
                    </p>
                    <p className="mb-2">
                        <i className="fa fa-envelope text-orange-500 mr-2"></i> info@littleadventures.com
                    </p>
                    <p>
                        <i className="fa fa-clock-o text-orange-500 mr-2"></i> Mon-Fri: 7:00 AM - 5:00 PM
                    </p>
                </div>

                <div className="flex-1 min-w-[200px] mb-8 pr-8">
                    <h4 className="text-gray-800 mb-4 text-lg font-semibold">Stay Updated</h4>
                    <p>Subscribe to our newsletter for program updates and special events.</p>
                    <form className="flex mt-4">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            required
                            className="flex-1 p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                        <button
                            type="submit"
                            className="bg-orange-500 text-white px-4 py-2 rounded-r-md hover:bg-orange-600 transition"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-8 pt-6 border-t border-gray-300 flex flex-wrap justify-between items-center">
                <p className="text-sm">&copy; 2025 Franny Day Home. All rights reserved.</p>
                <div className="flex space-x-6 mt-4 md:mt-0">
                    <a href="#" className="text-gray-700 hover:text-orange-500 transition">
                        Privacy Policy
                    </a>
                    <a href="#" className="text-gray-700 hover:text-orange-500 transition">
                        Terms of Service
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
 