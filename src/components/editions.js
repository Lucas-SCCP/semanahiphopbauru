import React, { useEffect, useState } from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import { getEditions } from '../useCase/editionsUseCase';

const Editions = () => {

    const [editions, setEditions] = useState([]);

    useEffect(() => {
        const fetchEditionsData = async () => {
            try {
                const editionsData = await getEditions();
                setEditions(editionsData.reverse());
            } catch (error) {
                console.log(error);
            }
        }

        fetchEditionsData();
    }, []);

    return (
        <Row>
            {editions.length > 0 && editions.map((edition, index) => (
                <Col lg={3} key={edition.id} className='margin-top-20'>
                    <Card>
                        <Card.Img src='https://placehold.co/400x400' alt={edition.imgLogo}/>
                        <Button variant="danger" className='bg-semana-2023'>VER MAIS</Button>
                    </Card>
                </Col>
            ))}
        </Row>
    )
}
export default Editions;
