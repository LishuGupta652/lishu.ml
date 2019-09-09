import React from 'react'

const Skills = () => {
    return (
        <div className="work" id="work">
            
            <div className="down">
                <i class="fa fa-arrow-circle-o-down" aria-hidden="true"></i>
            </div>

            <div className="container">
                <div className="top">
                    <h1>SKILLS</h1>
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
