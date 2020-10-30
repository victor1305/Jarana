import React from 'react';

import imagen from '../../images/jaranaback.png'

const Home = () => {
    return (
        <div className = "image-container">
            {/* <h1 className = "home-title">Gran Inauguración:</h1>
            <h1 className = "home-title">31 Octubre 13.00</h1> */}
            <img className = "image" src = {imagen} alt = "imagen principal"/>
        </div>
    );
}
 
export default Home;