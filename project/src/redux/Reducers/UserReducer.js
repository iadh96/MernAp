import {GET_USERS, GET_USER, TOGGLE_FALSE, TOGGLE_TRUE} from '../UserTypes'


const initialstate={
    Users:[],
    User:[],
    edit: false,
}

const UserReducer = (state=initialstate,action)=>{

    switch (action.type) {
        case GET_USERS:
            return {...state, Users:action.payload }


            case GET_USER :
                return {...state, User:action.payload}

                case TOGGLE_TRUE:
                    return {...state,edit:true}

                    case TOGGLE_FALSE:
        return {...state, edit:false}
        default:
         return state
    }
}



export default UserReducer
