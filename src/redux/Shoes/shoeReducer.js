import { BUY_SHOE } from "./shoeTypes"

const initialState = {
    numOfShoes : 100
}

const shoeReducer = (state = initialState,action)=>{

    switch(action.type){
        case BUY_SHOE: return{
            ...state,
            numOfShoes: action.payload
            
        }
        default: return state
    }

}

export default shoeReducer