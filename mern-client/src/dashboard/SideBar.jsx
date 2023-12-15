import React, { useContext, useEffect } from "react";
import { Sidebar } from "flowbite-react";
import Logo from "../assets/avatar/avatar1.jpg";
import { Link } from "react-router-dom";
import { FiUploadCloud } from "react-icons/fi";
import { MdManageSearch } from "react-icons/md";
import { TfiDashboard } from "react-icons/tfi";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { BsCart2 } from "react-icons/bs";
import { FaRegUserCircle } from "react-icons/fa";
import { IoExitOutline } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { CiGrid41 } from "react-icons/ci";
import { GiShoppingBag } from "react-icons/gi";
import { AuthContext } from "../contexts/AuthProvider.jsx";

const SideBar = () => {
  const { user, logout } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isSticky, setIsSticky] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
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

  return (
    <div className="fixed mt-[1rem] cursor-pointer text-[1.5rem] md:static md:mt-0 px-4 z-10">
      <button
        onClick={toggleMenu}
        className={`md:hidden ${isSticky ? "hidden" : "fixed"}`}
      >
        <CiGrid41></CiGrid41>
      </button>
      <div
        className={`h-screen flex md:block ${
          isMenuOpen ? "fixed z-10 top-0 left-0 bottom-0 md:flex" : "hidden"
        }`}
      >
        <Sidebar aria-label="logo" className="border-r-2 border-gray-400">
          <div className="flex items-center justify-between">
            <Link to="/admin/dashboard">
              <Sidebar.Logo className="rounded" img={user?.photoURL || Logo}>
                <p className="text-[.7rem] text-red-500">
                  {user ? (
                    user.email || user.displayName
                  ) : (
                    <p className="text-[.7rem] text-red-500">Chưa đăng nhập</p>
                  )}
                </p>
              </Sidebar.Logo>
            </Link>
            <IoClose
              onClick={toggleMenu}
              className="mb-[1.5rem] text-[1.5rem] cursor-pointer md:hidden"
            ></IoClose>
          </div>
          <Sidebar.Items>
            <Sidebar.ItemGroup>
              <Link to="/admin/dashboard">
                <Sidebar.Item icon={TfiDashboard}>
                  <p className="text-[.8rem] sm:text-[.9rem] ">
                    Bảng điều khiển
                  </p>
                </Sidebar.Item>
              </Link>
              <Link to="/admin/dashboard/upload">
                <Sidebar.Item icon={FiUploadCloud}>
                  <p className="text-[.8rem] sm:text-[.9rem] ">Đăng bán sách</p>
                </Sidebar.Item>
              </Link>
              <Link to="/admin/dashboard/manage">
                <Sidebar.Item icon={MdManageSearch}>
                  <p className="text-[.8rem] sm:text-[.9rem] ">Quản lí sách</p>
                </Sidebar.Item>
              </Link>
              <Link to="/admin/dashboard/manage">
                <Sidebar.Item icon={AiOutlineUsergroupAdd}>
                  <p className="text-[.8rem] sm:text-[.9rem]">Người dùng</p>
                </Sidebar.Item>
              </Link>
              <Link to="/admin/dashboard/manage">
                <Sidebar.Item icon={BsCart2}>
                  <p className="text-[.8rem] sm:text-[.9rem]">Xem sản phẩm</p>
                </Sidebar.Item>
              </Link>
              {user ? (
                ""
              ) : (
                <Link to="/login">
                  <Sidebar.Item icon={FaRegUserCircle}>
                    <p className="text-[.8rem] sm:text-[.9rem]">Đăng nhập</p>
                  </Sidebar.Item>
                </Link>
              )}
              {user ? (
                <Link to="/">
                  <Sidebar.Item icon={IoExitOutline}>
                    <button
                      className="text-[.8rem] sm:text-[.9rem]"
                      onClick={logout}
                    >
                      Đăng xuất
                    </button>
                  </Sidebar.Item>
                </Link>
              ) : (
                <Link to="/signup">
                  {" "}
                  <Sidebar.Item icon={IoExitOutline}>
                    <p className="text-[.8rem] sm:text-[.9rem]">Đăng ký</p>
                  </Sidebar.Item>
                </Link>
              )}
              <Link to="/">
                <Sidebar.Item icon={GiShoppingBag}>
                  <p className="text-[.8rem] sm:text-[.9rem]">Cửa hàng của tôi</p>
                </Sidebar.Item>
              </Link>
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </Sidebar>
      </div>
    </div>
  );
};

export default SideBar;
