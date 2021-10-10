import React from 'react';
import Name from '../Name/Name';
import Img from '../Img/Img';
import Temperaments from '../Temperaments/Temperaments';
import { useDispatch } from 'react-redux';
import {Link, useHistory} from 'react-router-dom';
import {setDoggy} from '../../../controlers/actions'
import './Dog.css'


function Dog({doggy}) {
    const {id, name, img, temperament} = doggy;
    const dispatch = useDispatch();
    const history = useHistory();


    const handleClick= ()=>{
        const json = JSON.stringify(doggy)
        localStorage.setItem("doggy", json);
        if(name === 'without data :c')return;
        history.push(`/detailed`)
        //history.push(`/detailed/${id}`)
        dispatch(setDoggy(id))
    }

    return (
        // <Link to={`/detailed/${id}`}>
            <div    id={`doggy-${id}`} 
                    onClick={handleClick}
                    className='DogCard'
                >
                <Name   name={name} 
                        id={id}
                    />
                <div className='DoggyImg'>
                    <Img    src={img} 
                            id={id} 
                            alt={name}
                        />
                </div>
                <Temperaments temperament={temperament} id={id}/>
            </div>
        // </Link>
    )
}

export default Dog
