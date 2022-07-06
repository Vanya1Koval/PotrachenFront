import { FETCHEDBYID, EDITPHOTO } from "../constants/actiontype";


const initialState = {}

const fetchPostsByID =  (state = initialState, action) => {
    switch (action.type) {
  
        case FETCHEDBYID:
           // console.log(action.payload)
            return {
                ...state,
                currentUsersPosts: action.payload,
                profileBool: true
            }

          /*   case EDITPHOTO:
            console.log(action.payload)
            return {
                ...state,
                currentUsersPosts: action.payload,
                profileBool: true
            } */

        default: return state
    }

};
export default fetchPostsByID;