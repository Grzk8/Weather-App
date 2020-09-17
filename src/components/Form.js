import React from 'react';
import './App.css'

const Form = props => {
    return(
        <div className='search-box'>
            <input 
            className='search-bar'
            type='text' 
            placeholder= 'Search...'
            value={props.location}
            onChange={props.change}
            />
        </div>
    )
}

export default Form