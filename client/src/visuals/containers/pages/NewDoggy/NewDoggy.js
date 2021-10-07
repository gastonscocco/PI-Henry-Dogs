import React from 'react'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setTemps } from '../../../../controlers/actions'
import FormCreate from '../../../componets/FormCreate/FormCreate';


function NewDoggy() {
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(setTemps())
    }, []);

    return (
        <div>
            <h1>Create your Doggy!</h1>
            <div>
                <FormCreate/>
            </div>
        </div>
    )
}

export default NewDoggy
