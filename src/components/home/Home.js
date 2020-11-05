import React from 'react';

import imagen from '../../images/jaranaback.png'

const Home = () => {
    return (
        <div className = "image-container">
            <img className = "image" src = {imagen} alt = "imagen principal"/>
        </div>
    );
}
 
export default Home;