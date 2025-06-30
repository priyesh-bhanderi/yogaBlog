import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import logo from '../assets/logo.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const headerList = [
    { name: "Home", link: "/" },
    { name: "Programmes", link: "/programmes" },
    { name: "Services", link: "/services" },
    { name: "Blog", link: "/blog" },
    { name: "About", link: "/about" },
    { name: "Contact", link: "/contact" },
    { name: "Login", link: "/login" },
  ];

  return (
    <header className="bg-white shadow p-4">
      <div className="flex justify-between items-center px-4">
        <Link to='/'>
          <img src={logo} alt="logo" className="h-12" />
        </Link>

        <nav className="hidden md:flex space-x-6 text-gray-700 font-medium">
          {headerList.map((item, i) => (
            <Link key={i} to={item.link} className="hover:text-blue-600">
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-2xl">
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {isOpen && (
        <nav className="md:hidden flex flex-col mt-4 space-y-2 px-4 text-gray-700 font-medium">
          {headerList.map((item, i) => (
            <Link
              key={i}
              to={item.link}
              className="block py-2 border-b border-gray-200 hover:text-blue-600"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
