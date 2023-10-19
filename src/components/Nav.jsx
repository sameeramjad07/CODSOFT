import { headerLogo } from '../assets/images';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // Import hamburger and close icons
import { navLinks } from '../constants';

const Nav = () => {
    const [hamburgerMenu, setHamburger] = useState(false);

    const toggleHamburger = () => {
        setHamburger(!hamburgerMenu);
    };
   
    const handleClick = (event) => {
          // Access the id of the clicked element using event.target.id
          const clickedElementId = event.target.id;
          console.log('Clicked element ID:', clickedElementId);
        };

    return (
        <header id='saad' className="px-4 py-4 sm:py-8 absolute top-0 left-0 right-0 z-10 bg-white" onClick={handleClick}>
            <nav className="container mx-auto flex justify-between items-center">
                <a href="/">
                    <img src={headerLogo} alt="logo" width={130} height={29} />
                </a>
                <div className="lg:hidden">
                    {hamburgerMenu ? (
                        <FaBars
                            className="text-2xl text-black cursor-pointer"
                            onClick={toggleHamburger}
                        />
                    ) : (
                        <FaBars
                            className="text-2xl text-black cursor-pointer"
                            onClick={toggleHamburger}
                        />
                    )}
                </div>
                <div className="md:hidden sm:hidden lg:flex ">
                    <ul className="lg:flex space-x-6 md:hidden sm:hidden">
                        {navLinks.map((item) => (
                            <li key={item.label}>
                                <a
                                    href={item.href}
                                    className="font-montserrat text-lg text-slate-grey hover:text-primary transition duration-300"
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
            {hamburgerMenu && (
                <div id='ham' className="bg-white max-w-sm h-screen z-50 fixed top-0 right-0 transition-transform transform translate-x-0 ease-in-out">
                    <ul className="py-12 px-4" id='ham'>
                        {navLinks.map((item) => (
                            <li key={item.label}>
                                <a
                                    href={item.href}
                                    className="block font-montserrat text-xl text-slate-grey py-3 hover:text-neutral-800"
                                    onClick={toggleHamburger}
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </header>
    );
};

export default Nav;
