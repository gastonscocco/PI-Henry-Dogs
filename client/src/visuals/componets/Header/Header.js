import React from 'react';
import Nav from '../Nav/Nav';


function Header({user}) {

    return (
        <div>
            <h1>Doggy Pedia</h1>
            <Nav user={user}/>
        </div>
    )
}

export default Header