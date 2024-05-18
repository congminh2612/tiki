/* eslint-disable react/prop-types */
import React from 'react'
import '../style/book-item.css'
import formatCurrencyVND from '../../../utils/formatCurrency';
import { useNavigate, useParams } from 'react-router-dom';

const BookItem = ({ book }) => {
    const navigate = useNavigate()
    const arrayRating = Array.from({ length: book.rating }, (_, index) => index)
    console.log(arrayRating)
    return (
        <div>
            <div className="card" onClick={() => navigate(`book/${book.id}`)}>
                <img src={book.thumbnail} className="card-img-top" alt="" />
                <div className="card__body">
                    <div style={{ height: '75px' }}>
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
                    </div>
                    <div className=''>{formatCurrencyVND(book.price)}</div>
                    <div className='text__ship text-center border-top mt-3 '>Giao hàng siêu tốc 2h</div>
                </div>
            </div>
        </div >
    )
}

export default BookItem
