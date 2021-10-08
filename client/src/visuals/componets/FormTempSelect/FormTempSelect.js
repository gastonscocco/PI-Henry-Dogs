import React from 'react'

function FormTempSelect({temps, clearTemp, emptyTemps, variousTemps}) {
    return (
        <div>
            {variousTemps.length !== 0 && <button onClick={emptyTemps}>Empty Temperaments</button>}
            {variousTemps.length !== 0 && <p>Click him for remove</p>}
            <div>
                {temps.map((elem,index)=>{
                    return <span   key={index}
                            id={`temp-${index}`} 
                            title={`remove ${elem}`}
                            onClick={clearTemp}
                            className='removeTemps'
                        >{elem}</span>
                })}
            </div>
        </div>
    )
}

export default FormTempSelect
