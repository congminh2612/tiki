import React, { useEffect, useState } from 'react'
import bookData from '../../../assets/data/book.json'
import BookItem from '../../book/components/BookItem'
import '../style/home-stage.css'

const HomeStage = () => {
    const [books, setBooks] = useState([])
    useEffect(() => {
        setBooks(bookData)
    }, [])
    return (
        <div>
            <div className="row">
                {books.map((book) => {
                    return (
                        <div className="custom-col mt-2" key={book.id}>
                            <div>
                                <BookItem book={book} />
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className='pagination__stage'>
                <ul className='d-flex'>
                    <li className='pagination__item active'>1</li>
                    <li className='pagination__item ms-4'>2</li>
                    <li className='pagination__item ms-4'>3</li>
                    <li className='pagination__item ms-4'>4</li>
                    <li className='pagination__item ' style={{ marginLeft: '50px' }}>50</li>
                </ul>
            </div>
        </div>
    )
}

export default HomeStage
