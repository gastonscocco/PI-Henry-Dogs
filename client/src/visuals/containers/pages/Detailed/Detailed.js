import React from 'react'
import {useSelector} from 'react-redux';
import Img from '../../../componets/Img/Img';
import Info from '../../../componets/Info/Info';
import Name from '../../../componets/Name/Name';
import Temperaments from '../../../componets/Temperaments/Temperaments';
import './Detailed.css'



function Detailed(){

    const doggy = useSelector(state=>state.doggy);
    const {id, name, img, temperament, height, weight, lifeSpan} = doggy;
    const logo = 'https://cdn.discordapp.com/attachments/890950417737998397/895771750325972992/Doggy.png'
    return (
        <div className='DetailedPage'>
            <div className='DetailedData'>
                {name && <Name name={name} id={id} detailed={true}/>}
                {height?<Info height={height} weight={weight} lifeSpan={lifeSpan} detailed={true}/>:'Without selected Doggy'}
                {temperament && <Temperaments temperament={temperament} id={id} detailed={true}/>}
            </div>
            <div className='DetailedImg'>
                {img?<Img id={id} src={img} detailed={true}/>:<img src={logo} height='400px' width='400px' alt='logo'/>}
            </div>
        </div>
    )
}

export default Detailed
