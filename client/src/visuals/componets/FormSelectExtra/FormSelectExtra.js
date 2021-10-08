import React from 'react'

function FormSelectExtra({name, show, opt, takeTemps, selectedTemps, inputChange}) {

    if(name &&!show){
        const mayus=name.split('')
        mayus[0] = mayus[0].toUpperCase();
        show= mayus.join('')
    }

    if(takeTemps && takeTemps[0] !== ''){
        takeTemps.unshift('');
    }

    return (
        <div>
            <label  htmlFor={`input-${name}`}
                    className='takeTemps'
                >{!opt && 'required '}{show} : </label>
            <select id={`input-${name}`}
                    name={name}
                    value={selectedTemps.length!==0 && selectedTemps[selectedTemps.length-1]}
                    onChange={inputChange}
                >
                    {
                        takeTemps.map((elem,index)=>{
                            if(!index)return <option key={`min-${index}`}></option>
                            if(!selectedTemps.some(temperament => elem === temperament)){
                                return <option key={`temp-${index}`}>{elem}</option>
                            }
                        })
                    }
                </select>
            

        </div>
    )
}

export default FormSelectExtra

/*
    name="selectedTemperaments" 
    nameToShow="Temperaments" 
    optional={true} 
    multiSelectArray={temperamentsToSelect} 
    multiSelectedArray={selectedTemperaments}
    handleInputChange={handleChange}/
*/