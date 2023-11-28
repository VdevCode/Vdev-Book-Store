import React, { useEffect } from "react";
import { Link } from "react-router-dom";
// import { FaBlog } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";
import { FaXmark } from "react-icons/fa6";
import { CgMenuGridR } from "react-icons/cg";
import Logo from "../assets/logo.png"

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
    };

    // Thêm trình nghe sự kiện vào cửa sổ
    window.addEventListener("scroll", handleScroll);

    // Gỡ bỏ trình nghe sự kiện khi thành phần bị hủy
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    {
      link: "Trang chủ",
      path: "/",
    },
    {
      link: "Về Chúng Tôi",
      path: "/about",
    },
    {
      link: "Cửa hàng",
      path: "/shop",
    },
    {
      link: "Bán sách của bạn",
      path: "/admin/dashboard",
    },
    {
      link: "Blog",
      path: "/blog",
    },
  ];

  return (
    <header className="w-full bg-transparent fixed top-0 left-0 right-0 transition-all ease-in duration-300 z-10">
      <nav
        className={`py-4 lg:px-24 px-4 flex items-center ${
          isSticky ? "sticky top-0 left-0 right-0 bg-blue-200" : ""
        }`}
      >
        <div className="w-full flex justify-between items-center text-base gap-8">
          <Link
            to="/"
            className="text-2xl font-bold text-blue-700 flex items-center  gap-2 "
          >
            {" "}
            {/* <FaBlog className="inline-block" />
            Sách */}
            <img src={Logo} width={100} height={10} />
          </Link>

          <ul className="md:flex space-x-12 hidden">
            {navItems.map(({ link, path }) => (
              <li key={path}>
                <Link
                  to={path}
                  className="block text-base text-black uppercase cursor-pointer hover:text-blue-700"
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>

          <div>
            <button className="space-x-12 hidden lg:flex items-center">
              <FaBarsStaggered className="w-5 hover:text-blue-700" />
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-black focus:outline-none"
              
            >
              {isMenuOpen ? (
                <FaXmark className="h-5 w-5 text-black" />
              ) : (
                <CgMenuGridR className="h-5 w-5 text-black" />
              )}
            </button>
          </div>
        </div>

        <div
          className={`space-y-4 px-4 mt-16 py-2 bg-blue-500 ${
            isMenuOpen ? "block top-0 fixed right-0 left-0" : "hidden"
          }`}
        >
          <ul>
            {navItems.map(({ link, path }) => (
              <li key={path}>
                <Link
                  to={path}
                  className="block text-base text-sm my-2 text-white capitalize cursor-pointer hover:text-red-200"
                >
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
