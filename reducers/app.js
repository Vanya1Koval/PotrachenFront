import {
    PRESSEDLOG,
    PRESSEDREG,
    PRESSEDLOGOUT
} from "../constants/actiontype";



const initialState = {}

const appLoad =  (state = initialState, action) => {
    switch (action.type) {
        case PRESSEDLOG:

            console.log(action.payload)
            if (action.payload) {
            return { ...state,
                isLog: true,
                currentUser: action.payload
            }}

            case PRESSEDREG:

                console.log(action.payload)
            if (action.payload) {
            return { ...state,
                isLog: true,
                currentUser: action.payload
            }}

        case PRESSEDLOGOUT:
            return { ...state,
                isLog: false
            }
            
        default: return state
    }

};
export default appLoad;