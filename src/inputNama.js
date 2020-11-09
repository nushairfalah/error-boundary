import React from 'react';
import './App.css';

const InputNama = (props) => {
    return (
        <div className="card">
            <div className="container">
                <p>Nama:</p>
                <input className="input" type="text" title="Min 5" onChange={props.inputNama} placeholder="Only letter" />
            </div>
        </div>
    )
}

export default InputNama;