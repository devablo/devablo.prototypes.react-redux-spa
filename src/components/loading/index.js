import React from 'react';
import logo from './../../2day.svg';
import './../../App.css';

const Loading = ({text}) => (
    <div className="loading">
        <span className="loading__text">{text}</span>
        <img src={logo} className="loading__logo" alt="logo" />
    </div>
);

export default Loading;