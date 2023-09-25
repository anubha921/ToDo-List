import React, { useState } from 'react';
import {v4 as uuid} from 'uuid';

const Form = ({todos,setTodos}) => {
    const [input,setInput] = useState("");
    const onSubmit = (e) => {
        e.preventDefault();
        setTodos([...todos,{name:input,completed:false,id:uuid()}]);
        setInput('');
    }
    return (
        <form onSubmit={onSubmit}>
            <input className='form-input' type="text" placeholder='enter a todos' autoComplete='off' value={input} onChange={(e)=>{setInput(e.target.value)}}/>
            <button type='onSubmit' className='form-button'>Add</button>           
        </form>
    )
}

export default Form
