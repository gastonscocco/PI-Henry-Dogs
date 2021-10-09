import React from 'react'
import './FormText.css'


function FormText({type, name, value, inputChange, opt, show, error}) {

    if(name &&!show){
        const mayus=name.split('')
        mayus[0] = mayus[0].toUpperCase();
        show= mayus.join('')
    }

    const flag = error?'TextDanger':'TextLabel'

    return (
        <div className='FormText'>
            <label  htmlFor={`input-${name}`}
                    className={flag}
            >{!opt && 'Required'} {show}: </label>
            <input  id={`input-${name}`}
                    type={type}
                    value={value}
                    name={name}
                    onChange={inputChange}
                />
        </div>
    )
}

export default FormText
