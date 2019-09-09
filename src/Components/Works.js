import React from 'react'
import dwarf from '../image/dwarf.jpg'
import azaelindia from '../image/azaelindia.jpg';
import payingguest from '../image/payingguest.jpg';

const Works = () => {
    return (
        <div className="work-wrapper">
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
            <div className="content"> 
            <a href="https://www.dwarf.ga">
                <img src={dwarf}  alt="Dwarf Company"/>
            </a>

            </div>
        </div>

        <div className="paying">
            <div className="content"> 
            <a href="https://www.payingguest.ml">
                <img src={payingguest}  alt="Paying Gueset"/>
            </a>

            </div>
        </div>
        </div>
    )
}

export default Works
