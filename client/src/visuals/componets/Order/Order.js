import React from 'react';
import {useDispatch} from 'react-redux';
import {orderBy, orderDoggys, orderFiltered} from '../../../controlers/actions';
import './Order.css'


function Order({doggys, isFilter, order}) {

    const dispatch = useDispatch()
    
    const handleChange=(e)=>{
        let sortBy=[...order];

        if(e.target.value[0]==='n')sortBy=['name', e.target.value.substring(1,e.target.value.length)];
        if(e.target.value[0]==='h')sortBy=['height', e.target.value.substring(1,e.target.value.length)];
        if(e.target.value[0]==='w')sortBy=['weight', e.target.value.substring(1,e.target.value.length)];
        // if(e.target.value[0]==='o')sortBy=['origin', e.target.value.substring(1,e.target.value.length)];

        dispatch(orderBy(sortBy))
        isFilter.length && dispatch(orderFiltered(isFilter, sortBy))
        dispatch(orderDoggys(doggys, sortBy))
    }   

    return (
        <div className='OrderDiv'>
            <label htmlFor ='order'>Sort by : </label>
            <br/>
            <select name='order' onChange={handleChange}>
                <optgroup label='Name'>
                    <option value='nasc'>A-Z</option>
                    <option value='ndes'>Z-A</option>
                </optgroup>
                <optgroup label='Height'>
                    <option value='hasc'>Ascendent</option>
                    <option value='hdes'>Descendent</option>
                </optgroup>
                <optgroup label='Weight'>
                    <option value='wasc'>Ascendent</option>
                    <option value='wdes'>Descendent</option>
                </optgroup>
                {/* <optgroup label='Origin'>
                    <option value='oasc'>Created</option>
                    <option value='odes'>Api</option>
                </optgroup> */}
            </select>
        </div>
    )
}

export default Order;