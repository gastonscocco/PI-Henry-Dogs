
import { 
        CHANGEFILTER, CHANGEORDER, CLEANDOGGYS, CLEANFIELDS, CLEANNEW, CLEANSEARCH, 
        CREATEDOGGY, DOGGYUPDATE, LOGGED, ORDERBY, ORDERDOGGYS, ORDERFILTERED, SEARCHDOGGYS, 
        SELECTPAG,SETBODY,SETDOGGY, SETDOGGYS, SETERROR, SETFILTER, SETFILTERED, 
        SETHEIGHT, SETIMG, SETLIFESPAN, SETNAME, SETORDER, 
        SETSELECTTEMPS, 
        SETTEMPS, SETWEIGHT, UPDATEISFILTER, USERSTATE, 
    } from './actions';


const initialState={
    userLog:'',
    logged:false,
    doggys:[],
    doggy:{},
    pag:1,
    search:'',
    filter:'all',
    isFilter:[],
    showFilter:false,
    showOrder:false,
    order: ['name', 'asc'],
    takeTemperaments:[],
    name:'', height:['',''], weight:['',''], lifeSpan:['',''],
    img:'', selectedTemps:[],
    newDoggy:{},
    body:{},
    error:{error:0}
}

function reducer(state=initialState, {type, payload}){
    switch (type) {
        
        case SETDOGGYS:
            return {...state, pag:1, filter:'all', isFilter:[] , doggys: payload}

        case USERSTATE:
            return {...state, userLog:payload};

        case LOGGED:
            return {...initialState, height:['',''], lifeSpan: ['',''], weight:['',''], takeTemperaments:[], logged:payload}
        
        case SELECTPAG:
            return {...state, pag:payload}

        case ORDERBY:
            return {...state, order:payload}

        case SETORDER:
            return {...state, showOrder:payload}

        case ORDERDOGGYS:
            return {...state, doggys: payload}

        case ORDERFILTERED:
            return {...state, isFilter: payload}

        case SETFILTER:
            return {...state, filter: payload};

        case SETFILTERED:
            return {...state, pag: 1, isFilter: payload};

        case SEARCHDOGGYS:
            return {...state, search: payload}

        case CHANGEORDER:
            return {...state, showOrder:!state.showOrder}

        case CHANGEFILTER:
            return {...state, showFilter:!state.showFilter}

        case CLEANDOGGYS:
            return {
                ...state, 
                doggys:[],
                pag:1,
                search:'',
                filter:'all',
                isFilter:[],
                showFilter:false,
                showOrder:false,
                order: ['name', 'asc']
            }

        case SETDOGGY:
            return {...state, doggy: payload}

        case CLEANSEARCH:
            return {...state, search:''}

        case SETTEMPS:
            return {...state, takeTemperaments: payload}

        case SETNAME:
            return {...state, name: payload}

        case SETIMG:
            return {...state, img: payload}

        case SETHEIGHT:
            return {...state, height: payload}

        case SETWEIGHT:
            return {...state, weight: payload}

        case SETLIFESPAN:
            return {...state, lifeSpan: payload}

        case SETERROR:
            return {...state, error: payload}

        case DOGGYUPDATE:
            return {...state, doggys: payload}

        case UPDATEISFILTER:
            return {...state, isFilter: payload}

        case SETSELECTTEMPS:
            return {...state, selectedTemps: payload}

        case SETBODY:
            return {...state, body: payload}

        case CLEANFIELDS:
            return {
                ...state,
                name:'',
                height:['',''],
                weight:['',''],
                lifeSpan:['',''],
                selectedTemps:[],
                img:'',
                body:{},
                error:{error:0}
            }

        case CREATEDOGGY:
            return {
                ...state,
                newDoggy: payload,
                name:'',
                height:['',''],
                weight:['',''],
                lifeSpan:['',''],
                selectedTemps:[],
                takeTemperaments:[],
                img:'',
                body:{},
                error:{error:0}
            }

        case CLEANNEW:
            return {...state, newDoggy:{}}

        default:
            return state
    }
}

export default reducer;

