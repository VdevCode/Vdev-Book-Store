import React, { useEffect, useState } from 'react'
import BookCards from '../components/BookCards'

const FavouriteBooks = () => {

    const [books, setBooks] = useState([])

    useEffect(() =>{
        fetch("http://localhost:5000/all-books")
        .then((res) => res.json() )
        .then((data) => setBooks(data))
        
    }, [])

  return (
    <div className=''>
        <BookCards books={books} headLine="Sách giảm giá!" />
    </div>
  )
}

export default FavouriteBooks
