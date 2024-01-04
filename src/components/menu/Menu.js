import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

import MenuIndex from './menus/MenuIndex'
import Breakfast from './menus/Breakfast'
import Snacks from './menus/Snacks'
import LongSandwich from './menus/LongSandwich'
import Sandwich from './menus/Sandwiches';
import Burgers from './menus/Burgers'
import Pizzas from './menus/Pizzas'
import Tostas from './menus/Tostas'
import ColdDishes from './menus/ColdDishes'
import HotDishes from './menus/HotDishes'
import Coffee from './menus/Coffee';
import Drinks from './menus/Drinks';
import ChristmasA from './menus/ChristmasA';
import ChristmasB from './menus/ChristmasB';
import MixDishes from './menus/MixDishes';

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

    const submitPizzas = () => {

        updateMenu({type: "pizzas"})
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

    const submitMixDishes = () => {

        updateMenu({type: "mix-dishes"})
    }

    const submitChristmasA = () => {

        updateMenu({type: "christmasA"})
    }
    const submitChristmasB = () => {

        updateMenu({type: "christmasB"})
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
                            <Breakfast/>}
                            {menu.type === "snacks" &&
                            <Snacks/>}
                            {menu.type === "hot-dishes" &&
                            <HotDishes/>}
                            {menu.type === "cold-dishes" &&
                            <ColdDishes/>}
                            {menu.type === "burgers" &&
                            <Burgers/>}
                            {menu.type === "pizzas" &&
                            <Pizzas/>}
                            {menu.type === "sandwich" &&
                            <Sandwich/>}
                            {menu.type === "long-sandwich" &&
                            <LongSandwich/>}
                            {menu.type === "tostas" &&
                            <Tostas/>}
                            {menu.type === "drinks" &&
                            <Drinks/>}
                            {menu.type === "cafe" &&
                            <Coffee/>}
                            {menu.type === "christmasA" &&
                            <ChristmasA/>}
                            {menu.type === "christmasB" &&
                            <ChristmasB/>}
                            {menu.type === "mix-dishes" &&
                            <MixDishes/>}
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
                                    <Button
                                        className = "bg-transparent menu-btn-text"
                                        variant = "dark"
                                        onClick = {submitBreakfast}
                                        href = "#menu"
                                    >Desayunos</Button>
                                </Col>
                                {/* <Col md = {12} xl = {6} className = "btn-contaniner">
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
                                </Col> */}
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
                                </Col>
                                {/* <Col md = {12} xl = {6} className = "btn-contaniner">
                                    <Button        
                                        className = "bg-transparent menu-btn"
                                        variant = "dark"
                                        onClick = {submitPizzas}
                                        href = "#menu"
                                    />
                                    <Button
                                        className = "bg-transparent menu-btn-text"
                                        variant = "dark"
                                        onClick = {submitPizzas}
                                        href = "#menu"
                                    >Pizzas</Button>
                                </Col> */}
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
                                </Col>
                                <Col md = {12} xl = {6} className = "btn-contaniner">
                                    <Button        
                                        className = "bg-transparent menu-btn"
                                        variant = "dark"
                                        onClick = {submitMixDishes}
                                        href = "#menu"
                                    />
                                    <Button
                                        className = "bg-transparent menu-btn-text"
                                        variant = "dark"
                                        onClick = {submitMixDishes}
                                        href = "#menu"
                                    >Plato Combinado</Button>
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
                                </Col>
                                {/* <Col md = {12} xl = {6} className = "btn-contaniner">
                                    <Button        
                                        className = "bg-transparent menu-btn"
                                        variant = "dark"
                                        onClick = {submitChristmasA}
                                        href = "#menu"
                                    />
                                    <Button
                                        className = "bg-transparent menu-btn-text"
                                        variant = "dark"
                                        onClick = {submitChristmasA}
                                        href = "#menu"
                                    >Menú Navidad 1</Button>
                                </Col>
                                <Col md = {12} xl = {6} className = "btn-contaniner">
                                    <Button        
                                        className = "bg-transparent menu-btn"
                                        variant = "dark"
                                        onClick = {submitChristmasB}
                                        href = "#menu"
                                    />
                                    <Button
                                        className = "bg-transparent menu-btn-text"
                                        variant = "dark"
                                        onClick = {submitChristmasB}
                                        href = "#menu"
                                    >Menú Navidad 2</Button>
                                </Col> */}
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