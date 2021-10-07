import React from 'react'

function Info({height, weight, lifeSpan}) {
    return (
        <div>
            <span>Height: {height}</span>
            <span>Weight: {weight}</span>
            <span>Years of life: {lifeSpan}</span>
        </div>
    )
}

export default Info
