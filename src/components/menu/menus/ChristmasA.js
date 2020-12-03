import React from 'react';

import footerImage from '../../../images/jaranaBackLittle.png'
import logoTitleSnacks from '../../../images/icons/christmas.png'

const ChristmasA = () => {
    return (
        <div className = "item-container">
            <h2 className = "item-title">Menú Navidad 1</h2>
            <img className = "logo-title-item-christmas" src = {logoTitleSnacks} alt = "logo-titulo"/>
            <h4 className = "item-christmas-subtitle">Entrantes (Para cada 4 personas)</h4>
            <p className = "item-christmas-p">Revuelto de Morcilla</p>
            <p className = "item-christmas-p">Champiñones con Jamón</p>
            <p className = "item-christmas-p">Entremeses Variados</p>
            <p className = "item-christmas-p">Gambas al Ajillo</p>
            <h4 className = "item-christmas-subtitle">Segundo Plato (A elegir)</h4>
            <p className = "item-christmas-p">Entrecot con patatas panadera</p>
            <p className = "item-christmas-p">Lubina o Dorada al Horno</p>
            <h4 className = "item-christmas-subtitle">Postre (A elegir)</h4>
            <p className = "item-christmas-p">Arroz con Leche, Pudding, Natillas o Flan</p>
            <h4 className = "item-christmas-subtitle">Bebidas (A elegir)</h4>
            <p className = "item-christmas-p">Rioja de la Casa y Blanco de Rueda (2 por cada 4 personas)</p>
            <p className = "item-christmas-p">Cerveza o Refresco (2 por persona)</p>
            <br></br>
            <p className = "item-christmas-p">Café y copa de cava</p>
            <h3 className = "item-christmas-price">35€</h3>
            <div className = "item-footer-container-christmas">
                    <p className = "item-footer-christmas">*Todos los precios llevan el I.V.A. incluido</p>
                </div>
                <img className = "item-footer-image" src = {footerImage} alt = "logo"/>
        </div>
    );
}
 
export default ChristmasA;