import React, { Component } from 'react';
import { Card, Button, Col } from 'react-bootstrap';

class MoreViewsPosts extends Component {
    render() {
        return (
            <Col lg={4}>
                <Col className='labelMoreViewsPosts'>
                    <h5 className="card-title card-title-posts">POSTS MAIS VISTOS</h5>
                </Col>
                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title>Shows de Encerramento</Card.Title>
                            <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                            <Button variant="danger" className='bg-semana-2023'>LER MAIS</Button>
                        </Card.Body>
                    </Card>
                    <Card className='margin-top-10'>
                        <Card.Body>
                            <Card.Title>Shows de Encerramento</Card.Title>
                            <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                            <Button variant="danger" className='bg-semana-2023'>LER MAIS</Button>
                        </Card.Body>
                    </Card>
                    <Card className='margin-top-10'>
                        <Card.Body>
                            <Card.Title>Shows de Encerramento</Card.Title>
                            <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                            <Button variant="danger" className='bg-semana-2023'>LER MAIS</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Col>
        )
    }
}
export default MoreViewsPosts;
