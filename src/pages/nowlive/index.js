import React, { Component } from 'react';
import './../../App.css';
import Loading from './../../components/loading'

class NowLivePage extends Component {
    constructor(){
        super();
        this.state = {
            live: {},
            loading: true
          };
    }

    componentDidMount(){
        fetch("https://cdn-hitnetwork-schedules.scadigital.io/api/v1/schedules/2day/nowplaying")
        .then(response => {
            return response.json();
        })
        .then(data => {
            this.setState({ live: data, loading: false})
        })
        .catch(e => {
            console.log(e);
        })
    }

    render() {
        const { live, loading } = this.state;
        
        if (loading) {
            return(
                <Loading text="Loading... hold on!" />
            )
        }

        return(
            <div className="page">
                <p className="page__heading">
                    2DayFM Now Live
                </p>
                {
                    <div className="nowlive" key={live.url}>
                        <p className="nowlive__description">{live.title}</p>
                        <img alt="live" className="nowlive__img" src={live && live.image ? live.image.url : null}></img>
                    </div>
                }
            </div>
        )
    }
}
export default NowLivePage