import React from 'react';
import './App.css';

const InputAlamat = (props) => {
    return (
        <div className="card">
            <div className="container">
                <p>Alamat:</p>
                <input type="text" className="input" onChange={props.inputAlamat} placeholder="Min 5 huruf" />
            </div>

        </div>
    )
}

export default InputAlamat;