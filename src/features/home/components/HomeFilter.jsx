/* eslint-disable react/prop-types */
import React, { useState } from 'react'

import '../style/home-filter.css'
import { categoryItems, supplierItems } from '../constants';

const HomeFilter = ({ filters, setFilters }) => {

    const handleCategoryChange = (category) => {
        setFilters(prev => ({
            ...prev,
            category,
        }));

    }
    const handleSupplierChange = (supplier) => {
        setFilters(prev => ({
            ...prev,
            suppliers: {
                ...prev.suppliers,
                [supplier]: !prev.suppliers[supplier],
            }
        }));
    };
    const handleRatingChange = (rating) => {
        setFilters(prev => ({
            ...prev,
            rating,
        }));
    };
    return (
        <div>
            <div>
                <p className='text__category'>Danh mục sản phẩm</p>
                <div>
                    {categoryItems.map(item => {
                        return (
                            <div className='' key={item.id} onClick={() => {
                                handleCategoryChange(item.label)
                            }}
                            >
                                <p className='mt-3 text__item text__item-active'>{item.label}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="mt-4">
                <p className='text__category'>Nhà cung cấp</p>
                {supplierItems.map((item, index) => (
                    <div key={item.id}>
                        <input
                            type="checkbox"
                            id={item.id}
                            checked={filters.suppliers[item.label] || false}
                            onChange={() => handleSupplierChange(item.label)}
                        />
                        <label htmlFor={item.id} className='ms-3 text__item'>
                            {item.label}
                        </label>
                    </div>
                ))}
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
