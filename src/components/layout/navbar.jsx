"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

import bcm_logo from "../../../public/images/BMCLOGO.png";

import {
FaWhatsapp,
FaInstagram,
FaLinkedin,
FaFacebook,
FaPhoneAlt,
FaEnvelope,
FaTwitter,
} from "react-icons/fa";

function Navbar() {
const pathname = usePathname();

const number1 = "9315657003";
const number2 = "9670345227";
const email = "inquiry@brandscaremedia.com";
const phn = "https://wa.me/9315657003";

const isActive = (path) => pathname === path;

return ( <header className="w-full h-30 px-4 flex items-center justify-between bg-white shadow sticky z-50 top-0">
<Image
     className="mt-2 w-40 object-cover rounded-xl md:w-2xs h-27 hover:scale-105 transition-all duration-300 ease-in-out overflow-hidden"
     src={bcm_logo}
     alt="Brands Care Media Logo"
     priority
   />

  <ul className="hidden md:flex font-medium lg:space-x-8 lg:mt-0">
    <li>
      <Link
        href="/"
        className={`block py-2 pr-4 pl-3 duration-200 ${
          isActive("/")
            ? "text-B"
            : "text-grey-700"
        } lg:hover:bg-transparent lg:border-0 hover:text-O lg:p-0`}
      >
        Home
      </Link>
    </li>

    <li>
      <Link
        href="/about"
        className={`block py-2 pr-4 pl-3 duration-200 ${
          isActive("/about")
            ? "text-B"
            : "text-grey-700"
        } lg:hover:bg-transparent lg:border-0 hover:text-O lg:p-0`}
      >
        AboutUs
      </Link>
    </li>

    <li>
      <Link
        href="/portfolio"
        className={`block py-2 pr-4 pl-3 duration-200 ${
          isActive("/portfolio")
            ? "text-B"
            : "text-grey-700"
        } lg:hover:bg-transparent lg:border-0 hover:text-O lg:p-0`}
      >
        Portfolio
      </Link>
    </li>

    <li>
      <Link
        href="/ourservice"
        className={`block py-2 pr-4 pl-3 duration-200 ${
          isActive("/ourservice")
            ? "text-B"
            : "text-grey-700"
        } lg:hover:bg-transparent lg:border-0 hover:text-O lg:p-0`}
      >
        Our Services
      </Link>
    </li>

    <li>
      <Link
        href="/contact"
        className={`block py-2 pr-4 pl-3 duration-200 ${
          isActive("/contact")
            ? "text-B"
            : "text-grey-700"
        } lg:hover:bg-transparent lg:border-0 hover:text-O lg:p-0`}
      >
        Contact Us
      </Link>
    </li>
  </ul>

  <div className="mt-2">
    <a
      href="mailto:inquiry@brandscaremedia.com"
      className="flex items-center text-sm md:text-lg lg:text-xl text-B font-semibold transition-all duration-300 hover:text-O group"
    >
      <FaEnvelope className="w-4 h-4 mr-2 text-B group-hover:text-orange-600" />
      {email}
    </a>

    <a
      href="tel:+9315657003"
      className="flex items-center text-sm md:text-lg lg:text-xl text-B font-semibold transition-all duration-300 hover:text-O group"
    >
      <FaPhoneAlt className="w-4 h-4 mr-2 text-B group-hover:text-orange-600 animate-pulse" />
      {number1}
    </a>

    <a
      href="tel:+9670345227"
      className="flex items-center text-sm md:text-lg lg:text-xl text-B font-semibold transition-all duration-300 hover:text-O group"
    >
      <FaPhoneAlt className="w-4 h-4 mr-2 text-B group-hover:text-orange-600 animate-pulse" />
      {number2}
    </a>
  </div>

  <div className="absolute left-0 mt-8 flex flex-col md:flex-col gap-4 justify-center items-center top-[170px]">

    <motion.a
      href="https://www.instagram.com/brandscaremedia?igsh=MXduMW5kcXZ4d3d5ZA=="
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.1, y: -4 }}
      whileTap={{ scale: 0.95 }}
      className="flex items-center gap-2 text-4xl animate-pulse text-pink-600 hover:bg-pink-600 hover:text-white px-3 py-3 rounded-full"
    >
      <FaInstagram />
    </motion.a>

    <motion.a
      href="https://www.linkedin.com/company/110884823/admin/dashboard"
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.1, y: -4 }}
      whileTap={{ scale: 0.95 }}
      className="flex items-center gap-2 text-4xl animate-pulse text-blue-600 hover:text-white hover:bg-blue-600 px-3 py-3 rounded-full transition-colors"
    >
      <FaLinkedin />
    </motion.a>

    <motion.a
      href="https://www.facebook.com/share/1C7jkjSapM/?mibextid=wwXIfr"
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.1, y: -4 }}
      whileTap={{ scale: 0.95 }}
      className="flex items-center gap-2 text-4xl animate-pulse hover:text-white hover:bg-blue-700 text-blue-500 px-3 py-3 rounded-full transition-colors"
    >
      <FaFacebook />
    </motion.a>

    <motion.a
      href={phn}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.1, y: -4 }}
      whileTap={{ scale: 0.95 }}
      className="flex items-center gap-2 text-4xl animate-pulse hover:text-white hover:bg-green-500 text-green-500 px-3 py-3 rounded-full transition-colors"
    >
      <FaWhatsapp />
    </motion.a>

    <motion.a
      href="https://x.com/brandscaremedia?s=11%22"
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.1, y: -4 }}
      whileTap={{ scale: 0.95 }}
      className="flex items-center gap-2 text-4xl animate-pulse hover:text-white hover:bg-black text-black px-3 py-3 rounded-full transition-colors"
    >
      <FaTwitter />
    </motion.a>
  </div>
</header>

);
}

export default Navbar;
