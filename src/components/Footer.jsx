import React from 'react';

const Footer = () => {
    return (
        <footer className="text-black font-monasans py-4 mt-8">
            <p className="text-sm text-center md:text-left mb-2">
                © {new Date().getFullYear()} <span className="font-semibold">DarbanAI</span>. All rights reserved.
            </p>
        </footer>
    );
};

export default Footer;
