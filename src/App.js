import React, {useState, useEffect} from 'react';
import Player from './Components/Player/Player';
import Cart from './Components/Cart/Cart';
import './App.css';

function App() {
  const [players, setPlayers]= useState([]);
  useEffect(()=>{
    fetch('https://mocki.io/v1/edfa2bee-c3da-4e2e-8559-88d4987e3c38')
    .then(res=>res.json())
    .then(data=>setPlayers(data))
  
  },[])
  const [cart, setCart]=useState([])

  const handleAddPlayer=(player)=>{
    const newCart =[...cart, player];
    setCart(newCart);
  }
  console.log(cart);
 
  return (
    <div>
      <h1 style={{textAlign:'center'}}>Chadnighat Sporting Club</h1><br/>
     
     <Cart cart={cart}> </Cart>

      
      
      <ul>
        {
          players.map(player=><Player player={player} handleAddPlayer={handleAddPlayer}></Player>)
        }
      </ul>

    
    </div>
  );
}

export default App;
