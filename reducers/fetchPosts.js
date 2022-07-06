import { ALLPOSTS } from "../constants/actiontype";


const initialState = {}

const fetchPosts =  (state = initialState, action) => {
    switch (action.type) {
        
        case ALLPOSTS:
            console.log(action.payload)
            return {
                ...state,
                feeds: action.payload,
                renderBool: true
            }

        default: return state
    }

};
export default fetchPosts;