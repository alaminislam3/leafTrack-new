'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/allplant', label: 'All Plant' },
    { href: '/addplant', label: 'Add plant' },
    { href: '/myplant', label: 'My plant' },
  ];

  const isActive = (href) => {
    return pathname === href;
  };

  return (
    <nav className="bg-green-300 px-4 md:px-8 py-4">
      <div className="w-full max-w-7xl mx-auto">
        <div className="flex items-center justify-between bg-white rounded-full px-4 md:px-8 py-3 shadow-lg">
          {/* Logo */}
          <div className="flex items-center font-bold text-lg text-gray-800 min-w-fit">
            <Link href={'/'}>
            <span className="text-green-500 text-xl">🍃</span>
            <span className="ml-1 text-sm md:text-lg">LeafTrack</span>
            </Link>
          </div>

          {/* Center Menu Items - Desktop */}
          <div className="hidden md:flex items-center gap-8 flex-1 justify-center">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`transition font-medium ${
                  isActive(link.href)
                    ? 'text-green-500 underline decoration-2 underline-offset-4'
                    : 'text-gray-700 hover:text-gray-900'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right Side Buttons - Desktop */}
          <div className="hidden md:flex items-center gap-3 min-w-fit">
            <Link
              href="/signin"
              className="text-gray-700 hover:text-gray-900 transition font-medium"
            >
              Sign in
            </Link>

            <Link
              href="/book-demo"
              className="px-5 py-2 bg-green-400 text-white rounded-full hover:bg-green-500 transition font-medium"
            >
              Book Demo
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex items-center"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <X size={24} className="text-gray-700" />
            ) : (
              <Menu size={24} className="text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white rounded-lg shadow-lg mt-3 p-4">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`transition font-medium text-base ${
                    isActive(link.href)
                      ? 'text-green-500 border-l-4 border-green-500 pl-2'
                      : 'text-gray-700 hover:text-gray-900'
                  }`}
                >
                  {link.label}
                </Link>
              ))}

              <hr className="my-2" />

              <Link
                href="/signin"
                onClick={() => setMenuOpen(false)}
                className="text-gray-700 hover:text-gray-900 transition font-medium"
              >
                Sign in
              </Link>

              
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}