import React from 'react';
import {Card,Button} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import './Player.css';

const Player =(props)=>{
    const {name , image, Salary}= props.player;

    const handleAddPlayer = props.handleAddPlayer
    return (
        <div className="player-container">
          <Card className="card-container">
  <Card.Img  className="img-width" variant="top" src={image} />
    <p>Name: {name}</p>
    <p>Salary: {Salary}</p>
    <Button className="btn" onClick={()=>handleAddPlayer(props.player)}><FontAwesomeIcon icon={faPlus} />Add Player</Button>
</Card>
        </div>
    )
}
export default Player;