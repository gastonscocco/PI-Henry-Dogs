import React from 'react'
import './Img.css'

function Img(props) {
    
    const {id, src, alt, detailed} = props
    const imgClass = detailed?'ImgDetailed':'img'
    const divImg = detailed?'imgDetailedDiv':'imgDiv'

    return (
        <div    id={`img-${id}`}
                className={divImg}
            >
            <img    id={`image-${id}`} 
                    src={src}
                    alt={alt}
                    className={imgClass}
                />
        </div>
    )
}

export default Img
