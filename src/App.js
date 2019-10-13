import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Container } from "react-bootstrap";
import { Grommet } from 'grommet';

import MainApp from "./components/MainApp";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Grommet>

      <Container>
        <MainApp />
      </Container>

    </Grommet>
  );
}

export default App;
