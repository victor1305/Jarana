import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';

import footerImage from '../../../images/jaranaback_opt(1).png'
import logoTitleColdDishes from '../../../images/iconos/Iconos Optimizados/jamon.png'

const ColdDishes = () => {
    
    return (

        <div className = "item-container">
            <h2 className = "item-title">Raciones Frias</h2>
            <img className = "logo-title-item" src = {logoTitleColdDishes} alt = "logo-titulo"/>
            <Container >
                <Row>
                    <Col xs = {6} sm = {6} md = {6} xl = {6}>
                        <p className = "item-p-text"></p>
                    </Col>
                    <Col xs = {3} sm = {3} md = {3} xl = {3}> 
                        <p className = "item-p-price">Media</p>
                    </Col>
                    <Col xs = {3} sm = {3} md = {3} xl = {3}> 
                        <p className = "item-p-price">Entera</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs = {9} sm = {9} md = {9} xl = {9}>
                        <p className = "item-p-text">Tabla de jamón ibérico</p>
                    </Col>
                    <Col xs = {3} sm = {3} md = {3} xl = {3}>
                        <p className = "item-p-price">18.00€</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs = {9} sm = {9} md = {9} xl = {9}>
                        <p className = "item-p-text">Tabla mixta <small>(Jamón ibérico y queso curado)</small></p>
                    </Col>
                    <Col xs = {3} sm = {3} md = {3} xl = {3}>
                        <p className = "item-p-price">18.00€</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs = {9} sm = {9} md = {9} xl = {9}>
                        <p className = "item-p-text">Ensaladilla Rusa</p>
                    </Col>
                    <Col xs = {3} sm = {3} md = {3} xl = {3}>
                        <p className = "item-p-price">7.00€</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs = {6} sm = {6} md = {6} xl = {6}>
                        <p className = "item-p-text">Lacón a la gallega</p>
                    </Col>
                    <Col xs = {3} sm = {3} md = {3} xl = {3}>
                        <p className = "item-p-price">6.10€</p>
                    </Col>
                    <Col xs = {3} sm = {3} md = {3} xl = {3}>
                        <p className = "item-p-price">11.00€</p>
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
 
export default ColdDishes;