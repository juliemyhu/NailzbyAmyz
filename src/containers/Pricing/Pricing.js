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
                        <li id="service">gel manicure . . . . $25
                        </li> 
                        <li id="service">gel pedicure . . . .  . $25
                        </li> 
                        <li id="service">acrylic . . . . . . . . . . $40+                       
                        </li> 
                        <li id="service">nail art . . . . . . . . . . .$5+                       
                        </li>
                        <div id="question">Questions? Contact us below! </div>
                    </ul>
                
                </div>
               

            </div>
            <p id="break"></p>
        </Aux>
    );
  }
}

export default Pricing;
