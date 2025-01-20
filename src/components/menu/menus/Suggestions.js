import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';

import footerImage from '../../../images/jaranaBackLittle.png'
import logoTitleSuggestions from '../../../images/icons/suggestions.png'

const Suggestions = () => {
    
    return (

        <div className = "item-container">
            <h2 className = "item-title">Sugerencias</h2>
            <img className = "logo-title-item" src = {logoTitleSuggestions} alt = "logo-titulo"/>
            <Container >
                <Row>
                    <Col xs = {6} sm = {6} md = {6} xl = {6}>
                        <p className = "item-p-text"></p>
                    </Col>
                </Row>
                <Row>
                    <Col xs = {9} sm = {9} md = {9} xl = {9}>
                        <p className = "item-p-text">Bandeja de entrecot con patatas y pimientos</p>
                    </Col>
                    <Col xs = {3} sm = {3} md = {3} xl = {3}>
                        <p className = "item-p-price">21.00€</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs = {9} sm = {9} md = {9} xl = {9}>
                        <p className = "item-p-text">Ensalada de burrata con tomate</p>
                    </Col>
                    <Col xs = {3} sm = {3} md = {3} xl = {3}>
                        <p className = "item-p-price">16.00€</p>
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
 
export default Suggestions;