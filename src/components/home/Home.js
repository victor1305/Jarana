import React from 'react';

import imagen from '../../images/fondo.jpg'
import christmas1 from '../../images/navidad1.png'

const Home = () => {
    return (
        <div className = "image-container">
            <div className = "christmas-1-container">
                <img className = "christmas-1" src = {christmas1} alt = "Adorno Navidad"/>
                <img className = "christmas-1" src = {christmas1} alt = "Adorno Navidad"/>
                <img className = "christmas-1" src = {christmas1} alt = "Adorno Navidad"/>
            </div>
            <h1 className = "home-title">Bar Cafetería Jarana</h1>
            <img className = "image" src = {imagen} alt = "imagen principal"/>
        </div>
    );
}
 
export default Home;