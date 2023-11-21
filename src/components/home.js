import React from 'react'
import { Container, Row } from 'react-bootstrap'
import Slide from './slide'
import LastPosts from './lastPosts'
import Playlist from './playlist'
import CenterHome from './centerHome'
import MoreViewsPosts from './moreViewsPosts'
import Youtube from './youtube'

const App = () => {
    return (
      <Row>
        <Slide />
        <LastPosts />
        <Container className="espacamentoEntreLinhas">
          <Row>
            <Playlist />
            <CenterHome />
            <MoreViewsPosts />
          </Row>
        </Container>
        <Youtube />
      </Row>
    );
  };
  
  export default App;