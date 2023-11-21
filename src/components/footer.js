import React, { Component } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import LogoAcesso from '../images/logo_acesso_popular.png';
import LogoFacebook from '../images/facebook.png';
import LogoInstagram from '../images/instagram.png';

class Footer extends Component {

    render() {
        return (
            <Container className='footer'>
                <Row className="justify-content-center align-items-center footer">
                    <Col xs="auto">
                        <Row className="text-center">
                            <Col>
                                <a href="https://facebook.com/semanadohiphopbauru" target='_blank' rel='noreferrer'>
                                    <img src={LogoFacebook} className="img-fluid social" alt="Facebook" />
                                </a>
                                <a href="https://instagram.com/semanahiphopbauru" target='_blank' rel='noreferrer'>
                                    <img src={LogoInstagram} className="img-fluid social" alt="Instagram" />
                                </a>
                            </Col>
                        </Row>
                        <Row className="text-center">
                            <Col>
                                <img src={LogoAcesso} className="img-fluid acesso" alt="Acesso Popular" />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        )
    }
}
export default Footer;