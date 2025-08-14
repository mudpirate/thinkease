"use client";

import Link from "next/link";
import { useState } from "react";
import { FaBrain } from "react-icons/fa";
import { IoMenu, IoClose } from "react-icons/io5";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Sessions", href: "/sessions" },
    { name: "Journal", href: "/journal" },
  ];

  const navLinksMob = [
    { name: "Home", href: "/" },
    { name: "Sessions", href: "/sessions" },
    { name: "Journal", href: "/journal" },

    { name: "Sign In", href: "/signin" },
  ];

  return (
    <nav className="absolute top-0 left-0 w-full z-20">
      <div className="max-w-7xl mx-auto px-2  ">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link
            href="/"
            className="flex text-white items-center  flex-1 gap-2 font-bold text-2xl"
          >
            <FaBrain />
            ThinkEase
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex md:justify-evenly  md:items-center md:flex-1 ">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="hover:text-gray-200 text-lg   text-white transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden  md:flex justify-end items-center md:flex-1 ">
            <button className="rounded-r-full rounded-l-full px-5  py-2 text-black bg-white">
              Sign In
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white text-2xl"
          >
            <IoMenu />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden h-[80vh]  backdrop-blur-md">
          <div className="px-4 py-15 space-y-4">
            {navLinksMob.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block   text-white border-b   px-3 py-2 transition"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
