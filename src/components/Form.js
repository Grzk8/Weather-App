import React from 'react';
import './App.css'

const Form = props => {
    return(
        <form className='search-box'>
            <input 
            className='search-bar'
            type='text' 
            placeholder= 'Search...'
            value={props.location}
            onChange={props.change}
            />
        </form>
    )
}

export default Form