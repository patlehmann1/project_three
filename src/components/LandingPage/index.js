import React, { Component } from 'react';
import './LandingPage.css';

class LandingPage extends Component {


render() {
    return (
        <div className="lp-wrapper">
        <div className="lp-text">
        <h1 className="lp"><i class="fas fa-search-location"></i> Search</h1>
        <h1 className="lp"><i className="far fa-comments"></i> Connect</h1>
        <h1 className="lp"><i class="fas fa-utensils"></i> Eat</h1>
        </div>
        </div>
    )
}

}

export default LandingPage;