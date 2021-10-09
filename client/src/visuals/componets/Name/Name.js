import React from 'react'
import './Name.css'

function Name({name, id, detailed}) {

    const NameClass = detailed?'NameDetailed':'Name'

    return (
        <div    id={`${name}-${id}`}
                className={NameClass}
            >
            {name}
        </div>
    )
}

export default Name
