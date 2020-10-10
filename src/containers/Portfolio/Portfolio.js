import React, { Component } from 'react';

import './Portfolio.css';
import TitleLabel from '../../components/TitleLabel/TitleLabel';
// import ReadyBook from '../../components/ReadyBook/ReadyBook';
import Aux from '../../hoc/Aux/Aux';
import SlideShow from '../../components/SlideShow/SlideShow';

class Portfolio extends Component {
    render() {
        return (
            <Aux>
                <div className="Portfolio">
                    <TitleLabel>
                        PORTFOLIO
                    </TitleLabel>
                <div id="portfolioBackground">
                    <SlideShow></SlideShow>
                </div>
                 

                </div>
            </Aux>
        )
    }
}

export default Portfolio