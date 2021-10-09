
// tools for validate News Doggys

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

export function doggysFiltered(dispatch, setFilter, setIsFilter, doggys, value, update, updateIsFilter){
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
    !update?dispatch(setIsFilter(filters)):dispatch(updateIsFilter(filters)) 
}

export function validateBody(body, setbody, dispatch){
    const {name, height, weight, lifeSpan} = body;
    const listHeight = height.split(' - ');
    const listWeight = weight.split(' - ');
    const listLifeSpan = lifeSpan.split(' ');
    const listError = {}
    

    
    
    if(!listHeight[0]) {
        listError.height= 'Height min is required';
    }else if(!listHeight[1]){
        listError.height= 'Height max is required';
    }else if(parseInt(listHeight[0]) > parseInt(listHeight[1])){
        listError.height= 'Height max must be greater than Height min';
    }
    
    if(!listWeight[0]) {
        listError.weight= 'Weight min is required';
    }else if(!listWeight[1]){
        listError.weight= 'Weight max is required';
    }else if(parseInt(listWeight[0]) > parseInt(listWeight[1])){
        listError.weight= 'Weight max must be greater than Weight min';
    }

    if(!listLifeSpan[0]) {
        listError.lifeSpan= 'LifeSpan min is required';
    }else if(!listLifeSpan[2]){
        listError.lifeSpan= 'LifeSpan max is required';
    }else if(parseInt(listLifeSpan[0]) > parseInt(listLifeSpan[2])){
        listError.lifeSpan= 'LifeSpan max must be greater than LifeSpan min';
    }

    if(!name) listError.name= 'Name is required';

    console.log('list errors   '+Object.keys(listError))
    if(!Object.keys(listError).length)dispatch(setbody(body));

    return listError;

}

export function bodyFormater(inputs, target, dispatch, actions){

    const { height, weight, lifeSpan, img } = inputs;
    const {setName, setHeight, setWeight, setLifeSpan, setSelectTemps, setImg} = actions;

    let nameDoggyMin = inputs.nameDoggy
    let selectedTemps = inputs.selectedTemps;
    let nameDoggy

    if(nameDoggyMin){
        nameDoggy = nameDoggyMin[0].toUpperCase()+nameDoggyMin.slice(1)
    }

    const value = target.value;
    const name = target.name;

    switch (name) {
        case 'setTemp':
            if(value){
                selectedTemps.push(value)
                dispatch(setSelectTemps([...selectedTemps]))
            }
            break;

        case 'deleteTemp':
            if(value){
                selectedTemps.splice(value, 1);
                dispatch(setSelectTemps([...selectedTemps]))
            }
            break;

        case 'deleteAllTemps':
            selectedTemps=[];
            dispatch(setSelectTemps(selectedTemps));
            break;
        
        case 'name':
            dispatch(setName(value))
            nameDoggyMin = value;
            //return dispatch(setName(value))()
            break;

        case 'img':
            dispatch(setImg(value))
            break;

        case 'heightMin':
            height[0] = value
            dispatch(setHeight([...height]))
            break;

        case 'heightMax':
            height[1] = value
            dispatch(setHeight([...height]))
            break;

        case 'weightMin':
            weight[0]=value
            dispatch(setWeight([...weight]))
            break;

        case 'weightMax':
            weight[1]=value
            dispatch(setWeight([...weight]))
            break;

        case 'lifeSpanMin':
            lifeSpan[0]=value
            dispatch(setLifeSpan([...lifeSpan]))
            break;

        case 'lifeSpanMax':
            lifeSpan[1]=value;
            dispatch(setLifeSpan([...lifeSpan]))
            break;

        default:
            return
    }
    
    const body = {
        name: nameDoggy,
        height: height.join(' - '),
        weight: weight.join(' - ')
    };
    if (img) {body.img = img}else if(!img){body.img = 'https://cdn.discordapp.com/attachments/890950417737998397/896541143284736070/unknown.png'};
    if(lifeSpan.length) body.lifeSpan = `${lifeSpan.join(' - ')} years` ;
    if(selectedTemps.length) body.temperaments = selectedTemps;
    //if(!id)body.id=Math.ceil(Math.random()*100000)
    return body
}



module.export={
    doggyTemps,
    doggysFiltered,
    validateBody,
    bodyFormater,
}