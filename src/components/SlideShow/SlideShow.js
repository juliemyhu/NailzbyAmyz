import React, { Component } from 'react';

import './SlideShow.css';
import Aux from '../../hoc/Aux/Aux';
import portfolio1 from '../Images/portfolio1.jpg';
import portfolio2 from '../Images/portfolio2.jpg';
import portfolio3 from '../Images/portfolio3.jpg';
import portfolio4 from '../Images/portfolio4.jpg';
import portfolio5 from '../Images/portfolio5.jpg';
import portfolio6 from '../Images/portfolio6.jpg';



class SlideShow extends Component {

    render () {
        return (
            <Aux>
                <div className="SlideShow"> 

                    {/* Image Modal */}
                    <div className="modal fade" id="exampleModal11" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-body">
                                    <img src={portfolio1} alt="..." id="modalPic"></img>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal fade" id="exampleModal12" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-body">
                                    <img src={portfolio2} alt="..." id="modalPic"></img>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal fade" id="exampleModal13" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-body">
                                    <img src={portfolio3} alt="..." id="modalPic"></img>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal fade" id="exampleModal14" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-body">
                                    <img src={portfolio4} alt="..." id="modalPic"></img>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal fade" id="exampleModal15" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-body">
                                    <img src={portfolio5} alt="..." id="modalPic"></img>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal fade" id="exampleModal16" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-body">
                                    <img src={portfolio6} alt="..." id="modalPic"></img>
                                </div>
                            </div>
                        </div>
                    </div>
 


                    {/* Gallery */}
                    <div className="row">
                        <div className="column">
                            <img src={portfolio1} alt="..." data-toggle="modal" data-target="#exampleModal11"></img>
                            <img src={portfolio2} alt="..." data-toggle="modal" data-target="#exampleModal12"></img>
                            <img src={portfolio3} alt="..." data-toggle="modal" data-target="#exampleModal13"></img>
                        </div>
                        <div className="column">
                            <img src={portfolio4} alt="..." data-toggle="modal" data-target="#exampleModal14"></img>
                            <img src={portfolio5} alt="..." data-toggle="modal" data-target="#exampleModal15"></img>
                            <img src={portfolio6} alt="..." data-toggle="modal" data-target="#exampleModal16"></img>
                        </div>
                    </div>

                </div>
            </Aux>
            
        );
    }
}



export default SlideShow;