import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux';
import { useHistory } from 'react-router';
import { cleanDog, setDoggy } from '../../../../controlers/actions';
import Img from '../../../componets/Img/Img';
import Info from '../../../componets/Info/Info';
import Name from '../../../componets/Name/Name';
import Temperaments from '../../../componets/Temperaments/Temperaments';
import './Detailed.css'


function Detailed({match}){
    
    const dispatch = useDispatch()
    const doggy = useSelector(state=>state.doggy);
    const {id, name, img, temperament, height, weight, lifeSpan} = doggy;
    const logo = 'https://cdn.discordapp.com/attachments/890950417737998397/895771750325972992/Doggy.png'

    //const history=useHistory()
    
    useEffect(() => {
        if(doggy){
            if(Object.keys(doggy).length<10){
                if(Object.keys(doggy).length<10){
                    const jsonGet = localStorage.getItem("doggy")
                    const savedDoggy = JSON.parse(jsonGet)
                    dispatch(setDoggy(savedDoggy.id))
                }
            }
        }
    }, [])

    const cleanDetailDoggy= ()=>{
        if(Object.keys(doggy).length){
            const json = JSON.stringify({})
            localStorage.setItem("doggy", json);
            dispatch(cleanDog())
        }
    }
    
    return (
        <div className='DetailedPage'>
            <div className='DetailedData'>
                {name && <Name name={name} id={id} detailed={true}/>}
                {height?<Info height={height} weight={weight} lifeSpan={lifeSpan} detailed={true}/>:<span className='withoutData'>Without selected Doggy</span>}
                {temperament && <Temperaments temperament={temperament} id={id} detailed={true}/>}
            </div>
            <div className='DetailedImg'>
                {img?<Img id={id} src={img} detailed={true}/>:<img src={logo} height='400px' width='400px' alt='logo'/>}
            </div>
            <button disabled={!Object.keys(doggy).length} onClick={cleanDetailDoggy}>Clean Details</button>
        </div>
    )
}

export default Detailed
