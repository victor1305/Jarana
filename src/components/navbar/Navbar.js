import React from 'react';
import { Navbar, Nav } from 'react-bootstrap'

const NavBar = () => {

    const linkStyle = {
        paddingRight: '1em',

    };
    
    
    return (
        <Navbar className = "header" collapseOnSelect expand="lg" variant = "dark" >
        <Navbar.Brand className = "brand" href="/">JARANA</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link style = {linkStyle} href="/quienes-somos">Quiénes Somos</Nav.Link>
            <Nav.Link style = {linkStyle} href="/nuestra-carta">Nuestra Carta</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
        
    );
}
 
export default NavBar;