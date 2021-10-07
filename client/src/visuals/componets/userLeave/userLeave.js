import React from 'react';
import { useDispatch } from 'react-redux';
import {logged, userState} from '../../../controlers/actions';


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
            <button onClick={handleClick}>
                Salir
            </button>
        </div>
    )
}

export default UserLeave;
