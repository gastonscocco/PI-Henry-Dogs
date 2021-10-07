import React from 'react'

function Temperaments({id, temperament, detailed}) {

    const tempClass = detailed?'detailed':'temps';

    return (
        <div id={`temp-${id}`} className={tempClass}>
            <span id={`tempSpan-${id}`}>Temperaments: </span>
            {temperament?
                temperament.toLowerCase()
                    :
                <span id={`tempSpanDontKnow-${id}`}>Without data about temperaments</span>}
        </div>
    )
}

export default Temperaments
