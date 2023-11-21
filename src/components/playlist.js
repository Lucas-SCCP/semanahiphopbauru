import React, { Component } from 'react';
import { Col } from 'react-bootstrap';

class Playlist extends Component {
    render() {
        return (
            <Col lg={4}>
                <iframe src="https://open.spotify.com/embed/playlist/4RbgOxf63vOov40SqQaTGU?utm_source=generator" width="100%" height="580" title="Spotify Playlist"></iframe>
            </Col>
        )
    }
}
export default Playlist;
