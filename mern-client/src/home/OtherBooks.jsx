import React, { useEffect, useState } from 'react'
import BookCards from '../components/BookCards'

const OrtherBooks = () => {

    const [books, setBooks] = useState([])

    useEffect(() =>{
        fetch("http://localhost:5000/all-books")
        .then((res) => res.json() )
        .then((data) => setBooks(data.slice(4,8)))
    }, [])

  return (
    <div className=''>
        <BookCards books={books} headLine="Các Loại Truyện Khác" />
    </div>
  )
}

export default OrtherBooks
