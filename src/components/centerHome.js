import React, { Component } from 'react';
import { Col, Image } from 'react-bootstrap';

class Slide extends Component {

    render() {
        return (
            <Col lg={4}>
                <Image src="https://placehold.co/415x580" rounded /> 
            </Col>
        );
    }
};

export default Slide;
