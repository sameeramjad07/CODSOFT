import { headerLogo } from '../assets/images';
import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // Import hamburger and close icons
import { navLinks } from '../constants';
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';

const Nav = () => {

    const [screenSize, setScreenSize] = useState(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };


    useEffect(() => {
        function handleResize() {
            const width = window.innerWidth;
            if (width < 768) {
                setScreenSize('mobile');
            } else if (width >= 768 && width < 1024) {
                setScreenSize('tablet');
            } else {
                setScreenSize('desktop');
            }
        }

        handleResize(); // Initial check
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div>
            {screenSize === "desktop" &&
                <nav className="bg-white shadow-md w-full">
                    <div className="container mx-auto flex justify-between items-center p-4">
                        <a href="/" className="text-primary">
                            <img src={headerLogo} alt="logo" width={130} height={29} />
                        </a>

                        <div className=" flex space-x-6  w-full justify-center">
                            <ul className="flex space-x-4">
                                {navLinks.map((item) => (
                                    <li key={item.label}>
                                        <a
                                            href={item.href}
                                            className="text-slate-grey text-2xl hover:text-neutral-500 transition duration-300 ml-16 font-bold"
                                        >
                                            {item.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </nav>
            }

            {screenSize === "tablet" && <nav className="bg-white shadow-md">
                <div className="container mx-auto flex justify-between items-center p-4">
                    <a href="/" className="text-primary">
                        <img src={headerLogo} alt="logo" width={130} height={29} />
                    </a>

                    <div className="hidden md:flex space-x-6">
                        <ul className="flex space-x-4">
                            {navLinks.map((item) => (
                                <li key={item.label}>
                                    <a
                                        href={item.href}
                                        className="text-slate-grey font-bold text-xl hover:text-neutral-600 transition duration-300"
                                    >
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>
            }

            {screenSize === "mobile" &&
                <nav className="bg-white shadow-md">
                    <div className="container mx-auto flex justify-between items-center p-4">
                        <a href="/" className="text-primary">
                            <img src={headerLogo} alt="logo" width={130} height={29} />
                        </a>
                        <div className="" onClick={() => handleMenuToggle()}>
                            <button className="p-2" >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    className="h-6 w-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            </button>
                        </div>

                        {isMenuOpen && (
                            <div id="men" className="transition-opacity duration-1000 ease-in-out block absolute top-14 right-0 mt-2 p-2 space-y-2 bg-white w-40 h-64 z-50 border shadow-lg">
                                <ul className='flex-col h-full w-full justify-around rounded-xl '>
                                {navLinks.map((item) => (
                                <li key={item.label} className='p-2 hover:bg-slate-100 rounded-lg'>
                                    <a  
                                        href={item.href}
                                        className="text-slate-grey font-bold text-xl hover:text-neutral-600 transition duration-300"
                                    >
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </nav>

            }


        </div>
    );
};

export default Nav;
