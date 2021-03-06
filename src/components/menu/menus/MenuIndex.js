import React from 'react';
import cacerola from '../../../images/icons/puchero.png'

const MenuIndex = () => {
    return (
        <div className = "item-container">
            <h2 className = "menu-items first-menu">Menú del día</h2>
            <p className = "p-menu-index">(Primero, segundo, bebida, pan, postre o café)</p>
            <h3 className = "menu-items">10.90 €</h3>
            <br></br>
            <h2 className = "menu-items">Medio Menú</h2>
            <p className = "p-menu-index">(Primero o segundo, bebida, pan, postre o café)</p>
            <h3 className = "menu-items">6.95 €</h3>
            <img src = {cacerola} className = "menu-index-images" alt = "principalphoto"/>
        </div>
    );
}
 
export default MenuIndex;