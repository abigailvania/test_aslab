import React from 'react';
import { Link } from 'react-router-dom';
import logo from '/src/assets/f1.png';

const Navbar = () => {
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Match', path: '/match' },
    { name: 'Driver', path: '/driver' },
    { name: 'Constructor', path: '/constructor' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="bg-[#28282B] p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Logo" className="h-[25px]" />
        </Link>
        <ul className="flex space-x-6 text-white">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link to={item.path} className="hover:text-blue-500">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
