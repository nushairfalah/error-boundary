import React from 'react';

const Greeting = (props) => {
    return (
        <div>
            <p>Hello My Name is {props.name} age: {props.age}</p>
            <h2>{props.children}</h2>
        </div>
    )
}

export default Greeting