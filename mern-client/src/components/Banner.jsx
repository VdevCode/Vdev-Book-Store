import BannerCard from "../home/BannerCard";

const Banner = () => {
  return (
    <div className="px-4 lg:px-24 bg-teal-100 flex items-center">
      <div className="flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40">
        {/* left */}
        {/* space-x-8  */}
        <div className="md:w-1/2 h-full">
          <h2 className="text-4xl font-medium leading-snug text-black">
            Mua và bán sách tại <span className="text-red-500">Vdevbook.</span>
          </h2>
          <p className="text-sm font-light my-4 md:w-4/54">
            Vdevbook giúp bạn có thể mua bán sách dễ dàng.
          </p>
          <div className="">
            <input
              type="text"
              placeholder="Tìm kiếm sách..."
              className="text-sm font-light p-2 outline-none w-[50%]"
            />
            <button className="text-sm font-light p-2 outline-none bg-black hover:bg-blue-400 transition-all ease-in duration-200 text-white">
              Tìm sách
            </button>
          </div>
        </div>
        {/* right */}
        <div className="">
        <BannerCard></BannerCard>
        </div>
      </div>
    </div>
  );
};

export default Banner;
