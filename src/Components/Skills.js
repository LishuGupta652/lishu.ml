import React from 'react'
import Bounce from 'react-reveal/Bounce';
import { Link } from "react-scroll";

import Zoom from 'react-reveal/Zoom';
import HeadShake from 'react-reveal/HeadShake';

const Skills = () => {
    return (
        <div className="skill" id="skill">
            
            <div className="down">
                <Link 
                        to="work"
                        spy={true}
                        smooth={true}
                        hashSpy={true}
                        offset={25}
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
                                <HeadShake>
                                <h1>PROGRAMMING</h1>
                                </HeadShake>
                        <div className="flex">
                            <i class="devicon-c-plain colored"></i>
                            <i class="devicon-cplusplus-plain colored"></i>
                            <i class="devicon-python-plain colored"></i>
                            <i class="devicon-java-plain colored"></i>
                            <i class="devicon-javascript-plain colored"></i>

                        </div>
                    </div>
                </div>

                <div className="two">
                    
                    <HeadShake>
                        Web Development
                    </HeadShake>
                    
                    <div className="padding-top-5">
                        <i class="devicon-html5-plain colored"></i>
                        <i class="devicon-css3-plain colored"></i>
                        <i class="devicon-javascript-plain colored"></i>
                        <i class="devicon-react-original colored"></i>
                        <i class="devicon-bootstrap-plain colored"></i>

                    </div>
                    </div>
                    <div className="three">
                        
                        <HeadShake>
                            Android Development
                        </HeadShake>
                        
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
