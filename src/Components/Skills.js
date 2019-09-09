import React from 'react'
import Bounce from 'react-reveal/Bounce';
import Zoom from 'react-reveal/Zoom';

const Skills = () => {
    return (
        <div className="work" id="work">
            
            <div className="down">
                <i class="fa fa-arrow-circle-o-down" aria-hidden="true"></i>
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
                            <Zoom top>
                                <h1>PYTHON</h1>
                            </Zoom>
                        <div className="rotate">
                        <i class="devicon-python-plain colored"></i>
                        </div>
                    </div>
                </div>

                <div className="two">
                    <Zoom top>
                        Web Development
                    </Zoom>
                    <div className="padding-top-5">
                        <i class="devicon-html5-plain colored"></i>
                        <i class="devicon-css3-plain colored"></i>
                        <i class="devicon-javascript-plain colored"></i>
                        <i class="devicon-react-original colored"></i>
                        <i class="devicon-bootstrap-plain colored"></i>

                    </div>
                    </div>
                    <div className="three">
                        <Zoom top>
                            Android Development
                        </Zoom>
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
