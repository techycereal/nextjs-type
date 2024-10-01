'use client';
import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface HeaderProps {
  color: string;
}

const Header: React.FC<HeaderProps> = ({ color }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsMenuOpen(true);
  };

  const handleMouseLeave = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="absolute top-0 left-0 right-0 bg-transparent z-10">
      <div className="flex justify-between items-center p-4">
        <div className={`text-${color} font-bold text-xl`}>
          <a href="/">Spa Company</a>
        </div>
        {/* Hamburger Button for Mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`text-${color} focus:outline-none`}
          >
            {/* Hamburger Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-4">
          <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <li>
              <button className={`text-${color} focus:outline-none`}>
                Services
              </button>
            </li>
            {/* Dropdown Menu */}
            {isMenuOpen && (
              <div className="absolute bg-white text-black shadow-lg rounded-lg transition-all duration-300 ease-in-out w-64">
                <ul className="p-2">
                  <li>
                    <a
                      className="p-1 hover:bg-gray-200 cursor-pointer md:text-sm"
                      href="/services/massage-therapy"
                    >
                      Massage Therapy
                    </a>
                  </li>
                  <li>
                    <a
                      className="p-1 hover:bg-gray-200 cursor-pointer md:text-sm"
                      href="/services/aromatherapy"
                    >
                      Aromatherapy
                    </a>
                  </li>
                  <li>
                    <a
                      className="p-1 hover:bg-gray-200 cursor-pointer md:text-sm"
                      href="/services/facial-treatments"
                    >
                      Facial Treatments
                    </a>
                  </li>
                  <li>
                    <a
                      className="p-1 hover:bg-gray-200 cursor-pointer md:text-sm"
                      href="/services/body-treatments"
                    >
                      Body Treatments
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>
          <li>
            <a href="/aboutus" className={`text-${color}`}>
              About Us
            </a>
          </li>
          <li>
            <a href="/locations" className={`text-${color}`}>
              Locations
            </a>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className={`md:hidden bg-gray-800 text-${color} p-4`}>
          <ul className="flex flex-col space-y-2">
            {/* Accordion for Services */}
            <Accordion type="single" collapsible>
              <AccordionItem value="services">
                <AccordionTrigger>Services</AccordionTrigger>
                <AccordionContent>
                  <ul className="flex flex-col space-y-1">
                    <li>
                      <a
                        href="/services/massage-therapy"
                        className="hover:text-gray-300"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Massage Therapy
                      </a>
                    </li>
                    <li>
                      <a
                        href="/services/facial-treatment"
                        className="hover:text-gray-300"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Facial Treatments
                      </a>
                    </li>
                    <li>
                      <a
                        href="/services/body-treatments"
                        className="hover:text-gray-300"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Body Treatments
                      </a>
                    </li>
                    <li>
                      <a
                        href="/services/manicure"
                        className="hover:text-gray-300"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Manicures & Pedicures
                      </a>
                    </li>
                    <li>
                      <a
                        href="/services/aromatherapy"
                        className="hover:text-gray-300"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Aromatherapy
                      </a>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <li>
              <a href="/aboutus" onClick={() => setIsMenuOpen(false)}>
                About Us
              </a>
            </li>
            <li>
              <a href="/location" onClick={() => setIsMenuOpen(false)}>
                Location
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Header;
