import React, { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { setName } from '../../../controlers/actions';
import './FormText.css'

function FormText({type, name, value, inputChange, opt, show, error}) {
    const dispatch = useDispatch()
    const nameDoggy= useSelector(state=>state.name)

    if(name &&!show){
        const mayus=name.split('')
        mayus[0] = mayus[0].toUpperCase();
        show= mayus.join('')
    }

    useEffect(() => {
        dispatch(setName(nameDoggy))
    }, [nameDoggy.length>0])

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
