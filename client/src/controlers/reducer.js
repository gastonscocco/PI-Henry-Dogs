
import { CHANGEFILTER, CHANGEORDER, CLEANDOGGYS, CLEANSEARCH, 
    LOGGED, ORDERBY, ORDERDOGGYS, ORDERFILTERED, SEARCHDOGGYS, SELECTPAG, 
    SETDOGGY, 
        SETDOGGYS, SETFILTER, SETFILTERED, SETORDER, SETTEMPS, USERSTATE, } from './actions';


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
    breed:'', height:['',''], weight:['',''], lifeSpan:['',''],
    img:'', selectedTemperaments:[],
    newDoggy:{}
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

        default:
            return state
    }
}

export default reducer;