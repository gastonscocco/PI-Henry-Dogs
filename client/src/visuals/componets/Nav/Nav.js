import React from 'react';
import UserLeave from '../userLeave/userLeave'
import {NavLink} from 'react-router-dom';

function Nav({user}) {
    const logo = 'https://cdn.discordapp.com/attachments/890950417737998397/895771721582391336/LogoDoggyPedia.png'

    const goHome= e=>{
        console.log(e.keyCode)
        window.location.href='http://localhost:3000/home'
        if(e.keyCode===27 ){
        }
    }

    return (
        <div>
            <div>
                <img    src={logo} 
                        height='100px' 
                        width ='100px' 
                        alt='logo'
                        onClick={goHome}
                    />
            </div>
            <div><h1>Nav</h1></div>
            <div>
                <NavLink to='/home'>Home</NavLink>
                <NavLink to='/newdoggy'>New Doggy</NavLink>
                <NavLink to='/detailed'>Detail</NavLink>
                <UserLeave user={user}/>
            </div>
        </div>
    )
}

export default Nav