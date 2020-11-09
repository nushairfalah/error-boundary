import React from 'react';

const InputSubmit = (props) => {
    return (
        <div>
            <br />
            <button onClick={props.inputSubmit} disabled={props.disableButton}>
                Submit
            </button>
        </div>
    )
}

export default InputSubmit;