import React from 'react';
import UserLeave from '../userLeave/userLeave'
import {NavLink} from 'react-router-dom';

function Nav({user}) {

    return (
        <div>
            <h1>Nav</h1>
            <NavLink to='/home'>Home</NavLink>
            <NavLink to='/newdoggy'>New Doggy</NavLink>
            <NavLink to='/detailed'>Detail</NavLink>
            <UserLeave user={user}/>
        </div>
    )
}

export default Nav