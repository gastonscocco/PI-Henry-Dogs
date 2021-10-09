import React from 'react'
import './Temperaments.css'

function Temperaments({id, temperament, detailed}) {

    const tempClass = detailed?'detailedTemp':'temps';

    return (
        <div id={`temp-${id}`} className='temps'>
            <span   id={`tempSpan-${id}`}
                    className={tempClass}
                >Temperament: </span>
            {temperament?
                temperament.toLowerCase()
                    :
                <span id={`tempSpanDontKnow-${id}`}>Without data about temperaments</span>}
        </div>
    )
}

export default Temperaments
