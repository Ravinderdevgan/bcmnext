"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import {
  FaInstagram,
  FaLinkedin,
  FaFacebook,
  FaYoutube,
  FaHome,
  FaInfoCircle,
  FaPhoneAlt,
  FaServicestack,
  FaBriefcase,
} from "react-icons/fa";

const kw = [
  "Performance Marketing",
  "Online Reputation Management (ORM)",
  "Social media marketing",
  "Marketing Automation",
  "Twitter Trends",
  "SEO",
  "Influencer Marketing",
  "Social media manage",
  "Instagram Marketing",
  "Facebook Marketing",
  "Twitter Marketing",
  "Youtube marketing",
  "Linkedin Marketing",
  "Meme marketing",
  "UGC Creation",
  "Reel Promotion",
];

function Footer() {
  const pathname = usePathname();



  const [keyboardOpen, setKeyboardOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const visualViewport = window.visualViewport;

    if (!visualViewport) return;

    const checkKeyboard = () => {
      const heightDifference =
        window.innerHeight - visualViewport.height;

      // Keyboard generally creates a large viewport difference
      setKeyboardOpen(heightDifference > 150);
    };

    checkKeyboard();

    visualViewport.addEventListener(
      "resize",
      checkKeyboard
    );

    return () => {
      visualViewport.removeEventListener(
        "resize",
        checkKeyboard
      );
    };
  }, []);

  return (
    <>
    

      <footer className="hidden bg-gray-900 py-12 text-gray-200 md:block">
        <div className="container mx-auto flex flex-col justify-between gap-3 px-6 md:flex-row md:px-12">

          {/* BRAND */}
          <div className="flex-1">
            <h2 className="mb-2 text-2xl font-bold text-white">
              Brands Care Media
            </h2>

            <p className="mb-6 max-w-xs text-gray-200">
              Strategy. Care. Growth. Guaranteed.
            </p>

            <h3 className="mb-2 text-xl font-semibold text-white">
              Get in Touch
            </h3>

            <div className="mb-4 space-y-2">

              <a
                href="mailto:inquiry@brandscaremedia.com"
                className="flex items-center text-sm text-gray-300 transition-colors hover:text-O"
              >
                <span className="ml-1">
                  inquiry@brandscaremedia.com
                </span>
              </a>

              <a
                href="tel:+919315657003"
                className="flex items-center text-sm text-gray-300 transition-colors hover:text-O"
              >
                <span className="ml-1">
                  +91 9315657003
                </span>
              </a>

              <a
                href="tel:+919670345227"
                className="flex items-center text-sm text-gray-300 transition-colors hover:text-O"
              >
                <span className="ml-1">
                  +91 9670345227
                </span>
              </a>

            </div>
          </div>



          <div className="flex-1">
            <h3 className="mb-3 text-2xl font-semibold text-white">
              Quick Links
            </h3>

            <ul className="space-y-3">

              <li>
                <Link
                  href="/"
                  className="transition-colors hover:font-semibold hover:text-orange-500 hover:underline"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/about"
                  className="transition-colors hover:font-semibold hover:text-orange-500 hover:underline"
                >
                  AboutUs
                </Link>
              </li>

              <li>
                <Link
                  href="/portfolio"
                  className="transition-colors hover:font-semibold hover:text-orange-500 hover:underline"
                >
                  Portfolio
                </Link>
              </li>

              <li>
                <Link
                  href="/ourservice"
                  className="transition-colors hover:font-semibold hover:text-orange-500 hover:underline"
                >
                  Our Services
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="transition-colors hover:font-semibold hover:text-orange-500 hover:underline"
                >
                  Contact Us
                </Link>
              </li>

            </ul>
          </div>



          <div className="flex-1">

            <h3 className="mb-3 w-35 text-2xl font-semibold text-white">
              Follow Us
            </h3>

            <div className="flex w-10 space-x-8 text-2xl">

              <a
                href="https://www.instagram.com/brandscaremedia?igsh=MXduMW5kcXZ4d3d5ZA=="
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="transition-all duration-300 ease-in hover:text-pink-500"
              >
                <FaInstagram />
              </a>

              <a
                href="https://www.linkedin.com/company/110884823/admin/dashboard/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="transition-all duration-300 ease-in hover:text-blue-500"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://www.facebook.com/share/1C7jkjSapM/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="transition-all duration-300 ease-in hover:text-blue-700"
              >
                <FaFacebook />
              </a>

              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="transition-all duration-300 ease-in hover:text-red-600"
              >
                <FaYoutube />
              </a>

            </div>

          </div>



          <div className="flex-1">

            <h2 className="mb-2 text-2xl font-bold text-white">
              Address
            </h2>

            <div className="flex items-center text-white">

              <div className="ml-2">

                <span className="font-semibold text-O">
                  Lucknow Office:
                </span>

                <p className="cursor-pointer text-sm text-gray-300">
                  Gomti Nagar,
                  <br />
                  Lucknow, Pincode : 226010
                </p>

              </div>

            </div>

            <div className="flex items-center text-white">

              <div className="ml-2">

                <span className="font-semibold text-O">
                  New Delhi Office:
                </span>

                <p className="cursor-pointer text-sm text-gray-300">
                  Janakpuri,
                  <br />
                  New Delhi, Pincode : 110058
                </p>

              </div>

            </div>

          </div>

        </div>



        <div className="mt-5 border-t border-gray-50">

          <ul className="mt-5 flex flex-wrap items-center justify-center gap-3">

            {kw.map((item, index) => (
              <li
                className="cursor-default rounded-sm hover:font-semibold hover:text-orange-500"
                key={index}
              >
                {item}
              </li>
            ))}

          </ul>

        </div>



        <div className="mt-12 flex justify-center border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
          © 2025 Brands Care Media. All Rights Reserved.
        </div>

      </footer>


    

      {!keyboardOpen && (
        <footer
          className="
            fixed
            inset-x-0
            bottom-0
            z-50
            bg-gray-900
            text-white
            md:hidden
          "
          style={{
            paddingBottom:
              "env(safe-area-inset-bottom)",
          }}
        >

          <nav
            aria-label="Mobile navigation"
            className="flex h-16 items-center justify-center"
          >

            <ul className="flex w-full items-center justify-center gap-7">


              <li>
                <Link
                  href="/"
                  aria-label="Home"
                  className={`
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-full
                    text-xl
                    transition-all
                    duration-200
                    ${
                      pathname === "/"
                        ? "text-O animate-wiggle"
                        : "text-gray-300"
                    }
                  `}
                >
                  <FaHome />
                </Link>
              </li>



              <li>
                <Link
                  href="/about"
                  aria-label="About Us"
                  className={`
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-full
                    text-xl
                    transition-all
                    duration-200
                    ${
                      pathname === "/about"
                        ? "text-O animate-wiggle"
                        : "text-gray-300"
                    }
                  `}
                >
                  <FaInfoCircle />
                </Link>
              </li>



              <li>
                <Link
                  href="/portfolio"
                  aria-label="Portfolio"
                  className={`
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-full
                    text-xl
                    transition-all
                    duration-200
                    ${
                      pathname === "/portfolio"
                        ? "text-O animate-wiggle"
                        : "text-gray-300"
                    }
                  `}
                >
                  <FaBriefcase />
                </Link>
              </li>



              <li>
                <Link
                  href="/ourservice"
                  aria-label="Our Services"
                  className={`
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-full
                    text-xl
                    transition-all
                    duration-200
                    ${
                      pathname === "/ourservice"
                        ? "text-O animate-wiggle"
                        : "text-gray-300"
                    }
                  `}
                >
                  <FaServicestack />
                </Link>
              </li>



              <li>
                <Link
                  href="/contact"
                  aria-label="Contact Us"
                  className={`
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-full
                    text-xl
                    transition-all
                    duration-200
                    ${
                      pathname === "/contact"
                        ? "text-O animate-wiggle"
                        : "text-gray-300"
                    }
                  `}
                >
                  <FaPhoneAlt />
                </Link>
              </li>

            </ul>

          </nav>

        </footer>
      )}
    </>
  );
}

export default Footer;