import React from 'react';
import './App.css';

const CardBook = (props) => {

    return (
        <div className='App'>
            <h2>Title: {props.titleComp}</h2>
            <p>Desc: {props.descComp}</p>
            <h3>Author: {props.authorComp}</h3>
            <hr />
        </div>
    )

}

export default CardBook;