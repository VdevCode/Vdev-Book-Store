import React from "react";
import imageFavourite from "../assets/books/favourite.jpg";
import { Link } from "react-router-dom";

const FavBook = () => {
  return (
    <div className="px-4 lg:px-24 my-20 flex flex-col md:flex-row justify-between items-center">
      <div className="md:w-1/2">
        <img src={imageFavourite} className="rounded md:w-10/12" alt="" />
      </div>
      <div className="md:w-1/2 space-y-6">
        <h2 className="text-2xl font-medium my-5 md:w-3/4 leading-snug">
          Sách mà bạn yêu thích{" "}
          <span className="text-red-500">tại Vdevshop</span>
        </h2>
        <p className="mb-10 text-sm md:w-5/6 text-justify">
          “Doraemon” của tác giả Fujiko F Fujio là một trong những bộ truyện
          tranh đầu tiên ở Việt Nam, gắn với tuổi thơ của rất nhiều thế hệ. Khi
          nhắc đến Doraemon thì không chỉ trẻ nhỏ mà tất cả những người lớn đều
          biết tới và thích thú với những nhân vật đáng yêu trong tập truyện
          này. Hôm nay các bạn hãy cùng Nhân Văn tìm hiểu những yếu tố tạo nên
          bộ truyện tên tuổi này nhé!
        </p>
        <div className="flex flex-col sm:flex-row justify-between gap-5 md:w-3/4 my-14">
          <div>
            <h3 className="text-xl font-medium">Hơn 300+</h3>
            <p className="text-base">Lượt mua</p>
          </div>
          <div>
            <h3 className="text-xl font-medium">Hơn 100+</h3>
            <p className="text-base">Luợt thích</p>
          </div>
          <div>
            <h3 className="text-xl font-medium">Hơn 200+</h3>
            <p className="text-base">Lượt xem</p>
          </div>

        </div>
        <Link to="/shop" className="mt-6 block">
            <button className="bg-blue-600 text-white font-light px-8 py-2 hover:bg-black transition-all duration-300">
              Mua ngay
            </button>
          </Link>
      </div>
    </div>
  );
};

export default FavBook;
