import React from 'react'
import './Info.css'

function Info({height, weight, lifeSpan}) {
    return (
        <div className='InfoDiv'>
            <div className='rowDiv'>Height: <span>{height} cm</span></div>
            <div className='rowDiv'>Weight: <span>{weight} kg</span></div>
            <div className='rowDiv'>Life Span: <span>{lifeSpan}</span></div>
        </div>
    )
}

export default Info
