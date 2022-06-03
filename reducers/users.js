import {
    FETCHED
} from "../constants/actiontype";



const initialState = {}

const users =  (state = initialState, action) => {
    switch (action.type) {
        case FETCHED:
            if (action.payload) {
            return { ...state,
                main: action.payload,
               renderBool: true 
            }}


        default: return state
    }

};
export default users;