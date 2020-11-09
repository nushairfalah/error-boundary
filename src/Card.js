import React from 'react';
import './App.css';

const Card = (props) => {
    return (

        <div className="card">
            <img src={props.avatar} alt="test" style={{ width: "100%" }} />
            <div className="container">
                <input className="input" type="text" value={props.name} onChange={props.changeName} />
                <input className="input" type="text" value={props.age} onChange={props.changeAge} />
                <h4><b>{props.name}</b></h4>
                <p>{props.age}</p>
                <p>{props.title}</p>
                <button className="button" onClick={props.onDelete}>Delete</button>
            </div>
        </div>
    )
}

export default Card;

