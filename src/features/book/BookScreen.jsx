import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import bookData from '../../assets/data/book.json'
import './style/book-screen.css'
import rating from '../../assets/icon-rating-5.png'
import formatCurrencyVND from '../../utils/formatCurrency'
import { useDispatch, useSelector } from 'react-redux'
import { addCart } from '../../redux/slice/cartSlice'

const BookScreen = () => {
    const dispatch = useDispatch()
    const carts = useSelector(state => state.cart.carts)
    const { id } = useParams()
    const [count, setCount] = useState(1)
    const [book, setBook] = useState({})

    useEffect(() => {
        setBook(bookData.filter((book) => book.id == id))
    }, [id])


    const handleInc = () => {
        if (count > 0) setCount(count - 1)
    }
    const handleDec = () => {
        setCount(count + 1)
    }
    const handleAddToCart = () => {
        const index = carts.findIndex(item => item.id == id)
        const productCarts = [...carts]

        if (index !== -1) {
            productCarts[index] = {
                ...productCarts[index],
                quantity: productCarts[index].quantity + count,
            }
        }
        else {
            const product = { ...book[0], quantity: count }
            productCarts.push(product)
        }

        dispatch(addCart(productCarts))
    }
    return (
        <div className='container' style={{ paddingBottom: '100px' }}>
            <div className='row'>
                <div className="col-4 pe-5">
                    <div>
                        <img src={book[0]?.thumbnail} width='368px' alt="" />
                    </div>
                    <div>
                        <p className='text__char'>Đặc điểm nổi bật</p>
                        <div className='d-flex align-items-center'>
                            <img src="https://s3-alpha-sig.figma.com/img/2d68/b606/0e0f398bf7622c2a1da0c832fdec6f19?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OczoXfNeu5oZlrwo1-vF5erfXwst-cBQoVJ6MnQa1ZcBeTeTb2-jW5RqzSKb41zHk6PY7m1nYxTTlUHA3EKONO-Qc94pfVWNwHtelCixdjSTb9-1f0X5lQsb~GCd27dwH0-JwXz2wUnjALZIvRruHNDCl1FCen3e6R6z1Bkrp5WAuaLyJNg63yr~QOhl~6i0IbvYABjH5gOQveJuOvZnTwUuKPaTA-AHyP2RUbQ4zwaRIwHkhOq9vp3SlLZAi65x~fKW12CqA9vYnGT9QW3wdbFHFUTjgN8U3AzDi3lM5loWAPZQc2AlC7v5NoeKDTUJdNgPoGGiF0-pPPSknrX3Tg__" alt="tick" width='16px' />
                            <p className='text__char-item'>Kích thước lớn và bìa cứng, tạo cảm giác sang trọng và bền bỉ.</p>
                        </div>
                        <div className='d-flex align-items-center'>
                            <img src="https://s3-alpha-sig.figma.com/img/2d68/b606/0e0f398bf7622c2a1da0c832fdec6f19?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OczoXfNeu5oZlrwo1-vF5erfXwst-cBQoVJ6MnQa1ZcBeTeTb2-jW5RqzSKb41zHk6PY7m1nYxTTlUHA3EKONO-Qc94pfVWNwHtelCixdjSTb9-1f0X5lQsb~GCd27dwH0-JwXz2wUnjALZIvRruHNDCl1FCen3e6R6z1Bkrp5WAuaLyJNg63yr~QOhl~6i0IbvYABjH5gOQveJuOvZnTwUuKPaTA-AHyP2RUbQ4zwaRIwHkhOq9vp3SlLZAi65x~fKW12CqA9vYnGT9QW3wdbFHFUTjgN8U3AzDi3lM5loWAPZQc2AlC7v5NoeKDTUJdNgPoGGiF0-pPPSknrX3Tg__" alt="tick" width='16px' />
                            <p className='text__char-item'>Kích thước lớn và bìa cứng, tạo cảm giác sang trọng và bền bỉ.</p>
                        </div>
                        <div className='d-flex align-items-center'>
                            <img src="https://s3-alpha-sig.figma.com/img/2d68/b606/0e0f398bf7622c2a1da0c832fdec6f19?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OczoXfNeu5oZlrwo1-vF5erfXwst-cBQoVJ6MnQa1ZcBeTeTb2-jW5RqzSKb41zHk6PY7m1nYxTTlUHA3EKONO-Qc94pfVWNwHtelCixdjSTb9-1f0X5lQsb~GCd27dwH0-JwXz2wUnjALZIvRruHNDCl1FCen3e6R6z1Bkrp5WAuaLyJNg63yr~QOhl~6i0IbvYABjH5gOQveJuOvZnTwUuKPaTA-AHyP2RUbQ4zwaRIwHkhOq9vp3SlLZAi65x~fKW12CqA9vYnGT9QW3wdbFHFUTjgN8U3AzDi3lM5loWAPZQc2AlC7v5NoeKDTUJdNgPoGGiF0-pPPSknrX3Tg__" alt="tick" width='16px' />
                            <p className='text__char-item'>Kích thước lớn và bìa cứng, tạo cảm giác sang trọng và bền bỉ.</p>
                        </div>
                    </div>
                </div>
                <div className="col-5">
                    <div className='d-flex align-items-center'>
                        <img width='89px' src="https://s3-alpha-sig.figma.com/img/3787/ee15/f5fc9524f060e2540605302d3aa5a90f?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MTZ2Cndz3Cbd2dKxR-1sHbWcBZRlDkeRGKIGa9k4i1t7zZ~leyCKiSOeYzSzuKRVMLd-Sj847S1Ut8poCWV3Gq5OwEo5aAh5RD389C4pZxL4gIo9oebiScCbszexER8zqlCW6SKkqTKqnA3R1q~QvtRgVdNMOwQwy~ReuNcTDxLIFmT-ksejjRCzjdmxV227cFsNagL~lYu2cEgpW3JUkQLNDBoR2X7gtBTip9ufCMQ-MuOdFNZxNwMpXjX~BZYaHMTZliCBTsgkN7iTbyLF8HxdutavWCHqiFcJQg7xhbpipS0p1j53kX5CeyeQy68SWTu34zgoqInuIrpp5FtM0Q__" alt="" />
                        <div className='d-flex align-items-center ms-2'>
                            <p>Tác giả: </p>
                            <p className=' ms-1 text-author text-primary'>{book[0]?.author}</p>

                        </div>
                    </div>
                    <div>
                        <div className="text__title">{book[0]?.title}</div>
                        <div className='mt-3'>
                            <div className='d-flex align-items-center'>
                                <p>{book[0]?.rating}</p>
                                <div className='ms-1'>
                                    <img src={rating} alt="" />
                                </div>
                                <p className='ps-1'>928</p>
                                <div className='text__sold'> Đã bán 5000+</div>
                            </div>
                        </div>
                        <div className='text__price'>{formatCurrencyVND(book[0]?.price)}</div>
                        <div className='mt-5'>
                            <p className='text__info'>Thông tin chi tiết</p>
                            <div>
                                <div className='d-flex algin-items-center  info__wrapper'>
                                    <p className='text__info-title'>Phiên bản sách</p>
                                    <p className='text__info-value'>{book[0]?.version}</p>
                                </div>
                                <div className='d-flex algin-items-center  info__wrapper'>
                                    <p className='text__info-title'>Công ty phát hành</p>
                                    <p className='text__info-value'>{book[0]?.issuingCompany}</p>
                                </div>
                                <div className='d-flex algin-items-center  info__wrapper'>
                                    <p className='text__info-title'>Ngày xuất bản</p>
                                    <p className='text__info-value'>{book[0]?.publicDate}</p>
                                </div>
                                <div className='d-flex algin-items-center  info__wrapper'>
                                    <p className='text__info-title'>Kích thước</p>
                                    <p className='text__info-value'>{book[0]?.size}</p>
                                </div>
                                <div className='d-flex algin-items-center  info__wrapper'>
                                    <p className='text__info-title'>Dịch giả</p>
                                    <p className='text__info-value'>{book[0]?.translator}</p>
                                </div>
                                <div className='d-flex algin-items-center  info__wrapper'>
                                    <p className='text__info-title'>Loại bìa </p>
                                    <p className='text__info-value'>Bìa cứng</p>
                                </div>
                                <div className='d-flex algin-items-center  info__wrapper'>
                                    <p className='text__info-title'>Số trang</p>
                                    <p className='text__info-value'>{book[0]?.pages}</p>
                                </div>
                                <div className='d-flex algin-items-center  info__wrapper'>
                                    <p className='text__info-title'>Nhà xuất bản</p>
                                    <p className='text__info-value'>{book[0]?.publishingHouse}</p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-5">
                            <p className='text__info'>Mô tả sản phẩm</p>
                            <div className='mt-5'>
                                <img width='552px' src="https://s3-alpha-sig.figma.com/img/2184/4909/62676b75d5ba44eb297a938074833093?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DJAvKs7soLxIGVzXC7WZnvGcOZYdgrZkvyzAWvuU~2qnHExnJsMLTcKLMK88uYcX8uIDM1XqKbDIhqrNwS5aHHUFQ1Y9eYpd6g3SgkNwLc0UYjXRJhuxRkVjITDpFnNWUHkJ2AgkQg3NQV3vg993-q8BRi9gOkSOBvXFmwTC4zc5fq~6MNpDjjpwYN4uG7pQ4NGX9THTGT1DQWH2vtm4kqzQjaehceweFwzY0R-ZCcxaf6wi5y6-4-icMx2LR81rbGsGUU~QwsgMwXOmwndtqGXoRkrF2V0mPdzuwRN2mMhNNc~2seHM5xiMLbUF2Vhv77MNXPwnWuKglZK6o2aCLw__" alt="" />
                                <div className='pt-4'>{book[0]?.description}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div>
                        Số lượng
                    </div>
                    <div className='d-flex mt-3'>
                        <button onClick={handleInc} className='btn__book'>-</button>
                        <div className='count'>{count}</div>
                        <button onClick={handleDec} className='btn__book'>+</button>
                    </div>
                    <div>
                        <p className='text__total-label'>Tạm tính</p>
                        <p className='text__total-value'>{formatCurrencyVND(book[0]?.price * count)}</p>
                    </div>
                    <div className='mt-4'>
                        <button onClick={() => handleAddToCart(book[0]?.id)} style={{ width: '100%' }} type="button" className="btn btn-danger">Mua ngay</button>
                        <button onClick={() => handleAddToCart(book[0]?.id)} style={{ width: '100%' }} type="button" className="mt-2 btn btn-outline-primary">Thêm vào giỏ hàng</button>
                        <button style={{ width: '100%' }} type="button" className="mt-2 btn btn-outline-primary">Mua trước trả sau</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookScreen
