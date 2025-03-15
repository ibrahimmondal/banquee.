"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full border-b bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-teal-600">
              banquee<span className="text-teal-400">.</span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-teal-600 font-medium">Features</a>
            <div className="relative group">
              <a href="#" className="flex items-center text-gray-700 hover:text-teal-600 font-medium">
                Compare
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
              {/* Optional: Dropdown menu */}
            </div>
            <Link href="/about" className="text-gray-700 hover:text-teal-600 font-medium">Support</Link>
            <div className="relative group">
              <Link href="/blog" className="flex items-center text-gray-700 hover:text-teal-600 font-medium">
                Blogs
                
              </Link>
            </div>
          </nav>

          {/* Right actions */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="#" className="text-teal-600 font-medium hover:text-teal-800">Login</a>
            <a
              href="#"
              className="bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600 transition-all"
            >
              Open Account
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t">
          <nav className="flex flex-col space-y-2 px-4 py-4">
            <a href="#" className="text-gray-700 hover:text-teal-600 font-medium">Features</a>
            <a href="#" className="text-gray-700 hover:text-teal-600 font-medium">Compare</a>
            <a href="#" className="text-gray-700 hover:text-teal-600 font-medium">Support</a>
            <a href="#" className="text-gray-700 hover:text-teal-600 font-medium">Blog</a>
            <a href="#" className="text-teal-600 font-medium hover:text-teal-800">Login</a>
            <a
              href="#"
              className="bg-teal-500 text-white px-4 py-2 rounded-md text-center hover:bg-teal-600 transition-all"
            >
              Open Account
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
