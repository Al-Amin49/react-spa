import React from 'react';
import Selected from '../Selected/Selected';

const Cart = (props) => {
    const cart = props.cart
    console.log(props);
    const cartStyle={
        float: 'right',
        marginRight:'100px'
    }
   const totalSalary = cart.reduce( (total, player) => total + player.Salary,0)
   console.log(totalSalary);
    return (
        <div style={cartStyle}>
             <h3>Players added: {cart.length}</h3>
            {
                cart.map(select=> <Selected  select={select}></Selected>)
            }
           
            <h2>Total budget: {totalSalary}</h2>
           
        </div>
    );
};

export default Cart;