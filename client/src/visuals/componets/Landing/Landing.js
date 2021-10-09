
import { useDispatch, useSelector } from 'react-redux';
import {logged, setDoggys, userState} from '../../../controlers/actions'
import './Landing.css'
import { FaRegHandPointer } from "react-icons/fa";
import { BiSearchAlt } from 'react-icons/bi';

function Landing({user}) {
    const dispatch = useDispatch();
    const order = useSelector(state=>state.order)

    const reload=()=>{
        return window.location.reload(true)
    }

    const handleClick =()=>{
        user();
        dispatch(setDoggys(undefined, order));
        dispatch(userState(true))
        dispatch(logged(true))
        //setTimeout(reload, 2500)
        window.location.reload(true)
    }

    const src = 'https://cdn.discordapp.com/attachments/890950417737998397/895695448231247892/Doggy.gif'

    return (
        <div className='Landing'>
            <img    src={src} 
                    height='400px' 
                    width='400px' 
                    alt='landing logo'
                    className='LandingImg'
                />
            <div className='LandingBtn' 
                    onClick={handleClick}
                    ref={input => input && input.focus()}
                >
                <p><FaRegHandPointer/></p>
                <span><BiSearchAlt/></span>
                Get in 
            </div>
        </div>
    )
}

export default Landing;
