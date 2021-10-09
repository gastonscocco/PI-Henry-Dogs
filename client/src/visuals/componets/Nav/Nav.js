import React from 'react';
import UserLeave from '../userLeave/userLeave'
import {NavLink} from 'react-router-dom';
import './Nav.css'

function Nav({user}) {
    const logo = 'https://cdn.discordapp.com/attachments/890950417737998397/895771721582391336/LogoDoggyPedia.png'

    const goHome= e=>{
        console.log(e.keyCode)
        window.location.href='http://localhost:3000/home'
        if(e.keyCode===27 ){
        }
    }

    return (
        <div className='NavPrimary'>
            <div className='NavLogo'>
                <img    src={logo} 
                        height='100px' 
                        width ='100px' 
                        alt='logo'
                        onClick={goHome}
                        className='LogoImg'
                    />
            </div>
            <div className='NavRoutes'>
                <ul className='NavUl'>
                    <li className='NavLi'>
                        <NavLink to='/home'>Home</NavLink>
                    </li>
                    <li className='NavLi'>
                        <NavLink to='/newdoggy'>New Doggy</NavLink>
                    </li>
                    <li className='NavLi'>
                        <NavLink to='/detailed'>Details</NavLink>
                    </li>
                </ul>
                <UserLeave user={user}/>
            </div>
        </div>
    )
}

export default Nav