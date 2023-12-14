import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Avatar } from 'flowbite-react';
import imgAvatar from "../assets/avatar/avatar.jpg"
import imgAvatar1 from "../assets/avatar/avatar1.jpg"

import { FaStar } from "react-icons/fa6";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Pagination } from "swiper/modules";

const ReviewBook = () => {
  return (
    <div className="my-12 px-4  lg:px-24">
      <h2 className="text-2xl font-medium text-center leading-snug capitalize mb-2">
        Bình luận của khách hàng
      </h2>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border">
          <div className="">
            <div className="text-amber-500 flex items-center gap-2">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <div className="mt-2">
              <p className="text-sm mb-2">
                Bộ phim Doramon là một một bộ phim hay và hài hước với những
                chuyến phiêu lưu kì thú và hồi hộp của Nobita, Shizuka, Janan,
                Suneo, Doraemon. Trong các bộ phim tôi thích nhất bộ phim cảm
                động Doraemon chia tay Nobita .{" "}
              </p>
              <Avatar img={imgAvatar} rounded status="busy" statusPosition="top-right" className="w-10 mb-4" />
              <h5 className="text-lg font-meidum">Doraemon</h5>
              <p className="text-[.8rem]">Boss tai Phim Doraemon</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide  className="shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border">
          <div className="">
            <div className="text-amber-500 flex items-center gap-2">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <div className="mt-2">
              <p className="text-sm mb-2">
                Bộ phim Doramon là một một bộ phim hay và hài hước với những
                chuyến phiêu lưu kì thú và hồi hộp của Nobita, Shizuka, Janan,
                Suneo, Doraemon. Trong các bộ phim tôi thích nhất bộ phim cảm
                động Doraemon chia tay Nobita .{" "}
              </p>
              <Avatar img={imgAvatar1} rounded status="busy" statusPosition="top-right" className="w-10 mb-4" />
              <h5 className="text-lg font-meidum">Nobita</h5>
              <p className="text-[.8rem]">Boss tai Phim Doraemon</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide  className="shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border">
          <div className="">
            <div className="text-amber-500 flex items-center gap-2">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <div className="mt-2">
              <p className="text-sm mb-2">
                Bộ phim Doramon là một một bộ phim hay và hài hước với những
                chuyến phiêu lưu kì thú và hồi hộp của Nobita, Shizuka, Janan,
                Suneo, Doraemon. Trong các bộ phim tôi thích nhất bộ phim cảm
                động Doraemon chia tay Nobita .{" "}
              </p>
              <Avatar img={imgAvatar} rounded status="busy" statusPosition="top-right" className="w-10 mb-4" />
              <h5 className="text-lg font-meidum">Doraemon</h5>
              <p className="text-[.8rem]">Boss tai Phim Doraemon</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide  className="shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border">
          <div className="">
            <div className="text-amber-500 flex items-center gap-2">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <div className="mt-2">
              <p className="text-sm mb-2">
                Bộ phim Doramon là một một bộ phim hay và hài hước với những
                chuyến phiêu lưu kì thú và hồi hộp của Nobita, Shizuka, Janan,
                Suneo, Doraemon. Trong các bộ phim tôi thích nhất bộ phim cảm
                động Doraemon chia tay Nobita .{" "}
              </p>
              <Avatar img={imgAvatar} rounded status="busy" statusPosition="top-right" className="w-10 mb-4" />
              <h5 className="text-lg font-meidum">Doraemon</h5>
              <p className="text-[.8rem]">Boss tai Phim Doraemon</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ReviewBook;
