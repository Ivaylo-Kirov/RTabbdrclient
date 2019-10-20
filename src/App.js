import React from 'react';
import './App.css';
import { Container } from 'reactstrap';
import {AppRouter} from './approuter';

class App extends React.Component {
  render() {
    return (
      <Container>
        <AppRouter />
      </Container>
    );
  }
}

export default App;
