import React from "react";
import './Card.css';

const Card = ({ selectedElements,prize,credit }) => {
    console.log(selectedElements);
    
    return (
        <div>
            <h4 className="head">Credit Hour Remaining</h4>
            <div className="cards-box">
            <h3>Course Name</h3>
            {selectedElements.map((actor) => (
                <li key={actor.id}>{actor.name}</li>
                
            ))}
            </div>
            <div>  
            <h5>Total Credit Hour :{credit}</h5>   
            <h5>Total Price :{prize} USD</h5></div>
           </div>
    );
};

export default Card;