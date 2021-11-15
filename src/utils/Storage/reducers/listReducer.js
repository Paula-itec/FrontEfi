import {GET_ALL_LIST, CREATE_LIST} from '../types'


const initialState = {
    lists: [],
    loading:true
}

const listReducer = (state = initialState, action) =>{
    switch(action.type){
        case GET_ALL_LIST:
            return {
                ...state,
                lists:action.payload,
                loading:false
            };
        case CREATE_LIST:
            return{
                ...state,
                list:action.payload,
                loading:false
            }
            default: return state
    }
}

export default listReducer

// export default function (state = initialState, action){
//     switch(action.type){
//         case GET_ALL_LIST:
//             return {
//                 ...state,
//                 lists:action.payload,
//                 loading:false
//             };
//         case CREATE_LIST:
//             return{
//                 ...state,
//                 list:action.payload,
//                 loading:false
//             }
//             default: return state
//     }
// }