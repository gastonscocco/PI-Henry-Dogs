
import {getTemperaments,getDoggys,getDoggy,postDoggy} from '../apiReq/index'


// ACTIONS
export const USERSTATE = 'USERSTATE';
export const LOGGED = 'LOGGED'
export const SELECTPAG = 'SELECTPAG';
export const ORDERBY = 'ORDERBY';
export const SETORDER = 'SETORDER';
export const ORDERDOGGYS = 'ORDERDOGGYS';
export const ORDERFILTERED = 'ORDERFILTERED'
export const SETDOGGYS = 'SETDOGGYS';
export const SETFILTER = 'SETFILTER';
export const SETFILTERED = 'SETFILTERED';
export const SEARCHDOGGYS = 'SEARCHDOGGYS';
export const HIDEOPTIONS = 'HIDEOPTIONS';
export const CHANGEORDER = 'CHANGEORDER';
export const CHANGEFILTER = 'CHANGEFILTER';
export const CLEANDOGGYS = 'CLEANDOGGYS';
export const SETDOGGY = 'SETDOGGY';
export const CLEANSEARCH = 'CLEANSEARCH';
export const SETTEMPS = 'SETTEMPS';


export function userState(payload){
    return {
        type: USERSTATE,
        payload
    }
};

export function logged(payload){
    return {
        type: LOGGED,
        payload
    }
}

export function selectPag(payload){
    return{
        type: SELECTPAG,
        payload
    }
}

export function orderBy(payload){
    return {
        type:ORDERBY,
        payload
    }
}

export function setOrder(payload){
    return{
        type: SETORDER,
        payload
    }
}

export function orderDoggys(doggys, order){
    if(doggys.length){
        doggys.sort((a,b)=>{
            const category = order[0];
            const direction = order[1];

            if(category==='name'){
                if(a[category]>b[category]) return direction==='asc'?1:-1
                if(a[category]<b[category]) return direction==='asc'?-1:1
                return 0
            }
            if(a[category][0]===b[category][0]){
                return direction==='asc'? 
                    a[category][1] - b[category][1]
                        :
                    b[category][1] - a[category][1]
            }
            return direction==='asc'? 
                a[category][0] - b[category][0]
                    :
                b[category][0] - a[category][0]
        });
    }
    // console.log('From Orderer Doggys')
    // console.log(doggys)
    return {
        type:ORDERDOGGYS,
        payload: doggys
    }
}

export function setDoggys(name, order){
    return async dispatch=>{
        try{
            const doggys=await getDoggys(name);
            const action = orderDoggys(doggys, order);
            // console.log('getdoggys ready')
            // console.log('setDoggys + '+ action.payload)
            dispatch({
                type:SETDOGGYS,
                payload: action.payload
            })
        }catch(e){
            console.log(e)
        }
    }
}

export function orderFiltered(doggys, order){
    const action = orderDoggys(doggys, order);
    return {
        type: ORDERFILTERED,
        payload: action.payload
    }
}

export function setFilter(payload) {
    return {
        type: SETFILTER,
        payload
    }
}

export function setFiltered(payload) {
    return {
        type: SETFILTERED,
        payload
    }
}

export function searchDoggys(payload){
    return {
        type:SEARCHDOGGYS,
        payload:payload
    }
}

export function changeOrder(){
    return {
        type: CHANGEORDER
    }
}

export function changeFilter(){
    return { 
        type:CHANGEFILTER
    }
}

export function setDoggy(id){
    return async dispatch=>{
        try {
            const dog = await getDoggy(id);
            dispatch({
                type: SETDOGGY,
                payload: dog
            })
        }catch(e){
            console.log(e)
        }
    }
}

export function cleanSearch(){
    return {
        type:CLEANSEARCH
    }
}

export function setTemps(){
    return async dispatch=>{
        try{
            const temps = await getTemperaments();
            dispatch({
                type : SETTEMPS,
                payload: temps
            })
        }catch(e){
            console.log(e)
        }
    }
}