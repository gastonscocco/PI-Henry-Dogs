import React from 'react'
import {useSelector} from 'react-redux';
import Img from '../../../componets/Img/Img';
import Info from '../../../componets/Info/Info';
import Name from '../../../componets/Name/Name';
import Temperaments from '../../../componets/Temperaments/Temperaments';



function Detailed(){

    const doggy = useSelector(state=>state.doggy);
    const {id, name, img, temperament, height, weight, lifeSpan} = doggy;

    return (
        <div>
            <Name name={name} id={id}/>
            <Img id={id} src={img} detailed={true}/>
            {height && <Info height={height} weight={weight} lifeSpan={lifeSpan}/>}
            {temperament && <Temperaments temperament={temperament} id={id}/>}
        </div>
    )
}

export default Detailed
