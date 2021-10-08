import React from 'react'

function FormText({type, name, value, inputChange, opt, show, error}) {

    if(name &&!show){
        const mayus=name.split('')
        mayus[0] = mayus[0].toUpperCase();
        show= mayus.join('')
    }

    return (
        <div>
            <label  htmlFor={`input-${name}`}
                    className={'labelText-'+error}
            >{!opt && 'required'} {show}: </label>
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
