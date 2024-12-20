import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { AiOutlineMenuFold } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [navbarHeight, setNavbarHeight] = useState(100); // Initial height is 100px
  const [logoSize, setLogoSize] = useState(60); // Initial logo size in pixels
  const [isSearchOpen, setIsSearchOpen] = useState(false); // State for controlling search bar visibility

  // Function to track scroll position and adjust navbar height and logo size
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setNavbarHeight(50); // Reduce navbar height when scrolled down
      setLogoSize(40); // Shrink the logo when scrolled down
    } else {
      setNavbarHeight(100); // Reset navbar height when at the top
      setLogoSize(60); // Reset logo size when at the top
    }
  };

  useEffect(() => {
    // Check if the window object is available (only in client-side)
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
      
      // Cleanup event listener on unmount
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []); // Empty dependency array to run only once after mount (client-side)

  // Function to close mobile menu when any link is clicked
  const handleLinkClick = () => {
    setIsMobileMenuOpen(false); // Close the menu
  };

  return (
    <>
      <nav
        className="bg-white p-4 transition-all duration-300 fixed w-full z-50 top-0 left-0"
        style={{ height: `${navbarHeight}px` }} // Dynamic height
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center h-full">
          {/* Logo */}
          <Link to="/" className="text-black text-2xl font-bold flex items-center">
            <img
              src="../../../public/2.jpg" // Logo source
              alt="main logo"
              className="transition-all duration-300"
              style={{ height: `${logoSize}px` }} // Dynamic logo size based on scroll
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-6 items-center">
            <Link to="/home" className="text-black hover:text-gray-300">
              HOME
            </Link>
            <Link to="/about-us" className="text-black hover:text-gray-300">
              ABOUT US
            </Link>
            <Link to="/vission_mission" className="text-black hover:text-gray-300">
              VISSION & MISSION
            </Link>
            <Link to="/career" className="text-black hover:text-gray-300">
              CAREER
            </Link>
            <Link to="/quality" className="text-black hover:text-gray-300">
              QUALITY
            </Link>
            <Link to="/product" className="text-black hover:text-gray-300">
              PRODUCT
            </Link>
            <Link to="/contact" className="text-black hover:text-gray-300">
              CONTACT US
            </Link>

            {/* Search Button on Desktop */}
            <button
              onClick={() => setIsSearchOpen(true)} // Open search bar
              className="text-black hover:text-gray-300"
            >
              <FaSearch />
            </button>
          </div>

          {/* Mobile Menu Icon */}
          <div className="lg:hidden flex items-center">
            {/* Search Button on Mobile */}
            <button
              onClick={() => setIsSearchOpen(true)} // Open search bar
              className="text-black mr-2"
            >
              <FaSearch />
            </button>

            <button
              className="text-black w-6 h-6"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <AiOutlineMenuFold />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden bg-white mt-20 p-4 fixed top-0 right-0 h-full w-64 transition-transform duration-300 ease-in-out ${
            isMobileMenuOpen ? "transform-none" : "transform translate-x-full"
          }`}
        >
          <Link to="/home" className="block text-black py-2" onClick={handleLinkClick}>
            HOME
          </Link>
          <Link to="/about-us" className="block text-black py-2" onClick={handleLinkClick}>
            ABOUT US
          </Link>
          <Link to="/vission_mission" className="block text-black py-2" onClick={handleLinkClick}>
            VISSION & MISSION
          </Link>
          <Link to="/career" className="block text-black py-2" onClick={handleLinkClick}>
            CAREER
          </Link>
          <Link to="/quality" className="block text-black py-2" onClick={handleLinkClick}>
            QUALITY
          </Link>
          <Link to="/product" className="block text-black py-2" onClick={handleLinkClick}>
            PRODUCT
          </Link>
          <Link to="/contact" className="block text-black py-2" onClick={handleLinkClick}>
            CONTACT US
          </Link>
        </div>

        {/* Search Bar (Open from top) */}
        {isSearchOpen && (
          <div className="fixed top-0 right-0 lg:w-[600px] w-[300px] bg-white shadow-lg z-50 p-2 transition-all duration-600 ease-in-out">
            <div className="flex justify-between items-center">
              <input
                type="text"
                placeholder="Search..."
                className="p-2 w-full"
              />
              <button
                onClick={() => setIsSearchOpen(false)} // Close search bar
                className="text-black text-xl"
              >
                <IoMdClose />
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
