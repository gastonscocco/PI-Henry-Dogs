import React from 'react';
import {useDispatch} from 'react-redux';
import {orderBy, orderDoggys, orderFiltered} from '../../../controlers/actions';

function Order({doggys, isFilter, order}) {

    const dispatch = useDispatch()
    
    const handleChange=(e)=>{
        let sortBy=[...order];

        if(e.target.value[0]==='n')sortBy=['name', e.target.value.substring(1,e.target.value.length)];
        if(e.target.value[0]==='h')sortBy=['height', e.target.value.substring(1,e.target.value.length)];
        if(e.target.value[0]==='w')sortBy=['weight', e.target.value.substring(1,e.target.value.length)]

        //console.log(sortBy)
        dispatch(orderBy(sortBy))
        isFilter.length && dispatch(orderFiltered(isFilter, sortBy))
        dispatch(orderDoggys(doggys, sortBy))
    }   

    return (
        <div>
            <label htmlFor ='order'>Sort by : </label>
            <br/>
            <select name='order' onChange={handleChange}>
                <optgroup label='name'>
                    <option value='nasc'>A-Z</option>
                    <option value='ndes'>Z-A</option>
                </optgroup>
                <optgroup label='height'>
                    <option value='hasc'>Ascendent</option>
                    <option value='hdes'>Descendent</option>
                </optgroup>
                <optgroup label='weight'>
                    <option value='wasc'>Ascendent</option>
                    <option value='wdes'>Descendent</option>
                </optgroup>
            </select>
        </div>
    )
}

export default Order;