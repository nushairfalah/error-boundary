import React from 'react';

const UserInput = (props) => {
    return (
        <div>
            <h3>Kuy Tugas 6.25</h3>

            <span>Name: </span>
            <input type="text" value={props.name} onChange={props.changeName} />

        </div>
    )
}

export default UserInput;