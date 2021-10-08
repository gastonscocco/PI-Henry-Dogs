import React from 'react'

function FormError({error}) {
    return (
        <div>
            {error?.map((elem,index)=>{
                <li key={`error-${index}`}>{elem}</li>
            })}
        </div>
    )
}

export default FormError