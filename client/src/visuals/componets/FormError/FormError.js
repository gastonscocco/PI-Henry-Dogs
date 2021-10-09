import React from 'react'
import './FormError.css'


function FormError({error}) {

    return (
        <div className='DivFormErrors'>
            {Object.keys(error).length > 0 && error?.map((elem,index)=>{
                return elem!==0 && <li key={`error-${index}`}>{elem}</li>
            })}
        </div>
    )
}

export default FormError