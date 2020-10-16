import React, {Component} from 'react';
import './About.css';
import TitleLabel from '../../components/TitleLabel/TitleLabel';
// import ReadyBook from '../../components/ReadyBook/ReadyBook';
import Aux from '../../hoc/Aux/Aux';
import aboutme from '../../components/Images/aboutme.jpg';

class About extends Component {
    render() {
        return (
            <Aux>
                <div className="About">
                    <TitleLabel>ABOUT</TitleLabel>
                        <div id="Background">
                            <img src={aboutme} alt="aboutme" id="aboutpic"></img>
                            <p id="aboutbio">
                                <span>
                                    Amy Zhao is a self-taught Nail Artist in the San Francisco Bay Area. <br/>
                                    Before immigrating to the US from China in 2018, she learned how to do <br/>
                                    nails so that she would have a viable skill in America. What came <br/>
                                    from necessity, quickly became her life and dream. Now she is ready to <br/>
                                    turn this dream into a reality.
                                </span>
                            </p>
                        </div>
                </div>
            </Aux>
        )
    }
}

export default About