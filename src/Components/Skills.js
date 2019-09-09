import React from 'react'
import Bounce from 'react-reveal/Bounce';
import Zoom from 'react-reveal/Zoom';
import { Link } from "react-scroll";

const Skills = () => {
    return (
        <div className="skill" id="skill">
            
            <div className="down">
                <Link 
                        to="work"
                        spy={true}
                        smooth={true}
                        hashSpy={true}
                        offset={0}
                        duration={500}
                        delay={300} >
                            <i class="fa fa-arrow-circle-o-down" aria-hidden="true"></i>
                </Link>   
            </div>

            <div className="container">
                <div className="top">
                    <Bounce left>
                    <h1>SKILLS</h1>
                    </Bounce>
                </div>

                <div className="grid">
                    <div className="one">
                        <div className="content">
                    
                                <h1>PYTHON</h1>
                    
                        <div className="rotate">
                        <i class="devicon-python-plain colored"></i>
                        </div>
                    </div>
                </div>

                <div className="two">
                    
                        Web Development
                    
                    <div className="padding-top-5">
                        <i class="devicon-html5-plain colored"></i>
                        <i class="devicon-css3-plain colored"></i>
                        <i class="devicon-javascript-plain colored"></i>
                        <i class="devicon-react-original colored"></i>
                        <i class="devicon-bootstrap-plain colored"></i>

                    </div>
                    </div>
                    <div className="three">
                        
                            Android Development
                        
                        <div className="android">
                        <i class="devicon-android-plain-wordmark colored"></i>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    )
}

export default Skills
