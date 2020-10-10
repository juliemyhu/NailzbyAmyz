import React from 'react';
import Aux from '../../hoc/Aux/Aux';
import './TitleLabel.css'

const TitleLabel = (props) => {
    return (
        <Aux>
            <div className="TitleLabel">
                <h1 id="title">{props.children}</h1>
            </div>
            <br></br>
            <br></br>
        </Aux>
       
    )
  }

export default TitleLabel;