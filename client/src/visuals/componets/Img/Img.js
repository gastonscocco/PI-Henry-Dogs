import React from 'react'
import './Img.css'

function Img(props) {
    const {id, src, alt, detailed} = props
    const imgClass = detailed?'detailed':'img'

    return (
        <div id={`img-${id}`}>
            <img    id={`image-${id}`} 
                    src={src}
                    alt={alt}
                    className={imgClass}
                />
        </div>
    )
}

export default Img
