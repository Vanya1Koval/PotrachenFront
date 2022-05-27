import {
    PRESSED,
    PRESSEDLOGOUT
} from "../constants/actiontype";



const initialState = {}

const appLoad =  (state = initialState, action) => {
    switch (action.type) {
        case PRESSED:
            return { ...state,
                isLog: true
            }

        case PRESSEDLOGOUT:
            return { ...state,
                isLog: false
            }
        default: return state
    }

};
export default appLoad;