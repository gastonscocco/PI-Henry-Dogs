import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {doggysFiltered, validateBody, bodyFormater} from '../../../tools/Tools';
import './FormCreate.css'

import {
    cleanFields, setTemps, createDoggy, setBody, setName, 
    setDoggy, setError, setHeight, setLifeSpan, setSelectTemps, 
    setImg, setWeight, doggyUpdate, updateIsFilter
        } from '../../../controlers/actions';

import FormText from '../FormText/FormText';
import FormSelect from '../FormSelect/FormSelect';
import FormError from '../FormError/FormError';
import FormSelectExtra from '../FormSelectExtra/FormSelectExtra';
import FormTempSelect from '../FormTempSelect/FormTempSelect';

function FormCreate() {
    const dispatch = useDispatch()
    const history=useHistory()

    let nameDoggy = useSelector(state=>state.name);
    
    const height = useSelector(state=>state.height);
    const weight = useSelector(state=>state.weight);
    const lifeSpan = useSelector(state=>state.lifeSpan);
    const img = useSelector(state=>state.img);
    const newDoggy = useSelector(state=>state.newDoggy);
    const error = useSelector(state=>state.error);
    const body = useSelector(state=>state.body);

    const doggys = useSelector(state=>state.doggys);
    const order = useSelector(state=>state.order);
    const filter = useSelector(state=>state.filter);
    const isFilter = useSelector(state=>state.isFilter);

    const takeTemperaments = useSelector(state=>state.takeTemperaments)
    const selectedTemps = useSelector(state=>state.selectedTemps)


    useEffect(() => {
        if(newDoggy.id){
            dispatch(setDoggy(newDoggy.id));
            dispatch(doggyUpdate(doggys, newDoggy, order));
            dispatch(setTemps())
            if(isFilter.length){
                doggysFiltered(dispatch, undefined, undefined, doggys, filter, true, updateIsFilter)
            }
            history.push('/newdoggy');
        }
    }, [newDoggy])

    const inputChange = event=>{
        const target = event.target
        const actions = {setName, setHeight, setWeight, setLifeSpan, setSelectTemps, setImg}
        const inputs = { nameDoggy, height, weight, lifeSpan, img, selectedTemps}
        const body = bodyFormater(inputs, target, dispatch, actions)
        dispatch(setError(validateBody(body, setBody, dispatch)));
    }

    const emptyFields=()=>{
        dispatch(cleanFields())
    }

    const createNewDoggy=()=>{
        validateBody(body, setBody, dispatch)
        dispatch(createDoggy(body))
    }

    const clearTemp= event=>{
        const target=event.target
        const ref = target.id.split('-')[1];
        inputChange({target: {name: 'deleteTemp', value: ref}})
    }

    const emptyTemps=()=>{
        inputChange({target: {name: 'deleteAllTemps'}});
    }

    const goHome= event=>{
        window.location.href='http://localhost:3000/home'
        
    }


    return (
        <div className='FormCreatePrimaryDiv'>
            <div className='DivIncludeForms'>
                <div className='DivsRequired'>
                    <FormText   type='text'
                                name='name'
                                value={nameDoggy}
                                inputChange={inputChange}
                                error={error.name && true}
                            />
                    <FormSelect name='height'
                                value={height}
                                max={250}
                                unit='Cm'
                                inputChange={inputChange}
                                error={error.height && true}
                            />
                    <FormSelect name='weight'
                                value={weight}
                                max={80}
                                unit='Kg'
                                inputChange={inputChange}
                                error={error.weight && true}
                            />
                </div>
                <div className='DivOptionals'>
                    <FormText   type='text'
                                name='img'
                                show='Doggy Image (URL)'
                                value={img}
                                inputChange={inputChange}
                                opt={true}
                            />
                    <FormSelect name='lifeSpan'
                                value={lifeSpan}
                                max={30}
                                unit='Years'
                                inputChange={inputChange}
                                error={error.lifeSpan && true}
                            />
                    <FormSelectExtra    name='setTemp'
                                        show={'Select Temperament'}
                                        opt={true}
                                        takeTemps={takeTemperaments}
                                        selectedTemps={selectedTemps}
                                        inputChange={inputChange}
                            />
                    {selectedTemps.length !== 0 && 
                    <FormTempSelect temps={selectedTemps} 
                                        clearTemp={clearTemp}
                                        emptyTemps={emptyTemps}
                                        variousTemps={selectedTemps}
                            />
                    }
                </div>
            </div>
            { Object.keys(error).length !== 0 && (
                <div className='DivErrorForm'>
                    <FormError error={Object.values(error)} />
                </div>
            )}
            <div className='BtnsDivCreate'>
                <button onClick={emptyFields}>Empty all fields</button>
                <button disabled={nameDoggy.length<1 || Object.keys(error).length?true:false} onClick={createNewDoggy}>Create Doggy!</button>
                <button onClick={goHome}>Home</button>
            </div>
        </div>
    )
}

export default FormCreate;
