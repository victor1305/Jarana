import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';

import footerImage from '../../../images/jaranaback_opt(1).png'
import logoTitleTostas from '../../../images/iconos/Iconos Optimizados/tosta.png'

const Tostas = () => {
    
    return (

        <div className = "item-container">
            <h2 className = "item-title">Tostas</h2>
            <img className = "logo-title-item" src = {logoTitleTostas} alt = "logo-titulo"/>
            <Container >
                <Row>
                    <Col xs = {9} sm = {9} md = {9} xl = {9}>
                        <p className = "item-p-text">Gulas o gambas con alioli</p>
                    </Col>
                    <Col xs = {3} sm = {3} md = {3} xl = {3}>
                        <p className = "item-p-price">6.00€</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs = {9} sm = {9} md = {9} xl = {9}>
                        <p className = "item-p-text">Salmón ahumado con crema de queso</p>
                    </Col>
                    <Col xs = {3} sm = {3} md = {3} xl = {3}>
                        <p className = "item-p-price">6.50€</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs = {9} sm = {9} md = {9} xl = {9}>
                        <p className = "item-p-text">Queso de cabra con cebolla caramelizada</p>
                    </Col>
                    <Col xs = {3} sm = {3} md = {3} xl = {3}>
                        <p className = "item-p-price">6.00€</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs = {9} sm = {9} md = {9} xl = {9}>
                        <p className = "item-p-text">Jamón ibérico con tomate y AOVE</p>
                    </Col>
                    <Col xs = {3} sm = {3} md = {3} xl = {3}>
                        <p className = "item-p-price">6.50€</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs = {9} sm = {9} md = {9} xl = {9}>
                        <p className = "item-p-text">Solomillo con queso brie</p>
                    </Col>
                    <Col xs = {3} sm = {3} md = {3} xl = {3}>
                        <p className = "item-p-price">6.00€</p>
                    </Col>
                </Row>
                {/* <Row>
                    <Col xs = {9} sm = {9} md = {9} xl = {9}>
                        <p className = "item-p-text">Bacon con huevos de codorniz</p>
                    </Col>
                    <Col xs = {3} sm = {3} md = {3} xl = {3}>
                        <p className = "item-p-price">6.00€</p>
                    </Col>
                </Row> */}
                <div className = "item-footer-container">
                    <p className = "item-footer">*Suplemento de terraza: 10%</p>
                    <p className = "item-footer">*Todos los precios llevan el I.V.A. incluido</p>
                </div>
                <img className = "item-footer-image" src = {footerImage} alt = "logo"/>
            </Container>
        </div>
    );
}
 
export default Tostas;