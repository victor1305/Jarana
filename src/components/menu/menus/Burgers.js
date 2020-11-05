import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';

import footerImage from '../../../images/jaranaback_opt(1).png'
import logoTitleBurger from '../../../images/iconos/Iconos Optimizados/burger.png'

const Burgers = () => {
    
    return (

        <div className = "item-container">
            <h2 className = "item-title">Hamburguesas</h2>
            <img className = "logo-title-item" src = {logoTitleBurger} alt = "logo-titulo"/>
            <Container>
                <Row>
                    <Col xs = {9} sm = {9} md = {9} xl = {9}>
                        <p className = "item-p-text">Hamburguesa Clásica</p>
                    </Col>
                    <Col xs = {3} sm = {3} md = {3} xl = {3}>
                        <p className = "item-p-price">5.00€</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs = {9} sm = {9} md = {9} xl = {9}>
                        <p className = "item-p-text">Hamburguesa de pollo</p>
                    </Col>
                    <Col xs = {3} sm = {3} md = {3} xl = {3}>
                        <p className = "item-p-price">5.00€</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs = {9} sm = {9} md = {9} xl = {9}>
                        <p className = "item-p-text">Hamburguesa Jarana <small>(carne, queso, bacon, lechuga, tomate, mayonesa y huevo frito)</small></p>
                    </Col>
                    <Col xs = {3} sm = {3} md = {3} xl = {3}>
                        <p className = "item-p-price">7.00€</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs = {9} sm = {9} md = {9} xl = {9}>
                        <p className = "item-p-text"><small>Todas nuestras hamburguesas incluyen patatas fritas.</small></p>
                    </Col>
                    <Col xs = {3} sm = {3} md = {3} xl = {3}>
                        <p className = "item-p-price"></p>
                    </Col>
                </Row>
                <div className = "item-footer-container">
                    <p className = "item-footer">*Suplemento de terraza: 10%</p>
                    <p className = "item-footer">*Todos los precios llevan el I.V.A. incluido</p>
                </div>
                <img className = "item-footer-image" src = {footerImage} alt = "logo"/>
            </Container>
        </div>
    );
}
 
export default Burgers;