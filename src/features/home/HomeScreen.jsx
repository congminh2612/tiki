import React, { useState } from 'react'
import HomeFilter from './components/HomeFilter'
import HomeStage from './components/HomeStage'

const HomeScreen = () => {
    const [filters, setFilters] = useState({
        category: '',
        suppliers: {},
        rating: 0,
    });
    return (
        <div className='container'>
            <div className='row'>
                <div className="col-2 d-none d-md-block">
                    <HomeFilter filters={filters} setFilters={setFilters} />
                </div>
                <div className="col-10">
                    <HomeStage filters={filters} />
                </div>
            </div>
        </div>
    )
}

export default HomeScreen
