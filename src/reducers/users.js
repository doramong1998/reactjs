import * as Types from './../constants/ActionType';

var initialState = {};

const users = (state = initialState,action)=>{
    switch ((action.type)) {
        case Types.CHECK_LOGIN:
            state = action.users;
            return state;
        default: return state;
    }
}

export default users;