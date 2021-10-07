import React from 'react'

function Name({name, id}) {
    return (
        <div id={`${name}-${id}`}>
            {name}
        </div>
    )
}

export default Name
