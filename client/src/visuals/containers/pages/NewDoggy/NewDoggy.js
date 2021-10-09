import React from 'react'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setTemps } from '../../../../controlers/actions'
import FormCreate from '../../../componets/FormCreate/FormCreate';
import './NewDoggy.css'


function NewDoggy() {
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(setTemps())
    }, []);

    return (
        <div className='NewDoggyDiv'>
            <h1>Create your Doggy!</h1>
            <FormCreate/>
        </div>
    )
}

export default NewDoggy
