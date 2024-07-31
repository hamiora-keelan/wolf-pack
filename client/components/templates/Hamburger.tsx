import { useState } from 'react';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        className="flex items-center px-4 py-3 border rounded text-brand-500 border-brand-500"
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
        className={`${
          isOpen ? 'block' : 'hidden'
        } absolute right-0 mt-2 py-2 w-56 bg-white rounded-lg shadow-xl`}
      >
        <a
          href="#"
          className="block px-6 py-3 text-brand-500 hover:bg-brand-500 hover:text-white"
        >
          Menu Item 1
        </a>
        <a
          href="#"
          className="block px-6 py-3 text-brand-500 hover:bg-brand-500 hover:text-white"
        >
          Menu Item 2
        </a>
        <a
          href="#"
          className="block px-6 py-3 text-brand-500 hover:bg-brand-500 hover:text-white"
        >
          Menu Item 3
        </a>
      </div>
    </div>
  );
};

export default HamburgerMenu;