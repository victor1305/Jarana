import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';

import footerImage from '../../../images/jaranaBackLittle.png'
import logoTitlePizzas from '../../../images/icons/pizza.png'

const Pizzas = () => {
  return (
    <div className = "item-container">
      <h2 className = "item-title">Pizzas</h2>
      <img className = "logo-title-item" src = {logoTitlePizzas} alt = "logo-titulo"/>            
      <Container >
        <Row>
          <Col xs = {9} sm = {9} md = {9} xl = {9}>
            <p className = "item-p-text">4 Quesos</p>
          </Col>
          <Col xs = {3} sm = {3} md = {3} xl = {3}>
            <p className = "item-p-price">10.00€</p>
          </Col>
        </Row>
        <Row>
          <Col xs = {9} sm = {9} md = {9} xl = {9}>
            <p className = "item-p-text">Prosciutto</p>
          </Col>
          <Col xs = {3} sm = {3} md = {3} xl = {3}>
            <p className = "item-p-price">10.00€</p>
          </Col>
        </Row>
        <Row>
          <Col xs = {9} sm = {9} md = {9} xl = {9}>
            <p className = "item-p-text">Barbacoa con pollo</p>
          </Col>
          <Col xs = {3} sm = {3} md = {3} xl = {3}>
            <p className = "item-p-price">11.00€</p>
          </Col>
        </Row>
        <Row>
          <Col xs = {9} sm = {9} md = {9} xl = {9}>
            <p className = "item-p-text">Jamón york, bacon y champiñones</p>
          </Col>
          <Col xs = {3} sm = {3} md = {3} xl = {3}>
            <p className = "item-p-price">11.00€</p>
          </Col>
        </Row>
        <Row>
          <Col xs = {9} sm = {9} md = {9} xl = {9}>
            <p className = "item-p-text"><small>Cada ingrediente extra +1€</small></p>
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
  )
}

export default Pizzas;