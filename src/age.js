import React from 'react';

const age = (props) => {
    return (
        <div>
            <br />
            <span>Age: </span>
            <input type="text" value={props.inputAge} onChange={props.changeAge} placeholder="only number" />

        </div>
    )
}

export default age;