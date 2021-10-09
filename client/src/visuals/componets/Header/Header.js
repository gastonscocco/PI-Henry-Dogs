import React from 'react';
import Nav from '../Nav/Nav';
import './Header.css'

function Header({user}) {

    return (
        <div className='Header'>
            <Nav user={user}/>
        </div>
    )
}

export default Header