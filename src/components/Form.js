import React from 'react';
import './App.css'

const Form = props => {
    return(
        <form>
            <input 
            className='search-bar'
            type='text' 
            value={props.location}
            onChange={props.change}
            />
        </form>
    )
}

export default Form