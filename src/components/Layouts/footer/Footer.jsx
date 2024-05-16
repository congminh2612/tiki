import React from 'react'
import { AboutTikiItems, SupportItems } from './constants'
import '../style/footer.css'

const Footer = () => {
    return (
        <div className="container pl-5">
            <div className='row'>
                <div className="custom-col">
                    <div>
                        <div className='text-bold__footer'>Hỗ trợ khách hàng</div>
                        <div className='mt-3'>
                            <p className='text-medium__footer' >Hotline: <b>1900-6035</b><br />(1000 đ/phút, 8-21h kể cả T7, CN)</p>
                            {SupportItems.map(item => {
                                return (
                                    (
                                        <div key={item.id}>
                                            <p className='text-medium__footer'>{item.label}</p>
                                        </div>
                                    )
                                )
                            })}
                        </div>
                    </div>
                </div>
                <div className="custom-col">
                    <div>
                        <div className='text-bold__footer'> Về Tiki</div>
                        <div className='mt-3'>
                            {AboutTikiItems.map(item => {
                                return (
                                    (
                                        <div key={item.id}>
                                            <p className='text-medium__footer'>{item.label}</p>
                                        </div>
                                    )
                                )
                            })}
                        </div>
                    </div>
                </div>
                <div className="custom-col">
                    <div>
                        <div className='text-bold__footer'> Hợp tác và liên kết </div>
                        <div className='mt-3'>
                            <div>
                                <p className='text-medium__footer'>Quy chế hoạt động Sàn GDTMĐT</p>
                                <p className='text-medium__footer'>Bán hàng cùng Tiki</p>
                                <div className='text-bold__footer mt-4'>Chứng nhận bởi</div>
                                <div style={{ marginLeft: '35px' }} className="">
                                    <img src="images/logo-cer.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="custom-col">
                    <div>
                        <div className='text-bold__footer'> Hợp tác và liên kết </div>
                        <div className='mt-4'>
                            <p className='text-bold__footer'>Dịch vụ giao hàng</p>
                        </div>
                    </div>
                </div>
                <div className="custom-col">
                    <div className="">
                        <div className='text-bold__footer'> Kết nối với chúng tôi </div>
                        <div className='mt-2'>
                            <img className='' src="icons/icon-facebook.png" width='32px' alt="" />
                            <img className='ms-2' src="icons/icon-youtube.png" width='32px' alt="" />
                            <img className='ms-2' src="icons/icon-zalo.png" width='32px' alt="" />
                        </div>
                        <div>
                            <p className='text-bold__footer'>Tải ứng dụng trên điện thoại</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
