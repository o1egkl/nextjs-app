'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/generate', label: 'Generate' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <>
      <nav className="bg-blue-100 shadow-md fixed w-full z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <Link href="/" className="flex-shrink-0 flex items-center">
                <span className="text-2xl font-bold text-gray-800">Images by Oleg</span>
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`inline-flex items-center px-1 pt-1 border-b-2 text-base transition-all duration-200 ${
                    pathname === item.href
                      ? 'border-indigo-500 text-gray-900 font-bold'
                      : 'border-transparent text-gray-700 hover:border-gray-300 hover:text-gray-900 hover:font-bold'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            {/* This div is hidden on small screens and contains the menu toggle button */}
            <div className="-mr-2 flex items-center sm:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-800 hover:font-bold focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 transition-all duration-200"
              >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="sm:hidden">
            <div className="pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block pl-3 pr-4 py-2 border-l-4 text-base transition-all duration-200 ${
                    pathname === item.href
                      ? 'bg-indigo-50 border-indigo-500 text-gray-900 font-bold'
                      : 'border-transparent text-gray-700 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-900 hover:font-bold'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
      <div className="h-20 sm:h-24 md:h-32 lg:h-40"></div> {/* Increased height for mobile */}
    </>
  );
}