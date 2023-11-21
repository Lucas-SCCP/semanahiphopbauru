import React, { Component } from 'react';
import { Col } from 'react-bootstrap';

class Youtube extends Component {
    render() {
        return (
            <Col className='espacamentoEntreLinhas'>
                <div style={{ width: '100%', height: '0', paddingBottom: '56.25%', position: 'relative' }}>
                    <iframe
                    title="YouTube Video"
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/QMh9xbNaRCQ?si=7NpoIzqDQScIi_dQ"
                    frameBorder="0"
                    allowFullScreen
                    style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%' }}
                    ></iframe>
                </div>
            </Col>
            
          
        )
    }
}
export default Youtube;