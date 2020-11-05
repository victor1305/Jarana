import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import MapWithAMarker from './Map'

import facebookLogo from '../../images/icons/facebook.png'
import instagramLogo from '../../images/icons/instagram.png'


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
                            <img className = "footer-image-facebook" src = {facebookLogo} alt = "logo-facebook"/>
                            <img className = "footer-image-instagram" src = {instagramLogo} alt = "logo-instagram"/>
                        </div>
                    </Col>
                    <Col xs = {12} md = {4} className = "container-footer-cols">
                        <MapWithAMarker
                            googleMapURL = "https://maps.googleapis.com/maps/api/js?key=APIKEY"
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