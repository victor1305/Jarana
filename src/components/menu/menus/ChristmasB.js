import React from 'react';

import footerImage from '../../../images/jaranaBackLittle.png'
import logoTitleSnacks from '../../../images/icons/christmas.png'

const ChristmasB = () => {
    return (
        <div className = "item-container">
            <h2 className = "item-title">Menú Navidad 2</h2>
            <img className = "logo-title-item-christmas" src = {logoTitleSnacks} alt = "logo-titulo"/>
            <h4 className = "item-christmas-subtitle">Entrantes</h4>
            <p className = "item-christmas-p">Langostinos a la Plancha</p>
            <p className = "item-christmas-p">Ensalada de Ventresca con Pimientos</p>
            <p className = "item-christmas-p">Tabla de Jamón Ibérico y Queso Curado</p>
            <p className = "item-christmas-p">Choricitos a la Sidra</p>
            <h4 className = "item-christmas-subtitle">Segundo Plato (A elegir)</h4>
            <p className = "item-christmas-p">Chuletón al Gusto</p>
            <p className = "item-christmas-p">Merluza en Salsa Verde</p>
            <h4 className = "item-christmas-subtitle">Postre (A elegir)</h4>
            <p className = "item-christmas-p">Arroz con Leche, Natillas o Flan</p>
            <h4 className = "item-christmas-subtitle">Bebidas (A elegir)</h4>
            <p className = "item-christmas-p">Rioja de la Casa y Blanco de Rueda o Albariño (2 por cada 4 personas)</p>
            <p className = "item-christmas-p">Cerveza o Refresco (2 por persona)</p>
            <br></br>
            <p className = "item-christmas-p">Café y copa de cava</p>
            <h3 className = "item-christmas-price">45€</h3>
            <div className = "item-footer-container-christmas">
                <p className = "item-footer-christmas">*Todos los precios llevan el I.V.A. incluido</p>
            </div>
            <img className = "item-footer-image" src = {footerImage} alt = "logo"/>
        </div>
    );
}
 
export default ChristmasB;