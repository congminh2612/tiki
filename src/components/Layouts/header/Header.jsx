import React from 'react'
import '../style/header.css'
const Header = () => {
    return (
        <div className=' bg-white header__wrapper '>
            <div className='d-flex align-items-center justify-content-between'>
                <div className='d-none d-md-block'>
                    <img src="images/logo.png" alt="logo" width='72px' />
                </div >

                <div className='d-flex'>
                    <div className='search-wrapper position-relative ms-5'>
                        <input className='input__header' type="text" placeholder='Freeship đến 30K' />
                        <img src="icons/icon-search.png" alt="search" width='20px' className='icon__search position-absolute' />
                    </div>
                    <div>
                        <button className='button__header '>Tìm kiếm</button>
                    </div>
                </div>

                <div className='d-flex  align-items-center ' >
                    <div className="d-flex align-items-center ">
                        <img src="icons/icon-home.png" alt="home" width='24px' />
                        <div className='mt-3 ms-1 text-color__header'>
                            <p>Trang chủ</p>
                        </div>
                    </div>
                    <div className="d-flex align-items-center ms-4">
                        <img src="icons/icon-user.png" alt="home" width='24px' />
                        <div className='mt-3 ms-1 text-color__header'>
                            <p>Tài khoản</p>
                        </div>
                    </div>
                    <div className="d-flex align-items-center border-start ms-4 ps-4 position-relative">
                        <img src="icons/icon-cart.png" alt="home" width='24px' />
                        <div className="position-absolute badge__header">1</div>
                    </div>
                </div>
            </div>

        </div >
    )
}

export default Header
