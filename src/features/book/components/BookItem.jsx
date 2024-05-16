/* eslint-disable react/prop-types */
import React from 'react'
import '../style/book-item.css'
import formatCurrencyVND from '../../../utils/formatCurrency';

const BookItem = ({ book }) => {
    console.log(book)
    const arrayRating = Array.from({ length: book.rating }, (_, index) => index)
    console.log(arrayRating)
    return (
        <div>
            <div className="card">
                <img src={book.thumbnail} className="card-img-top" alt="" />
                <div className="card__body">
                    <div className="text__title">{book.title}</div>
                    <div className='d-flex align-items-center'>
                        <div className='d-flex'>
                            {arrayRating.map((rating, index) => {
                                return (

                                    <img key={index} src="icons/rating-color.svg" alt="rating" width='12px' height='12px' />

                                )
                            })}
                        </div>
                        <div className='text__sold ms-2'>Đã bán 5k+</div>
                    </div>
                    <div className='mt-3'>{formatCurrencyVND(book.price)}</div>
                    <div className='text__ship text-center border-top mt-4 pt-1'>Giao hàng siêu tốc 2h</div>
                </div>
            </div>
        </div>
    )
}

export default BookItem
