import React from 'react';
import PlayersForm from './js/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';



const BuildLineup = () => (
  <div>
    <Jumbotron>
      <h1>Lineup Generator</h1>
      <PlayersForm />
    </Jumbotron>
    
  </div>
);

export default BuildLineup
