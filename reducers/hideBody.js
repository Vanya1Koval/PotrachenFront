import { HIDE,SHOW, RESET, REVERSE } from "../constants/actiontype";


const initialState = {}

const hideBody =  (state = initialState, action) => {
    switch (action.type) {
        case HIDE:
            return {
                ...state,
                buttonBool: true
            }
        case SHOW:
            return {
                ...state,
                buttonBool: false
            }
        case RESET:
            return {
                ...state,
                buttonBool: false
            }
        case REVERSE:
            return {
                ...state,
                buttonBool: false
            }
        default: return state
    }

};
export default hideBody;