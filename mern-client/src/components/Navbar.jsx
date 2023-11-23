import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import { FaBlog } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";
import { FaXmark } from "react-icons/fa6";



const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isSticky, setIsSticky] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.addEventListener("scroll", handleScroll);
      };
    };
  }, []);

  const navItems = [
    {
      link: "Home",
      path: "/",
    },
    {
      link: "About",
      path: "/about",
    },
    {
      link: "Shop",
      path: "/shop",
    },
    {
      link: "Sell your book",
      path: "/admin/dashboard",
    },
    {
      link: "Blog",
      path: "/blog",
    },
  ];

  return (
    <header>
      <nav>
        <div>
          <Link
            to="/"
            className="text-2xl font-bold text-blue-700 flex items-cente gap-2 "
          >
            {" "}
            <FaBlog className="inline-block" />
            Sách
          </Link>

          <ul className="md:flex space-x-12 hidden">
            {navItems.map(({ link, path }) => (
              <li key={path}>
                <Link to={path} className="block text-base text-black uppercase cursor-pointer hover:text-blue-700">
                  {link}
                </Link>
              </li>
            ))}
          </ul>

          <div>
            <button className="space-x-12 hidden lg:flex items-center">
              <FaBarsStaggered className="w-5 hover:text-blue-700"/>
            </button>
          </div>

            <div className="md:hidden">
              <button onClick={toggleMenu} className="text-black focus:outline-none">
                {
                  isMenuOpen ? <FaXmark className="h-5 w-5 text-black" /> : <FaBarsStaggered className="h-5 w-5 text-black"/>
                }
              </button>
            </div>

        </div>

        <div className={`space-y-4 px-4 mt-16 py-7 bg-blue-700 ${isMenuOpen ? "block top-0 fixed right-0 left-0" : "hidden"}`}>
          <ul>
          {navItems.map(({ link, path }) => (
              <li key={path}>
                <Link to={path} className="block text-base text-white uppercase cursor-pointer hover:text-blue-700">
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
