import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

import MenuIndex from './menus/MenuIndex'

import Breakfast from './menus/Breakfast'
import Snacks from './menus/Snacks'
import LongSandwich from './menus/LongSandwich'
import Sandwich from './menus/Sandwiches';
import Burgers from './menus/Burgers'
import Tostas from './menus/Tostas'
import ColdDishes from './menus/ColdDishes'
import HotDishes from './menus/HotDishes'
import Coffee from './menus/Coffee';
import Drinks from './menus/Drinks';

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
                            // <img src = {menuBreakfast} alt = "menu" className = "menu-images"/>}
                            <Breakfast/>}
                            {menu.type === "snacks" &&
                            // <img src = {menuSnacks} alt = "menu" className = "menu-images"/>}
                            <Snacks/>}
                            {menu.type === "hot-dishes" &&
                            // <img src = {menuHotDishes} alt = "menu" className = "menu-images"/>}
                            <HotDishes/>}
                            {menu.type === "cold-dishes" &&
                            // <img src = {menuColdDishes} alt = "menu" className = "menu-images"/>}
                            <ColdDishes/>}
                            {menu.type === "burgers" &&
                            // <img src = {menuBurger} alt = "menu" className = "menu-images"/>}
                            <Burgers/>}
                            {menu.type === "sandwich" &&
                            // <img src = {menuSandwich} alt = "menu" className = "menu-images"/>}
                            <Sandwich/>}
                            {menu.type === "long-sandwich" &&
                            // <img src = {menuLongSandwich} alt = "menu" className = "menu-images"/>}
                            <LongSandwich/>}
                            {menu.type === "tostas" &&
                            // <img src = {menuTostas} alt = "menu" className = "menu-images"/>}
                            <Tostas/>}
                            {menu.type === "drinks" &&
                            // <img src = {menuDrinks} alt = "menu" className = "menu-images"/>}
                            <Drinks/>}
                            {menu.type === "cafe" &&
                            // <img src = {menuCafe} alt = "menu" className = "menu-images"/>}
                            <Coffee/>}
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
                                    {/* <h4 className = "menu-items ">Desayunos</h4> */}
                                    <Button
                                        className = "bg-transparent menu-btn-text"
                                        variant = "dark"
                                        onClick = {submitBreakfast}
                                        href = "#menu"
                                    >Desayunos</Button>
                                </Col>
                                <Col md = {12} xl = {6} className = "btn-contaniner">
                                    <Button        
                                        className = "bg-transparent menu-btn"
                                        variant = "dark"
                                        onClick = {submitSnacks}
                                        href = "#menu"
                                    />
                                    <Button
                                        className = "bg-transparent menu-btn-text"
                                        variant = "dark"
                                        onClick = {submitSnacks}
                                        href = "#menu"
                                    >Meriendas</Button>
                                    {/* <h4 className = "menu-items ">Meriendas</h4> */}
                                </Col>
                                <Col md = {12} xl = {6} className = "btn-contaniner">                                    
                                    <Button        
                                        className = "bg-transparent menu-btn"
                                        variant = "dark"
                                        onClick = {submitLongSandwich}
                                        href = "#menu"
                                    />
                                    <Button
                                        className = "bg-transparent menu-btn-text"
                                        variant = "dark"
                                        onClick = {submitLongSandwich}
                                        href = "#menu"
                                    >Bocadillos</Button>
                                    {/* <h4 className = "menu-items ">Bocadillos</h4> */}
                                </Col>
                                <Col md = {12} xl = {6} className = "btn-contaniner">
                                    <Button        
                                        className = "bg-transparent menu-btn"
                                        variant = "dark"
                                        onClick = {submitSandwich}
                                        href = "#menu"
                                    />
                                    <Button
                                        className = "bg-transparent menu-btn-text"
                                        variant = "dark"
                                        onClick = {submitSandwich}
                                        href = "#menu"
                                    >Sandwiches</Button>
                                    {/* <h4 className = "menu-items ">Sandwiches</h4> */}
                                </Col>
                                <Col md = {12} xl = {6} className = "btn-contaniner">
                                    <Button        
                                        className = "bg-transparent menu-btn"
                                        variant = "dark"
                                        onClick = {submitBurgers}
                                        href = "#menu"
                                    />
                                    <Button
                                        className = "bg-transparent menu-btn-text"
                                        variant = "dark"
                                        onClick = {submitBurgers}
                                        href = "#menu"
                                    >Hamburguesas</Button>
                                    {/* <h4 className = "menu-items ">Hamburguesas</h4> */}
                                </Col>
                                <Col md = {12} xl = {6} className = "btn-contaniner">
                                    <Button        
                                        className = "bg-transparent menu-btn"
                                        variant = "dark"
                                        onClick = {submitTostas}
                                        href = "#menu"
                                    />
                                    <Button
                                        className = "bg-transparent menu-btn-text"
                                        variant = "dark"
                                        onClick = {submitTostas}
                                        href = "#menu"
                                    >Tostas</Button>
                                    {/* <h4 className = "menu-items ">Tostas</h4> */}
                                </Col>
                                <Col md = {12} xl = {6} className = "btn-contaniner">
                                    <Button        
                                        className = "bg-transparent menu-btn"
                                        variant = "dark"
                                        onClick = {submitColdDishes}
                                        href = "#menu"
                                    />
                                    <Button
                                        className = "bg-transparent menu-btn-text"
                                        variant = "dark"
                                        onClick = {submitColdDishes}
                                        href = "#menu"
                                    >Raciones Frías</Button>
                                    {/* <h4 className = "menu-items ">Raciones Frías</h4> */}
                                </Col>
                                <Col md = {12} xl = {6} className = "btn-contaniner">
                                    <Button        
                                        className = "bg-transparent menu-btn"
                                        variant = "dark"
                                        onClick = {submitHotDishes}
                                        href = "#menu"
                                    />
                                    <Button
                                        className = "bg-transparent menu-btn-text"
                                        variant = "dark"
                                        onClick = {submitHotDishes}
                                        href = "#menu"
                                    >Raciones Calientes</Button>
                                    {/* <h4 className = "menu-items ">Raciones Calientes</h4> */}
                                </Col>
                                <Col md = {12} xl = {6} className = "btn-contaniner">
                                    <Button        
                                        className = "bg-transparent menu-btn"
                                        variant = "dark"
                                        onClick = {submitDrinks}
                                        href = "#menu"
                                    />
                                    <Button
                                        className = "bg-transparent menu-btn-text"
                                        variant = "dark"
                                        onClick = {submitDrinks}
                                        href = "#menu"
                                    >Bebidas</Button>
                                    {/* <h4 className = "menu-items ">Cervezas y Refrescos</h4> */}
                                </Col>
                                <Col md = {12} xl = {6} className = "btn-contaniner">
                                    <Button        
                                        className = "bg-transparent menu-btn"
                                        variant = "dark"
                                        onClick = {submitCafe}
                                        href = "#menu"
                                    />
                                    <Button
                                        className = "bg-transparent menu-btn-text"
                                        variant = "dark"
                                        onClick = {submitCafe}
                                        href = "#menu"
                                    >Licores y Café</Button>
                                    {/* <h4 className = "menu-items ">Licores y Café</h4> */}
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
                <p className = "menu-llevar">* Nuestra comida también es para llevar</p>
            </Container>
            
        </div>
    );
}
 
export default Menu;