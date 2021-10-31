import React from 'react';
import image from '../assets/images/coding-1853305_1920.jpg';

class Main_image extends React.Component{

    render() {
        return (
            <div className="main_image">
            <img src={image} alt=""></img>
            </div>
        );
    }
}

export default Main_image;