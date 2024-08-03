import { useState } from 'react';
import { Link } from 'react-router-dom';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button
        className="flex items-center px-4 py-3 border rounded text-black border-black"
        onClick={toggleMenu}
      >
        <svg
          className="fill-current h-6 w-6"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0zM0 9h20v2H0zM0 15h20v2H0z" />
        </svg>
      </button>
      <div
         className={`fixed top-0 left-0 h-full bg-black shadow-xl transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out`}
        style={{ width: '21rem' }}
      >
        <button
          className="absolute top-4 right-4 text-black"
          onClick={toggleMenu}
        >
          <svg
            className="fill-current text-white h-6 w-6"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Close</title>
            <path d="M10 8.586l-4.95-4.95-1.414 1.414L8.586 10l-4.95 4.95 1.414 1.414L10 11.414l4.95 4.95 1.414-1.414L11.414 10l4.95-4.95-1.414-1.414L10 8.586z" />
          </svg>
        </button>
        <div className="mt-16">
          <Link
            to="/route1"
            className="block px-6 py-3 text-white hover:bg-brand-500 hover:text-brand-500"
            onClick={toggleMenu}
          >
            About
          </Link>
          <Link
            to="/route2"
           className="block px-6 py-3 text-white hover:bg-brand-500 hover:text-brand-500"
            onClick={toggleMenu}
          >
            Discover
          </Link>
          <Link
            to="/route3"
            className="block px-6 py-3 text-white hover:bg-brand-500 hover:text-brand-500"
            onClick={toggleMenu}
          >
            Projects
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HamburgerMenu;