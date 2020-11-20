import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import MapWithAMarker from './Map'

import facebookLogo from '../../images/icons/facebook.png'
import instagramLogo from '../../images/icons/instagram.png'
import tripadvisorLogo from '../../images/icons/tripadvisor.png'


const Footer = () => {

    return (
        <div className = "footer">
            <Container>
                <Row>
                    <Col xs = {12} md = {4} className = "container-footer-cols">                    
                        <h3 className = "footer-titles">DIRECCIÓN</h3>
                        <p className = "footer-text">C/ Diego de Almagro, 7</p>
                        <p className = "footer-text">28341 Valdemoro (Madrid)</p>
                        <br></br>
                        <h3 className = "footer-titles">RESERVAS</h3>
                        <p className = "footer-text">630 141 055</p>  
                        <p className = "footer-text">reservas@barjarana.es</p>                  
                    </Col>
                    <Col xs = {12} md = {4} className = "container-rrss-footer">
                        <h3 className = "footer-titles">SÍGUENOS EN LAS RRSS</h3>
                        <div className = "container-footer-images">    
                            <a href = "https://www.facebook.com/Bar-Cafeter%C3%ADa-Jarana-102398075018866/" target="_blank" rel="noopener noreferrer" className = "footer-image-facebook"><img className = "footer-image-facebook" src = {facebookLogo} alt = "logo-facebook"/></a>
                            <a href = "https://www.instagram.com/bar_jarana" target="_blank" rel="noopener noreferrer" className = "footer-image-instagram"><img className = "footer-image-instagram" src = {instagramLogo} alt = "logo-instagram"/></a>
                            <a href = "https://www.tripadvisor.es/Restaurant_Review-g1063667-d21376099-Reviews-Bar_Cafeteria_Jarana-Valdemoro.html" target="_blank" rel="noopener noreferrer" className = "footer-image-instagram"><img className = "footer-image-instagram" src = {tripadvisorLogo} alt = "logo-tripadvisor"/></a>
                        </div>
                    </Col>
                    <Col xs = {12} md = {4} className = "container-footer-cols">
                        <MapWithAMarker
                            googleMapURL = "https://maps.googleapis.com/maps/api/js?key=AIzaSyBHfAU2RmVYVCi46jtHz_SZjXWWkN-_GYI"
                            loadingElement={<div style={{ height: `100%` }} />}
                            containerElement={<div style={{ height: `200px` }} />}
                            mapElement={<div style={{ height: `100%` }} />}
                        />
                    </Col>
                </Row>
            </Container>
        </div>
        
    );
}
 
export default Footer;