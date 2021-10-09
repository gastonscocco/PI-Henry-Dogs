import React from 'react'
import './FormTempSelect.css'


function FormTempSelect({temps, clearTemp, emptyTemps, variousTemps}) {
    return (
        <div className='FormTempsSelectDiv'>
            {variousTemps.length !== 0 && <button onClick={emptyTemps}>Empty Temperaments</button>}
            {variousTemps.length !== 0 && <p>Click to remove</p>}
            <div className='ListOfTemps'>
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
