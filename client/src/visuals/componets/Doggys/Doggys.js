import React , {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Dog from '../Dog/Dog';
import Pag from '../Pag/Pag';
import Order from '../Order/Order';
import Filter from '../Filter/Filter';
import {setDoggys, setTemps} from '../../../controlers/actions'
import Search from '../Search/Search';
import './Doggys.css'

function Doggys() {

    const dispatch = useDispatch()

    const doggys=useSelector(state=>state.doggys);
    const pag=useSelector(state=>state.pag);
    const filter=useSelector(state=>state.filter);
    const isFilter=useSelector(state=>state.isFilter);
    const order=useSelector(state=>state.order);
    const showFilter=useSelector(state=>state.showFilter);
    const showOrder=useSelector(state=>state.showOrder);

    const numOfPages=Math.ceil(doggys.length/9);
    const numOfFilterPages=Math.ceil(isFilter.length/9);
    
    useEffect(()=>{
        if(!doggys.length){
            dispatch(setTemps())
            dispatch(setDoggys(undefined, order))
        }
    },[])

    const showPage = (doggys, pag, isFilter)=>{
        const init=(pag-1)*9;
        const end=pag*9;
        return isFilter.length?isFilter.slice(init, end):doggys.slice(init, end)
    }

    return (
        <div className='PrimaryDiv'>
            <div className='Btns'>
                <Search/>
                {showOrder && <Order doggys={doggys} isFilter={isFilter} order={order}/>}
                {showFilter && <Filter doggys={doggys} filter={filter}/>}
                {((!numOfFilterPages&&numOfPages>1) || numOfFilterPages>1) 
                && <Pag pag={pag} pages={numOfFilterPages || numOfPages}/>
                /*default pag = 1 , this code show pag selected or filter pag selected*/ }
            </div>
            <div className='Doggys'>
                {showPage(doggys, pag, isFilter).map((doggy,index)=>{
                    return <Dog doggy={doggy} key={index}/>
                })}
                </div>
        </div>
    )
}

export default Doggys