import React from 'react';
import Doggys from '../../../componets/Doggys/Doggys';
import './Home.css'

function Home({location}) {
    return (
        <div className='Home'>
            <Doggys location={location}/>
        </div>
    )
}

export default Home
