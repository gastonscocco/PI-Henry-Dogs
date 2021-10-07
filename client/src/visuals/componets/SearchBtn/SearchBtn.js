import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, changeOrder, setDoggys} from '../../../controlers/actions';


function SearchBtn({handleSearch}) {
    const dispatch = useDispatch();
    const doggys = useSelector(state=>state.doggys);
    const search = useSelector(state=>state.search);
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
        <div>
            <button onClick={handleSearch}>Search</button>
            {doggys.length !== 0 && <button onClick={clickClean}>All Doggys</button>}
            {doggys.length !== 0 && <button onClick={clickOrder}>Order Doggys</button>}
            {doggys.length !== 0 && <button onClick={clickFilter}>Filter Doggys</button>}
        </div>
    )
}

export default SearchBtn
