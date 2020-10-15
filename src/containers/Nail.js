import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import './Nail.css';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Home from './Home/Home';
import About from './About/About';
import Portfolio from './Portfolio/Portfolio';
import Pricing from './Pricing/Pricing';
import Book from './Book/Book';
// import TeamMember from './TeamMember/TeamMember';
// import Thanks from './Thanks/Thanks';
import ScrollToTop from '../hoc/ScrollToTop/ScrollToTop';


class  Nail extends Component {
    render () {
        return (
            <div className="Nail">
                <Navbar />
                <ScrollToTop>
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/about" exact component={About} />
                        <Route path="/portfolio" exact component={Portfolio} />
                        <Route path="/pricing" exact component={Pricing} />
                        <Route path="/book" exact component={Book} />
                        {/* <Route path="/team" exact component={TeamMember} />
                        <Route path="/thankyou" exact component={Thanks} /> */}
                        {/* <Route render={() => <center><h1 id="error">404 Not Found</h1></center>} /> */}
                    </Switch>
                </ScrollToTop>

                <Footer />
            </div>
        );
    }
}

export default Nail;