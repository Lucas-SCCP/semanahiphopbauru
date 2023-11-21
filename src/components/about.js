import React, { Component } from 'react';
import { Row, Container, Col, Image, Carousel } from 'react-bootstrap';
import Photo01 from '../images/foto_1.jpg';
import Photo02 from '../images/foto_2.jpg';

class About extends Component {

    state = {
        slideHeight: null,
        images: [
            Photo01,
            Photo02
        ]
    }

    render() {
        const { images } = this.state;

        return (
            <Container>
                <Row>
                    <Col lg={8} style={{ border: '1px solid red', padding: '20px' }}>
                        <h3>Teste</h3>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed placerat fringilla ante quis auctor. Vestibulum ante ipsum primis in faucibus orci 
                        luctus et ultrices posuere cubilia curae; Quisque auctor risus metus, quis ultrices ligula dignissim in. Nullam at odio in risus placerat egestas. 
                        Vivamus elit mauris, pulvinar a mattis vel, aliquam et neque. Integer congue sit amet felis in faucibus. Maecenas eu nisl at neque faucibus pellentesque 
                        ac eu eros. Nunc faucibus fermentum nisl laoreet posuere. Ut eu libero hendrerit, interdum felis in, venenatis massa. Vivamus sit amet accumsan ante, 
                        quis lobortis orci. Aenean nisl quam, dignissim at pulvinar vitae, molestie vel eros. Pellentesque a erat a nunc sodales efficitur vel et augue. 
                        Aenean interdum, neque ac vulputate ullamcorper, lorem quam finibus lectus, ut accumsan mi diam at nisl. Proin at facilisis ex.
                        </p>
                    </Col>
                    <Col lg={4} style={{ border: '1px solid red' }}>
                        <Image src="https://placehold.co/300x400" rounded /> 
                    </Col>
                </Row>
                <Row>
                    <Col style={{ border: '1px solid red', padding: '20px' }}>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed placerat fringilla ante quis auctor. Vestibulum ante ipsum primis in faucibus orci 
                        luctus et ultrices posuere cubilia curae; Quisque auctor risus metus, quis ultrices ligula dignissim in. Nullam at odio in risus placerat egestas. 
                        Vivamus elit mauris, pulvinar a mattis vel, aliquam et neque. Integer congue sit amet felis in faucibus. Maecenas eu nisl at neque faucibus pellentesque 
                        ac eu eros. Nunc faucibus fermentum nisl laoreet posuere. Ut eu libero hendrerit, interdum felis in, venenatis massa. Vivamus sit amet accumsan ante, 
                        quis lobortis orci. Aenean nisl quam, dignissim at pulvinar vitae, molestie vel eros. Pellentesque a erat a nunc sodales efficitur vel et augue. 
                        Aenean interdum, neque ac vulputate ullamcorper, lorem quam finibus lectus, ut accumsan mi diam at nisl. Proin at facilisis ex.
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col style={{ border: '1px solid red', padding: '20px' }}>
                    <Carousel>
                        {images.map((imageUrl, index) => (
                            <Carousel.Item key={index}>
                            <img
                                className="d-block w-100"
                                src={imageUrl}
                                alt={`Imagem ${index + 1}`}
                            />
                            </Carousel.Item>
                        ))}
                    </Carousel>
                    </Col>
                </Row>
                <Row>
                    <Col style={{ border: '1px solid red', padding: '20px' }}>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed placerat fringilla ante quis auctor. Vestibulum ante ipsum primis in faucibus orci 
                        luctus et ultrices posuere cubilia curae; Quisque auctor risus metus, quis ultrices ligula dignissim in. Nullam at odio in risus placerat egestas. 
                        Vivamus elit mauris, pulvinar a mattis vel, aliquam et neque. Integer congue sit amet felis in faucibus. Maecenas eu nisl at neque faucibus pellentesque 
                        ac eu eros. Nunc faucibus fermentum nisl laoreet posuere. Ut eu libero hendrerit, interdum felis in, venenatis massa. Vivamus sit amet accumsan ante, 
                        quis lobortis orci. Aenean nisl quam, dignissim at pulvinar vitae, molestie vel eros. Pellentesque a erat a nunc sodales efficitur vel et augue. 
                        Aenean interdum, neque ac vulputate ullamcorper, lorem quam finibus lectus, ut accumsan mi diam at nisl. Proin at facilisis ex.
                        </p>
                    </Col>
                </Row>
            </Container>
        );
    }
};

export default About;
