import React from 'react'
import { categoryItems } from '../constants/category'
import '../style/home-filter.css'

const HomeFilter = () => {
    return (
        <div>
            <div>
                <p className='text__category'>Danh mục sản phẩm</p>
                <div>
                    {categoryItems.map(item => {
                        return (
                            <div key={item.id}>
                                <p className='mt-3 text__item'>{item.label}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="mt-4">
                <p className='text__category'>Nhà cung cấp</p>
                <div>
                    <input type="checkbox" id='1' />
                    <label htmlFor='1' className='ms-3 text__item'>Nhà sách Fahasa </label>
                </div>
                <div>
                    <input type="checkbox" id='2' />
                    <label htmlFor='2' className='ms-3 text__item'>Time Books </label>
                </div>
                <div>
                    <input type="checkbox" id='3' />
                    <label htmlFor='3' className='ms-3 text__item'>Bamboo Books </label>
                </div>
                <div>
                    <input type="checkbox" id='4' />
                    <label htmlFor='4' className='ms-3 text__item'>V Books </label>
                </div>
            </div>
            <div>
                <p className='text__category'>Đánh giá</p>
                <div className='d-flex align-items-center'>
                    <div className="pt-1">
                        <img src="icons/rating-color.svg" alt="" />
                        <img src="icons/rating-color.svg" alt="" />
                        <img src="icons/rating-color.svg" alt="" />
                        <img src="icons/rating-color.svg" alt="" />
                        <img src="icons/rating-color.svg" alt="" />
                    </div>
                    <p className='text__item ms-2'>Từ 5 sao</p>
                </div>
                <div className='d-flex align-items-center'>
                    <div className="pt-1">
                        <img src="icons/rating-color.svg" alt="" />
                        <img src="icons/rating-color.svg" alt="" />
                        <img src="icons/rating-color.svg" alt="" />
                        <img src="icons/rating-color.svg" alt="" />
                        <img src="icons/rating.svg" alt="" />
                    </div>
                    <p className='text__item ms-2'>Từ 4 sao</p>
                </div>
                <div className='d-flex align-items-center'>
                    <div className="pt-1">
                        <img src="icons/rating-color.svg" alt="" />
                        <img src="icons/rating-color.svg" alt="" />
                        <img src="icons/rating-color.svg" alt="" />
                        <img src="icons/rating.svg" alt="" />
                        <img src="icons/rating.svg" alt="" />
                    </div>
                    <p className='text__item ms-2'>Từ 3 sao</p>
                </div>
            </div>
        </div>
    )
}

export default HomeFilter
