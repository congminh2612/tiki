import React from 'react'
import HomeFilter from './components/HomeFilter'
import HomeStage from './components/HomeStage'

const HomeScreen = () => {
    return (
        <div className='container'>
            <div className='row'>
                <div className="col-2 d-none d-md-block">
                    <HomeFilter />
                </div>
                <div className="col-10">
                    <HomeStage />
                </div>
            </div>
        </div>
    )
}

export default HomeScreen
