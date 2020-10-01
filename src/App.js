import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Card, Container } from "react-bootstrap";

import 'bootstrap/dist/css/bootstrap.min.css';

import MyNavBar from "./NavBar";

const players = [
  {
    name: "Arystan"
  },
  {
    name: "Adlet"
  }
]

const Player = ({ name }) => {
  return (
    <Card style={{ width: '18rem', margin: 10, background: "yellow" }}>
      <Card.Body>
      <Card.Title>{name}</Card.Title>
      </Card.Body>
    </Card>
  )
}

function App() {
  console.log(players);
  return (
    <>
      <MyNavBar />
      <Container>
        {players.map((el) => <Player name={el.name} />)}
      </Container>
    </>
  );
}

export default App;
