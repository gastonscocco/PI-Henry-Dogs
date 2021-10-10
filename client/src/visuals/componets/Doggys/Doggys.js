import React , {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Dog from '../Dog/Dog';
import Pag from '../Pag/Pag';
import Order from '../Order/Order';
import Filter from '../Filter/Filter';
import {setDoggys, setTemps} from '../../../controlers/actions'
import Search from '../Search/Search';
import './Doggys.css'
import CreatedDoggy from '../CreatedDoggy/CreatedDoggy';
import Loading from '../Loading/Loading';

function Doggys() {

    const dispatch = useDispatch()

    const doggys=useSelector(state=>state.doggys);
    const fromBy=useSelector(state=>state.fromBy);
    const doggysFromDb = useSelector(state=>state.doggysFromDb)
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
        const init=pag==1?(pag-1)*8:(pag-1)*10;
        const end =pag==1?pag*8:pag*10;
        return isFilter.length?isFilter.slice(init, end):doggys.slice(init, end)
    }

    return !doggys.length?
        (<div>
            <Loading/>
        </div>)
        :
        (<div className='PrimaryDiv'>
            <div className='Btns'>
                <Search/>
                {showOrder && <CreatedDoggy/>}
                {showOrder && <Order doggys={doggys} isFilter={isFilter} order={order}/>}
                {showFilter && <Filter doggys={doggys} filter={filter}/>}
                {((!numOfFilterPages&&numOfPages>1) || numOfFilterPages>1) 
                && <Pag pag={pag} pages={numOfFilterPages || numOfPages}/>}
                
            </div>
            <div className='Doggys'>
                {showPage((fromBy?doggys:doggysFromDb), pag, isFilter).map((doggy,index)=>{
                    return <Dog doggy={doggy} key={index}/>
                })}
            </div>
        </div>
    )
}

export default Doggys