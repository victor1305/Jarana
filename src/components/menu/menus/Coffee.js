import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';

import footerImage from '../../../images/jaranaBackLittle.png'
import logoTitleCoffee from '../../../images/icons/liquors.png'

const Coffee = () => {
    
    return (

        <div className = "item-container">
            <h2 className = "item-title">Bebidas</h2>
            <img className = "logo-title-item" src = {logoTitleCoffee} alt = "logo-titulo"/>
            <Container>
                <Row>
                    <Col xs = {9} sm = {9} md = {9} xl = {9}>
                        <p className = "item-p-text">Café con leche, solo o cortado</p>
                    </Col>
                    <Col xs = {3} sm = {3} md = {3} xl = {3}> 
                        <p className = "item-p-price">1.80€</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs = {9} sm = {9} md = {9} xl = {9}>
                        <p className = "item-p-text">Café bombón</p>
                    </Col>
                    <Col xs = {3} sm = {3} md = {3} xl = {3}>
                        <p className = "item-p-price">2.90€</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs = {9} sm = {9} md = {9} xl = {9}>
                        <p className = "item-p-text">Cola Cao</p>
                    </Col>
                    <Col xs = {3} sm = {3} md = {3} xl = {3}>
                        <p className = "item-p-price">2.20€</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs = {9} sm = {9} md = {9} xl = {9}>
                        <p className = "item-p-text">Infusiones</p>
                    </Col>
                    <Col xs = {3} sm = {3} md = {3} xl = {3}>
                        <p className = "item-p-price">1.80€</p>
                    </Col>
                </Row>
                {/* <Row>
                    <Col xs = {9} sm = {9} md = {9} xl = {9}>
                        <p className = "item-p-text">Baileys</p>
                    </Col>
                    <Col xs = {3} sm = {3} md = {3} xl = {3}>
                        <p className = "item-p-price">4.20€</p>
                    </Col>
                </Row> */}
                <Row>
                    <Col xs = {9} sm = {9} md = {9} xl = {9}>
                        <p className = "item-p-text">Crema de orujo, pacharán o hierbas</p>
                    </Col>
                    <Col xs = {3} sm = {3} md = {3} xl = {3}>
                        <p className = "item-p-price">2.90€</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs = {9} sm = {9} md = {9} xl = {9}>
                        <p className = "item-p-text">Brandy</p>
                    </Col>
                    <Col xs = {3} sm = {3} md = {3} xl = {3}>
                        <p className = "item-p-price">2.90€</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs = {9} sm = {9} md = {9} xl = {9}>
                        <p className = "item-p-text">Combinado Nacional</p>
                    </Col>
                    <Col xs = {3} sm = {3} md = {3} xl = {3}>
                        <p className = "item-p-price">6.50€</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs = {9} sm = {9} md = {9} xl = {9}>
                        <p className = "item-p-text">Combinado importación</p>
                    </Col>
                    <Col xs = {3} sm = {3} md = {3} xl = {3}>
                        <p className = "item-p-price">7.00€</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs = {9} sm = {9} md = {9} xl = {9}>
                        <p className = "item-p-text">Combinado premium</p>
                    </Col>
                    <Col xs = {3} sm = {3} md = {3} xl = {3}>
                        <p className = "item-p-price">8.00€</p>
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
 
export default Coffee;