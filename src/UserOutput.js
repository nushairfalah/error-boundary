import React from 'react';

const UserOutput = (props) => {
    return (
        <div>
            <br />
            <span>{props.name} {props.inputAge}</span>
        </div>
    )
}

export default UserOutput;