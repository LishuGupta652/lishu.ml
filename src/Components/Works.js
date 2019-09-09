import React from 'react'
import dwarf from '../image/dwarf.jpg'
import azaelindia from '../image/azaelindia.jpg';
import payingguest from '../image/payingguest.jpg';

import Bounce from 'react-reveal/Bounce';

const Works = () => {
    return (
        <div className="work-wrapper">
        <div className="work" id="work">
            <div className="container">
                <Bounce left>
                    <h1>Works</h1>
                </Bounce>
            </div>
            <div className="right-img">
                <a href="https://www.azaelindia.com" target="_blank" >
                    <img src={azaelindia} alt="Azael HomePage" />
                </a>
            </div>
        </div>

        <div className="guest">
            <div className="content"> 
            <a href="https://www.dwarf.ga" target="_blank">
                <img src={dwarf}  alt="Dwarf Company"/>
            </a>

            </div>
        </div>

        <div className="paying">
            <div className="content"> 
            <a href="http://www.payingguest.ml" target="_blank">
                <img src={payingguest}  alt="Paying Gueset"/>
            </a>

            </div>
        </div>
        </div>
    )
}

export default Works
