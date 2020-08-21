import {gelen} from '../actions/kayıtlar';


export default (state=[],action) =>{
    if(action.type ===gelen){
        return action.payload;
    }
    return state;
} 