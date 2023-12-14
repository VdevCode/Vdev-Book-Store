import React from 'react'
import { Link } from 'react-router-dom'
import bookPic from "../assets/books/buy-book.jpg"

const PromoBanner = () => {
  return (
    <div className='mt-16 py-12 bg-teal-100 px-4 lg:px-24'>
      <div className='flex flex-col md:flex-row justify-between items-center gap-12'>
        <div className='md:w-1/2'>
            <h2 className='text-xl leading-snug'>Truyện mới ra mắt trong năm nay</h2>
            <Link to="/shop" className="mt-6 block">
            <button className="bg-blue-600 text-white font-light px-8 py-2 hover:bg-black transition-all duration-300">
              Mua ngay
            </button>
          </Link>
        </div>
        <div className=''>
            <img src={bookPic} className='w-96' />
        </div>
      </div>
    </div>
  )
}

export default PromoBanner
