import React, { Component } from 'react';
import './../../App.css';
import { fetchPodcasts } from "./../../actions/podcasts"
import { connect } from "react-redux";
import Loading from './../../components/loading'

class Podcasts extends Component {

    componentDidMount(){
        this.props.dispatch(fetchPodcasts());
    }

    render() {
        const { error, loading, podcasts } = this.props;
        if (error) {
            return <div>Error! {error.message}</div>;
        }
    
        if (loading) {
            return(
                <Loading text="Loading... hold on!" />
            )
        }

        return(
            <div className="page">
                <p className="page__heading">
                    2DayFM Top Podcasts
                </p>
                {            
                    podcasts.map(item => {
                    return(
                        <div className="podcast" key={item.objectReference}>
                            <span className="podcast__title">{item.title}</span>

                            <picture>
                                <source className="podcast__image" media="(max-width: 768px)" srcSet={item && item.images ? item.images[1].url : null}></source>
                                <source className="podcast__image" srcSet={item && item.images ? item.images[3].url : null}></source>
                                <img className="podcast__image" alt="podcast" srcSet={item && item.images ? item.images[1].url : null}></img>
                            </picture>

                            <p className="podcast__description">
                                {item.description}
                            </p>
                        </div>
                    )
                })}
                
            </div>
        )
    }
}

const mapStateToProps = state => ({
    podcasts: state.podcasts.items,
    loading: state.podcasts.loading,
    error: state.podcasts.error
});

export default connect(mapStateToProps)(Podcasts)