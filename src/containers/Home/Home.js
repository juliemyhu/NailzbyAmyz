import React, {Component} from 'react';
import './Home.css';
import TitleLabel from '../../components/TitleLabel/TitleLabel';
// import ReadyBook from '../../components/ReadyBook/ReadyBook';
import Aux from '../../hoc/Aux/Aux';


class Home extends Component {
    render() {
        return (
            <Aux>
                <div className="Home">
                    <TitleLabel>Home</TitleLabel>
                        <div id="Background">
                            <p id="Homebio">
                                Professional Nail Services in Bay Area
                              
                            </p>
                        </div>
                </div>
            </Aux>
        )
    }
}

export default Home