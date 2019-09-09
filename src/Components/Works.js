import React from 'react'
import azaelindia from '../image/azaelindia.jpg'

const Works = () => {
    return (
        <>
        <div className="work" id="work">
            <div className="container">
                <h1>Works</h1>
            </div>
            <div className="right-img">
                <a href="https://www.azaelindia.com" >
                    <img src={azaelindia} alt="Azael HomePage" />
                </a>
            </div>

        </div>

        <div className="guest">
            <div className="container">
                
            </div>
        </div>
        </>
    )
}

export default Works
