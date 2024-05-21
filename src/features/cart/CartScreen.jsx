import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import formatCurrencyVND from '../../utils/formatCurrency'
import './style/cart.css'
import { decreaseQuantity, increaseQuantity, removeCart } from '../../redux/slice/cartSlice'
import emailjs from '@emailjs/browser';

const CartScreen = () => {
    const form = useRef()
    const dispatch = useDispatch()
    const carts = useSelector(state => state.cart.carts)
    let cartEmail = "";
    carts.map((item) => {
        cartEmail += `${item.title} x ${item.quantity}  \n`;
    });
      
    const sendEmail = (e) => {
        e.preventDefault()
        emailjs.sendForm('service_gg15d0c', 'template_jzmh73p',form.current,'mtz2anV1-z2yy5-XU')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    }

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        address: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form.current);
    };
    const handleIncreaseQuantity = (id) => {
        dispatch(increaseQuantity(id));
    };

    const handleDecreaseQuantity = (id) => {
        console.log(id)
        dispatch(decreaseQuantity(id));
    };

    const handleRemoveFromCart = (id) => {
        dispatch(removeCart(id));
    };
    console.log(carts)
    return (
        <div className='container' style={{ height: '40vw' }}>
            <div className='row'>
                <div className='col-lg-8'>
                    <div className='table-responsive'>
                        <table className='table'>
                            <thead>
                                <tr>
                                    <th>Image</th>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Total</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {carts.map((item) => (
                                    <tr key={item.id}>
                                        <td>
                                            <img src={item.thumbnail} alt={item.title} className='img-thumbnail' style={{ maxWidth: '100px', maxHeight: '100px' }} />
                                        </td>
                                        <td>{item.title}</td>
                                        <td>{formatCurrencyVND(item.price)}</td>
                                        <td>
                                            <button className='btn btn-sm btn-secondary me-1' onClick={() => handleDecreaseQuantity(item.id)}>-</button>
                                            {item.quantity}
                                            <button className='btn btn-sm btn-secondary ms-1' onClick={() => handleIncreaseQuantity(item.id)}>+</button>
                                        </td>
                                        <td>{formatCurrencyVND(item.price * item.quantity)}</td>
                                        <td>
                                            <button className='btn btn-sm btn-danger' onClick={() => handleRemoveFromCart(item.id)}>
                                                remove
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className='col-lg-4'>
                    <form ref={form} onSubmit={sendEmail}>
                        <div className='mb-3'>
                            <label htmlFor='name' className='form-label'>Tên</label>
                            <input
                                type='text'
                                className='form-control'
                                id='name'
                                name='name'
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='phone' className='form-label'>Số điện thoại</label>
                            <input
                                type='text'
                                className='form-control'
                                id='phone'
                                name='phone'
                                value={formData.phone}
                                onChange={handleChange}
                            />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='address' className='form-label'>Địa chỉ</label>
                            <input
                                type='text'
                                className='form-control'
                                id='address'
                                name='address'
                                value={formData.address}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <input
                            type='hidden'
                            id='cart'
                            name='carts'
                            value={cartEmail}
                            />
                        </div>
                        <button type='submit' className='btn btn-primary'>Đặt hàng</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default CartScreen
