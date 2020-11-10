import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import './BookingForm.css';
// import axios from '../../axios-appt';
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

class OpenForm extends Component {
 render() {
     return (
         <div>
             <form id="idlabel"> 
                <div id="disclaimeralert">***Amy is currently not taking appointments. Please contact her in the links below if you are a new or returning client.***</div>
                 <div>
                 <label >Email address
                    <input type="email"></input>
                  </label>
                 </div>
                <label>Date
                    <input type="date"></input>
                <label>Time
                    <input type="time"></input>
                  </label>
                    <button className="btn btn-primary" id="submitButton" >Submit</button>
                </label>
             </form>
         </div>
     )
    }
}


export default (withRouter(OpenForm));


// Copy
// <form>
//   <div class="form-group">
//     <label for="exampleInputEmail1">Email address</label>
//     <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
//     <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
//   </div>
//   <div class="form-group">
//     <label for="exampleInputPassword1">Password</label>
//     <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
//   </div>
//   <div class="form-check">
//     <input type="checkbox" class="form-check-input" id="exampleCheck1">
//     <label class="form-check-label" for="exampleCheck1">Check me out</label>
//   </div>
//   <button type="submit" class="btn btn-primary">Submit</button>
// </form>