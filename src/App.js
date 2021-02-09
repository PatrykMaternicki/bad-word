import logo from './logo.svg';
import './App.css';
import MainContainer from './containers/Main.js'
import GameContainer from './containers/Game.js'
import ScoreContainer from './containers/Score.js'
import { Switch, Route } from 'react-router-dom'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

function App() {
  return (
    <Container>
      <div className="d-flex align-items-center justify-content-center flex-wrap vh-100">
        <Row className="w-100 justify-content-center">
          <Col xs={12} sm={8}>
            <Switch>
              <Route path="/" component={MainContainer} exact/>
              <Route path="/game" component={GameContainer} />
              <Route path="/score" component={ScoreContainer} />
            </Switch>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default App;
