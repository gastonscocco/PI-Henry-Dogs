import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { searchDoggys, setDoggys, cleanSearch } from '../../../controlers/actions';
import SearchBtn from '../SearchBtn/SearchBtn';
import './Search.css'


function Search() {
    const search = useSelector(state=>state.search);
    const order = useSelector(state=>state.order);
    const doggys = useSelector(state=>state.doggys);
    const dispatch = useDispatch();
    let doggySearch=search;

    const ClickCleanSearch=()=>{
        dispatch(cleanSearch())
        doggySearch=''
    }

    const handleSearch=()=>{
        dispatch(setDoggys(search, order));
        ClickCleanSearch()
    }

    const handleChange= e=>{
        dispatch(searchDoggys(e.target.value))
    }

    const handleKey= e=>{
        if(e.keyCode===13){
            dispatch(setDoggys(search, order));
            ClickCleanSearch()
        }
    }

    return (
        <div className='SearchDiv'>
            <label htmlFor="search"> Search by Breed </label>
            <input  type="text" 
                    list="Breeds" 
                    id="search" 
                    name="search"
                    onChange={handleChange}
                    onKeyDown={handleKey}
                    value={doggySearch}
                />
                <datalist id="Breeds" className='searchBar'>
                    {doggys.map((elem,index)=>{
                            return <option value={elem.name} key={index}/>
                        })}
                </datalist>
            
            <SearchBtn handleSearch={handleSearch}/>
        </div>
    )
}

export default Search

/* <label htmlFor='search'>Search by Breed </label>
        <input  id='search'
        type='text'
        onChange={handleChange}
        onKeyDown={handleKey}
        value={search}
    /> */