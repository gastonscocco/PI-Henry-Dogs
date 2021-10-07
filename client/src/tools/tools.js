
export function doggyTemps(doggys){

    const temps=[];
    let fail=null;

    doggys.forEach(elem=>{
        if(elem.temperament){
            const doggyTemp = elem.temperament.toLowerCase().split(', ');
            doggyTemp.forEach(item=>{
                !temps.some(x=>x===item) && temps.push(item)
            });
        }else if(!fail){
            fail='without data :c'
        }
    });

    temps.sort();
    fail && temps.unshift(fail);
    temps.unshift('all');
    
    return temps
}

export function doggysFiltered(dispatch, setFilter, setFiltered, doggys, value, update, updateFiltered){
    const filters=[];
    !update && dispatch(setFilter(value));
    if(value === 'without data :c'){
        doggys.forEach(elem=>{
            if(!elem.temperament){
                filters.push(elem)
            }
        })
    }else{
        doggys.forEach(elem=>{
            if(elem.temperament && elem.temperament.toLowerCase().includes(value)){
                filters.push(elem)
            }
        })
    }
    !update?dispatch(setFiltered(filters)):dispatch(updateFiltered(filters)) 
}

module.export={
    doggyTemps,
    doggysFiltered,

}