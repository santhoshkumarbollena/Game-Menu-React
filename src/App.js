import React from 'react';
import './App.css';
import Header from './Components/header';
import GamesListComponent from './Components/games-list';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (<>
    <Container fluid className="App">
      <Container fluid>
        <br />
        <Row>
          <Col><Header></Header></Col>
        </Row>
        <Row>
          <Col>

            <Row>
              <GamesListComponent></GamesListComponent>

            </Row>

          </Col>
        </Row>
      </Container>
    </Container>
  </>
  );
}

export default App;
