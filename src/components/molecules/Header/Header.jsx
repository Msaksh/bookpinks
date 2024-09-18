'use client'
import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const pages = [
    { name: 'HOME', route: '/' },
    { name: 'FEATURED BOOK', route: '/featured-books' },
    { name: 'FREE BOOK', route: '/free-book' },
    { name: 'ALL BOOKS', route: '/all-books' },
    { name: 'BLOG', route: '/blog' },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="sticky top-0 bg-white shadow-md z-50">
      <div className="container mx-auto px-4 py-2">
        <div className="flex justify-between items-center">
          <div className="w-40">
            <img src="/logo/book-pinks-high-logo-min.webp" alt="logo" className="w-full" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            {pages.map(({ name, route }) => (
              <Link
                key={name}
                href={route}
                className={`text-gray-800 hover:text-pink-500 transition-colors duration-300 pb-2 ${pathname === route
                  ? 'border-b-2 border-pink-500 text-pink-500 font-semibold'
                  : 'hover:border-b-2 hover:border-pink-500'
                  }`}
              >
                {name}
              </Link>
            ))}
          </nav>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-800">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          <Link href="/service" className="hidden md:block">
            <button className="bg-white text-pink-500 border border-pink-500 rounded px-4 py-2 text-sm font-semibold hover:bg-pink-500 hover:text-white transition-colors duration-300">
              FOR AUTHORS
            </button>
          </Link>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            {pages.map(({ name, route }) => (
              <Link
                key={name}
                href={route}
                className={`block py-2 text-gray-800 ${pathname === route ? 'text-pink-500 font-semibold' : ''
                  }`}
                onClick={toggleMenu}
              >
                {name}
              </Link>
            ))}
            <Link href="/service" onClick={toggleMenu}>
              <button className="mt-4 w-full bg-pink-500 text-white rounded px-4 py-2 text-sm font-semibold hover:bg-pink-600 transition-colors duration-300">
                FOR AUTHORS
              </button>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;