import React from 'react';

const Form = props => {
    return(
        <form>
            <input 
            type='text' 
            value={props.location}
            onChange={props.change}
            />
        </form>
    )
}

export default Form