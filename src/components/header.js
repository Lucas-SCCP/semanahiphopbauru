import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import logo from '../images/logo_semanahiphop_bauru_2023.png';

class Header extends Component {
    render() {
        return (
            <Row id="header" className="linhaLogo">
                <Col xs={12} className="logo">
                    <img src={logo} className="img-fluid" alt="Semana do Hip Hop Bauru" />
                </Col>
            </Row>
        )
    }
}
export default Header;