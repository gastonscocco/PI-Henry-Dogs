import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, changeOrder, setDoggys} from '../../../controlers/actions';
import './SearchBtn.css'


function SearchBtn({handleSearch}) {
    const dispatch = useDispatch();
    const doggys = useSelector(state=>state.doggys);
    const order = useSelector(state=>state.order);

    const clickOrder=()=>{
        dispatch(changeOrder())
    }

    const clickFilter=()=>{
        dispatch(changeFilter())
    }

    const clickClean=()=>{
        dispatch(setDoggys(undefined, order))
    }

    return (
        <div className='SearchBtns'>
            <button className='SBtn' onClick={handleSearch}>Search</button>
            {doggys.length !== 0 && <button className='SBtn' onClick={clickClean}>All Doggys</button>}
            {doggys.length !== 0 && <button className='SBtn' onClick={clickOrder}>Sort by</button>}
            {doggys.length !== 0 && <button className='SBtn' onClick={clickFilter}>Filter</button>}
        </div>
    )
}

export default SearchBtn
