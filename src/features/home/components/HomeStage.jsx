/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import bookData from '../../../assets/data/book.json'
import BookItem from '../../book/components/BookItem'
import '../style/home-stage.css'

const HomeStage = ({ filters }) => {
    console.log(filters)
    const [books, setBooks] = useState([]);

    useEffect(() => {
        setBooks(bookData);
    }, []);

    let filteredBooks = books;

    if (filters.category) {
        filteredBooks = books.filter(book => book.category === filters.category);
    }
    if (
        filters.suppliers && Object.keys(filters.suppliers).length > 0 &&
        Object.values(filters.suppliers).includes(true)) {
        filteredBooks = filteredBooks.filter(book => filters.suppliers[book.supplier]);
    }
    if (filters.suppliers && Object.keys(filters.suppliers).length > 0 && Object.values(filters.suppliers).every(value => value === false)) {
        filteredBooks = books
    }



    return (
        <div>
            <div className="row">
                {filteredBooks.map((book) => (
                    <div className="custom-col mt-2" key={book.id}>
                        <div>
                            <BookItem book={book} />
                        </div>
                    </div>
                ))}
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
    );
};

export default HomeStage;


