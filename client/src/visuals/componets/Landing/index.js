import './index.css';
import { useDispatch, useSelector } from 'react-redux';
import {logged, setDoggys, userState} from '../../../controlers/actions'

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

    return (
        <section>
            <button className='btn' 
                    onClick={handleClick}
                    ref={input => input && input.focus()}
                >
                Entrar
            </button>
        </section>
    )
}

export default Landing;
