import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { filterId } from '../../../controlers/actions'
import './CreatedDoggy.css'


function CreatedDoggy() {

    const doggys = useSelector(state=>state.doggys)
    const dispatch = useDispatch()


    const handleChange=(e)=>{
        dispatch(filterId(doggys, e.target.value))
    }

    return (
        <div className='CreatedCategoryDiv'>
            <label htmlFor ='order'>From : </label>
            <select name='order' onChange={handleChange}>
                <optgroup label='Create by'>
                    <option value='Api'>Api</option>
                    <option value='DB'>DataBase</option>
                </optgroup>
            </select>
        </div>
    )
}

export default CreatedDoggy
