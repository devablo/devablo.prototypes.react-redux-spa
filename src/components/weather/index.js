import React, { Component } from 'react';
import './../../App.css';
import { fetchWeather } from "./../../actions/weather"
import { connect } from "react-redux";
import Loading from './../../components/loading'

class Weather extends Component{
    componentDidMount(){
        this.props.dispatch(fetchWeather(this.props.location));
    }

    render(){
        const { error, loading, data } = this.props;
        if (error) {
            return <div>Error! {error.message}</div>;
        }
    
        if (loading) {
            return(
                <Loading text="Loading... hold on!" />
            )
        }

        return (
            <div className="weather">
                <p className="weather__name">{data.name} Weather</p>

                {
                    <div className="weather__container" key={data.id}>
                        <div className="weather_summary">{data && data.weather ? data.weather[0].description : "no data"}</div>
                    </div>
                }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    data: state.weather.data,
    loading: state.weather.loading,
    error: state.weather.error
});

export default connect(mapStateToProps)(Weather)