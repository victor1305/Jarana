import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

import menuBreakfast from '../../images/desayunos.png'
import menuColdDishes from '../../images/racionesfrias.png'
import menuHotDishes from '../../images/racionescalientes.png'
import menuBurger from '../../images/hamburguesas.png'
import menuTostas from '../../images/tostas.png'
import menuDrinks from '../../images/bebidascervezas.png'
import menuLongSandwich from '../../images/bocadillos.png'
import menuSandwich from '../../images/sandwiches.png'
import menuSnacks from '../../images/meriendas.png'
import menuCafe from '../../images/bebidasalcohol.png'
import MenuIndex from './MenuIndex'

const Menu = () => {

    // Menu state

    const [ menu, updateMenu ] = useState({
        type: ''
    })

    
    // When the user press the button

    const submitBreakfast = () => {

        updateMenu({type: "breakfast"})
    }

    const submitSnacks = () => {

        updateMenu({type: "snacks"})
    }

    const submitColdDishes = () => {

        updateMenu({type: "cold-dishes"})
    }

    const submitHotDishes = () => {

        updateMenu({type: "hot-dishes"})
    }

    const submitLongSandwich = () => {

        updateMenu({type: "long-sandwich"})
    }

    const submitSandwich = () => {

        updateMenu({type: "sandwich"})
    }

    const submitBurgers = () => {

        updateMenu({type: "burgers"})
    }

    const submitTostas = () => {

        updateMenu({type: "tostas"})
    }

    const submitDrinks = () => {

        updateMenu({type: "drinks"})
    }

    const submitCafe = () => {

        updateMenu({type: "cafe"})
    }


    return (
        <div className = "menu-container" id = "menu">
            <h2 className = "menu-title">Carta</h2>
            <Container>
                <Row >

                    <Col sm = {12} md = {{span: 6, order: 2}} >
                        <div className = "menu-image-container">
                            {menu.type === "" &&
                            <MenuIndex />}
                            {menu.type === "breakfast" &&
                            <img src = {menuBreakfast} alt = "menu" className = "menu-images"/>}
                            {menu.type === "snacks" &&
                            <img src = {menuSnacks} alt = "menu" className = "menu-images"/>}
                            {menu.type === "hot-dishes" &&
                            <img src = {menuHotDishes} alt = "menu" className = "menu-images"/>}
                            {menu.type === "cold-dishes" &&
                            <img src = {menuColdDishes} alt = "menu" className = "menu-images"/>}
                            {menu.type === "burgers" &&
                            <img src = {menuBurger} alt = "menu" className = "menu-images"/>}
                            {menu.type === "sandwich" &&
                            <img src = {menuSandwich} alt = "menu" className = "menu-images"/>}
                            {menu.type === "long-sandwich" &&
                            <img src = {menuLongSandwich} alt = "menu" className = "menu-images"/>}
                            {menu.type === "tostas" &&
                            <img src = {menuTostas} alt = "menu" className = "menu-images"/>}
                            {menu.type === "drinks" &&
                            <img src = {menuDrinks} alt = "menu" className = "menu-images"/>}
                            {menu.type === "cafe" &&
                            <img src = {menuCafe} alt = "menu" className = "menu-images"/>}
                        </div>
                    </Col>
                    <Col sm = {12} md = {{span: 6, order: 1}}>
                        <h3 className = "menu-subtitle">Presiona un botón</h3>
                        <Container>
                            <Row>
                                <Col md = {12} xl = {6} className = "btn-contaniner">
                                    <Button        
                                        className = "bg-transparent menu-btn"
                                        variant = "dark"
                                        onClick = {submitBreakfast}
                                        href = "#menu"
                                    />
                                    <h4 className = "menu-items ">Desayunos</h4>
                                </Col>
                                <Col md = {12} xl = {6} className = "btn-contaniner">
                                    <Button        
                                        className = "bg-transparent menu-btn"
                                        variant = "dark"
                                        onClick = {submitSnacks}
                                        href = "#menu"
                                    />
                                    <h4 className = "menu-items ">Meriendas</h4>
                                </Col>
                                <Col md = {12} xl = {6} className = "btn-contaniner">                                    
                                    <Button        
                                        className = "bg-transparent menu-btn"
                                        variant = "dark"
                                        onClick = {submitLongSandwich}
                                        href = "#menu"
                                    />
                                    <h4 className = "menu-items ">Bocadillos</h4>
                                </Col>
                                <Col md = {12} xl = {6} className = "btn-contaniner">
                                    <Button        
                                        className = "bg-transparent menu-btn"
                                        variant = "dark"
                                        onClick = {submitSandwich}
                                        href = "#menu"
                                    />
                                    <h4 className = "menu-items ">Sandwiches</h4>
                                </Col>
                                <Col md = {12} xl = {6} className = "btn-contaniner">
                                    <Button        
                                        className = "bg-transparent menu-btn"
                                        variant = "dark"
                                        onClick = {submitBurgers}
                                        href = "#menu"
                                    />
                                    <h4 className = "menu-items ">Hamburguesas</h4>
                                </Col>
                                <Col md = {12} xl = {6} className = "btn-contaniner">
                                    <Button        
                                        className = "bg-transparent menu-btn"
                                        variant = "dark"
                                        onClick = {submitTostas}
                                        href = "#menu"
                                    />
                                    <h4 className = "menu-items ">Tostas</h4>
                                </Col>
                                <Col md = {12} xl = {6} className = "btn-contaniner">
                                    <Button        
                                        className = "bg-transparent menu-btn"
                                        variant = "dark"
                                        onClick = {submitColdDishes}
                                        href = "#menu"
                                    />
                                    <h4 className = "menu-items ">Raciones Frías</h4>
                                </Col>
                                <Col md = {12} xl = {6} className = "btn-contaniner">
                                    <Button        
                                        className = "bg-transparent menu-btn"
                                        variant = "dark"
                                        onClick = {submitHotDishes}
                                        href = "#menu"
                                    />
                                    <h4 className = "menu-items ">Raciones Calientes</h4>
                                </Col>
                                <Col md = {12} xl = {6} className = "btn-contaniner">
                                    <Button        
                                        className = "bg-transparent menu-btn"
                                        variant = "dark"
                                        onClick = {submitDrinks}
                                        href = "#menu"
                                    />
                                    <h4 className = "menu-items ">Cervezas y Refrescos</h4>
                                </Col>
                                <Col md = {12} xl = {6} className = "btn-contaniner">
                                    <Button        
                                        className = "bg-transparent menu-btn"
                                        variant = "dark"
                                        onClick = {submitCafe}
                                        href = "#menu"
                                    />
                                    <h4 className = "menu-items ">Licores y Café</h4>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
 
export default Menu;