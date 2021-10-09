import React from 'react'
import './FormSelect.css'


function FormSelect({name, value, max, unit, opt, show, inputChange, error}) {
    const options = max?new Array(max+1).fill(0):null

    if(name &&!show){
        const mayus=name.split('')
        mayus[0] = mayus[0].toUpperCase();
        show= mayus.join('')
    }

    return (
        <div className='FormSelect'>
            <label  htmlFor={`input-${name}`}
                    className={'labelText-'+error}
                >{!opt && 'Required'} {show}: </label>
            <div className='DivSelects'>
                <select id={`input-${name}`}
                        value={value[0]}
                        name={`${name}Min`}
                        onChange={inputChange}
                    >
                        {
                            options.map((elem,index)=>{
                                if(!index)return <option key={`min_${index}`}></option>
                                return <option key={`min_${index}`}>{index}</option>
                            })
                        }
                </select>
                <p> {'->'} </p>
                <select value={value[1]}
                        name={`${name}Max`}
                        onChange={inputChange}
                    >
                        {
                            options.map((elem,index)=>{
                                if(!index)return <option key={`max_${index}`}></option>
                                return <option key={`max_${index}`}>{index}</option>
                            })
                        }
                </select>
                <div className='DivUnit'>
                    {` ${unit}`}
                </div>
            </div>    
        </div>
    )
}

export default FormSelect