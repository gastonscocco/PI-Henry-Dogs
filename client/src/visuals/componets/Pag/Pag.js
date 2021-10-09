import React from 'react';
import {selectPag} from '../../../controlers/actions';
import {useDispatch} from 'react-redux';
import './Pag.css'

function Pag({pag, pages}) {
    pag=Number(pag);

    const dispatch = useDispatch();
    const numOfPages = new Array(pages).fill(0) //array con 0, para tener un legth 

    // functions for change pages
    const clickNext=()=>{
        dispatch(selectPag(pag++));
    }

    const clickPrev=()=>{
        dispatch(selectPag(--pag));
    }
    // with keys
    const keyNext=event=>{
        event.keyCode===39 && dispatch(selectPag(++pag));
    }

    const keyPrev=event=>{
        event.keyCode===37 && dispatch(selectPag(--pag))
    }
    // with select
    const changePag=event=>{
        const value=event.target.value;
        dispatch(selectPag(value));
    }

    return (
        <div className='PagDiv'>
            <button className='PagBtn' disabled={pag===1} onClick={clickPrev} onKeyDown={keyPrev}>{'<'}</button>
                <div>
                    <span>Page </span>
                        <select value={pag} onChange={changePag} ref={input => input && input.focus()}>
                            {numOfPages.map((elem, index)=>{
                                return <option key={`pag-${index}`}>{index+1}</option>
                            })}
                        </select>
                    <span> of {pages}</span>
                </div>
            <button className='PagBtn' disabled={pag===pages} onClick={clickNext} onKeyDown={keyNext}>{'>'}</button>
        </div>
    )
}

export default Pag
