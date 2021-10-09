import React from 'react'
import { useDispatch } from 'react-redux'
import { setFilter, setFiltered } from '../../../controlers/actions';
import {doggysFiltered,doggyTemps} from '../../../tools/Tools'
import './Filter.css'


function Filter({doggys, filter}){
    const dispatch = useDispatch();
    const temps = doggyTemps(doggys);
    const handleChange = e=>{
        const value = e.target.value;
        doggysFiltered(dispatch, setFilter, setFiltered, doggys, value)
    }

    return (
        <div className='FilterDiv'>
            <span>Show by temperament</span>
            <select value={filter}
                    onChange={handleChange}
                    ref={input=>input&&input.blur()}
                >
                    {temps.map((elem,index)=>{
                        return <option key={`filter-${index}`}>{elem}</option>
                    })};
                </select>
        </div>
    )
}

export default Filter
