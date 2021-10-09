import React from 'react';
import { useDispatch } from 'react-redux';
import {logged, userState} from '../../../controlers/actions';
import './userLeave.css'


function UserLeave({user}) {
    const dispatch = useDispatch()
    const handleClick=()=>{
        user();
        dispatch(userState(''))
        dispatch(logged(false))
        window.location.reload(true)
    }


    return (
        <div>
            <button onClick={handleClick}
                    className='btn'
                >
                Exit
            </button>
        </div>
    )
}

export default UserLeave;
