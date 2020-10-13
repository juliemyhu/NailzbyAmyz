import React, { Component } from 'react';

import './Book.css';
import TitleLabel from '../../components/TitleLabel/TitleLabel';
import BookingForm from '../../components/BookingForm/BookingForm';


class Book extends Component {
    render () {
        return (
            <div className="Book"> 
                <TitleLabel>BOOK NOW</TitleLabel>
                <div id="bookingBackground">
                    <BookingForm />
                </div>
                <br></br>
            </div>
        );
    }
}

export default Book;