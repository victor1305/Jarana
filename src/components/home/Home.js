import React from 'react';

import imagen from '../../images/fondo.jpg'

const Home = () => {
    return (
        <div className = "image-container">
            <h1 className = "home-title">Bar Cafetería Jarana</h1>
            <img className = "image" src = {imagen} alt = "imagen principal"/>
        </div>
    );
}
 
export default Home;