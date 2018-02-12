import React from 'react';
import './Person.css';

const person = (props) => {
    return (
        <div className='Person'>
            {/* //onClick is passed from somewhere else */}
            <p onClick={props.click}>My Name is { props.name } and I am { props.age } Years old.</p>
            <p>{props.children}</p>
            {/* this is passed from names changed handler */}
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    );
}

export default person;