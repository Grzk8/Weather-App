import React from 'react';

const Form = props => {
    return(
        <form onSubmit={props.submit}>
            <input 
            type='text' 
            value={props.location}
            onChange={props.change}
            />
            <button>szukaj</button>
        </form>
    )
}

export default Form