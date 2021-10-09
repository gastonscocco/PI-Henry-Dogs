import React from 'react'
import './Failed.css'
import { FiHome } from "react-icons/fi";

function Failed() {
    const failed='https://cdn.discordapp.com/attachments/890950417737998397/895698117440200714/Doggy_5.png'

    const goHome= e=>{
        console.log(e.keyCode)
        window.location.href='http://localhost:3000/home'
        if(e.keyCode===27 ){
        }
    }

    return (
        <div className='Failed'>
            <img src={failed} alt='404'/>
            <button onClick={goHome}
                    className='FailBtn'
                ><FiHome/></button>
        </div>
    )
}

export default Failed
