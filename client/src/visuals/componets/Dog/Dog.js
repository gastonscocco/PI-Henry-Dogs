import React from 'react';
import Name from '../Name/Name';
import Img from '../Img/Img';
import Temperaments from '../Temperaments/Temperaments';
import { useDispatch } from 'react-redux';
import {useHistory} from 'react-router-dom';
import {setDoggy} from '../../../controlers/actions'


function Dog({doggy}) {
    const {id, name, img, temperament} = doggy;
    const dispatch = useDispatch();
    const history = useHistory();
    const handleClick= ()=>{
        if(name === 'without data :c')return;
        history.push('/detailed')
        dispatch(setDoggy(id))
    }

    return (
        <div id={`doggy-${id}`} onClick={handleClick}>
            <Name   name={name} 
                    id={id}
                />
            <Img    src={img} 
                    id={id} 
                    alt={name}
                />
            <Temperaments temperament={temperament} id={id}/>
        </div>
    )
}

export default Dog
