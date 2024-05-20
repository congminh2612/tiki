import React, { useEffect, useState } from 'react'
import '../style/header.css'
import BookData from '../../../assets/data/book.json'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
const Header = () => {
    const carts = useSelector(state => state.cart.carts)
    const navigate = useNavigate()
    const [books, setBooks] = useState(BookData)
    const [search, setSearch] = useState('')
    const [searchResults, setSearchResults] = useState([])
    const handleChange = (e) => {
        setSearch(e.target.value);
    };

    useEffect(() => {
        if (search) {
            const results = books.filter(book =>
                book.title.toLowerCase().includes(search.toLowerCase())
            );
            setSearchResults(results);
        } else {
            setSearchResults([]);
        }
    }, [search, books]);
    return (
        <div className=' bg-white header__container '>
            <div className=' header__wrapper '>
                <Link to={'/'}>
                    <div className='d-none d-md-block'>
                        <img src="images/logo.png" alt="logo" width='72px' />
                    </div >
                </Link>

                <div>
                    <div className='d-flex'>
                        <div className='search-wrapper position-relative ms-5'>
                            <input
                                className='input__header'
                                type="text"
                                placeholder='Freeship đến 30K'
                                value={search}
                                onChange={handleChange}
                            />
                            {search && (
                                <div className='search-results'>
                                    {searchResults.length > 0 && (
                                        <ul>
                                            {searchResults.map(book => (
                                                <li key={book.id} onClick={() => {
                                                    navigate(`book/${book.id} `)
                                                    setSearch('')
                                                }
                                                }>
                                                    <img src={book.thumbnail} alt={book.title} width='50' />
                                                    <span>{book.title}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            )}
                            <img src="icons/icon-search.png" alt="search" width='20px' className='icon__search position-absolute' />
                        </div>
                        <div>
                            <button className='button__header '>Tìm kiếm</button>
                        </div>
                    </div>

                </div>

                <div className='d-none d-md-flex align-items-center ' >
                    <div className="d-flex align-items-center ">
                        <img src="icons/icon-home.png" alt="home" width='24px' />
                        <Link to='/'>
                            <div className=' ms-1 text-color__header'>
                                <p>Trang chủ</p>
                            </div>
                        </Link>
                    </div>
                    <div className="d-flex align-items-center ms-4">
                        <img src="icons/icon-user.png" alt="home" width='24px' />
                        <div className=' ms-1 text-color__header'>
                            <p>Tài khoản</p>
                        </div>
                    </div>
                    <div onClick={() => navigate('/cart')} className="d-flex align-items-center border-start ms-4 ps-4 position-relative cursor-pointer">
                        <img src="icons/icon-cart.png" alt="home" width='24px' />
                        {carts && carts.length > 0 && <div className="position-absolute badge__header">{carts.length}</div>}
                    </div>
                </div>
            </div>


        </div >
    )
}

export default Header
