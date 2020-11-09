import React from 'react';
import './App.css';

const InputTelepon = (props) => {
    return (
        <div className="card">
            <div className="container">
                <p>Nomor Kontak:</p>
                <input type="text" className="input" title="Min 8 - 12" onChange={props.inputTelepon} placeholder="Only number" />
            </div>
        </div>
    )
}

export default InputTelepon;