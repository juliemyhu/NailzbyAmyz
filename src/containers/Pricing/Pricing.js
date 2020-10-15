import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import TitleLabel from '../../components/TitleLabel/TitleLabel';
import './Pricing.css';
import Aux from '../../hoc/Aux/Aux';


class Pricing extends Component {
  render() {
    return (
        <Aux>
            <div className="Pricing">
                <TitleLabel>PRICING</TitleLabel>
                <div id="Background">
                    <ul id="list">
                        Nail Services by Amy
                        <li id="service">gel manicure $25
                        </li> 
                        <li id="service">gel pedicre $25
                        </li> 
                        <li id="service">acrylic $40+                       
                        </li> 
                    </ul>
                </div>

            </div>
        </Aux>
    );
  }
}

export default Pricing;
