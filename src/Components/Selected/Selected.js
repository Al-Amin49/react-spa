import React from 'react';
import './Selected.css'

const Selected = (props) => {
    const select = props.select;
    return (
        <div className="selected">
         <div >
         <p>Player name: {select.name}</p>
            <p>Salary: {select.Salary}</p>
         </div>
        </div>
    );
};

export default Selected;