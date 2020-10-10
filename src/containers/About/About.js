import React, {Component} from 'react';
import './About.css';
import TitleLabel from '../../components/TitleLabel/TitleLabel';
// import ReadyBook from '../../components/ReadyBook/ReadyBook';
import Aux from '../../hoc/Aux/Aux';


class About extends Component {
    render() {
        return (
            <Aux>
                <div className="About">
                    <TitleLabel>ABOUT</TitleLabel>
                        <p>
                            Amy Zhao is a self taught nail artist from China. 
                        </p>
                </div>
            </Aux>
        )
    }
}

export default About