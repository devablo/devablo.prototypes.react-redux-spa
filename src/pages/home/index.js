import React, { Component } from 'react';
import './../../App.css';
import Weather from './../../components/weather'

class Home extends Component {
    render() {
        return(
            <div className="page">
                <p className="page__heading">
                    Welcome to 2DayFM
                </p>

                <Weather location="Glebe" />
            </div>
        )
    }
}

export default Home;