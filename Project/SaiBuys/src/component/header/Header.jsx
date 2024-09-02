import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    useEffect(() => {
        const menuButton = document.getElementById('menu-button');
        const mobileMenu = document.getElementById('mobile-menu');

        menuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        return () => {
            menuButton.removeEventListener('click', () => {
                mobileMenu.classList.toggle('hidden');
            });
        };
    }, []);

    const navigate = useNavigate();

    const handleHomeClick = () => {
        navigate('/home');
    };

    const navigate1 = useNavigate();

    const handleProductsClick = () => {
        navigate1('/products');
    };

    const navigate2 = useNavigate();

    const handleAboutUsClick = () => {
        navigate2('/home');
    };

    const navigate3 = useNavigate();

    const handleContactUsClick = () => {
        navigate3('/home');
    };

    return (
        <header className="bg-gray-800 text-white p-4 fixed top-0 w-full z-50">
            <div className="container mx-auto flex justify-between items-center">
                <a href="#home" onClick={handleHomeClick} className="text-xl font-bold hover:bg-gray-700 rounded px-3 py-2">SaiBuys</a>
                <nav className="hidden md:flex space-x-4">
                    <a href="#home" onClick={handleHomeClick} className="px-3 py-2 hover:bg-gray-700 rounded">Home</a>
                    <a href="#products" onClick={handleProductsClick} className="px-3 py-2 hover:bg-gray-700 rounded">Products</a>
                    <a href="#about" onClick={handleAboutUsClick} className="px-3 py-2 hover:bg-gray-700 rounded">About Us</a>
                    <a href="#services"  className="px-3 py-2 hover:bg-gray-700 rounded">Services</a>
                    <a href="#contact" onClick={handleContactUsClick} className="px-3 py-2 hover:bg-gray-700 rounded">Contact Us</a>
                </nav>
                <div className="md:hidden">
                    <button id="menu-button" className="text-white focus:outline-none">
                        {/* <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg> */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-align-justify"><line x1="3" x2="21" y1="6" y2="6" /><line x1="3" x2="21" y1="12" y2="12" /><line x1="3" x2="21" y1="18" y2="18" /></svg>
                    </button>
                </div>
            </div>
            <nav id="mobile-menu"  className="md:hidden bg-gray-800 hidden">
                <a href="#home" onClick={handleHomeClick} className="block px-4 py-2 hover:bg-gray-700">Home</a>
                <a href="#products" onClick={handleProductsClick} className="block px-4 py-2 hover:bg-gray-700">Products</a>
                <a href="#about" onClick={handleAboutUsClick} className="block px-4 py-2 hover:bg-gray-700">About Us</a>
                <a href="#services"  className="block px-4 py-2 hover:bg-gray-700">Services</a>
                <a href="#contact" onClick={handleContactUsClick} className="block px-4 py-2 hover:bg-gray-700">Contact Us</a>
            </nav>
        </header>
    );
};

export default Header;