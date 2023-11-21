import React, { Component } from 'react';
import { Row, Container, Card, Button, Col } from 'react-bootstrap';
import BatalhaBreaking from '../images/batalha_breaking.jpg';
import Photo02 from '../images/foto_2.jpg';
import OficinaDJ from '../images/oficina_dj.jpg';

class LastPosts extends Component {

    render() {
        return (
            <Container>
                <Row>
                    <Col lg={12}>
                        <div className='labelLastPosts'>
                            <h5 className="card-title card-title-posts">ÚLTIMOS POSTS</h5>
                        </div>
                    </Col>
                    <Col xs={12} lg={4}>
                        <Card>
                            <Card.Img src={Photo02} alt="Shows de Encerramento" />
                            <Card.Body>
                                <Card.Title>Shows de Encerramento</Card.Title>
                                <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                                <Button variant="danger" className='bg-semana-2023'>LER MAIS</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} lg={4}>
                        <Card>
                            <Card.Img src={BatalhaBreaking} alt="Batalha de Breaking" />
                            <Card.Body>
                                <Card.Title>Batalha de Breaking</Card.Title>
                                <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                                <Button variant="danger" className='bg-semana-2023'>LER MAIS</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} lg={4}>
                        <Card>
                            <Card.Img src={OficinaDJ} alt="Oficina de DJ" />
                            <Card.Body>
                                <Card.Title>Oficina de DJ</Card.Title>
                                <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                                <Button variant="danger" className='bg-semana-2023'>LER MAIS</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
}
export default LastPosts;
