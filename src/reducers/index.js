import {combineReducers} from 'redux';
import Readucer from './reducer';
import GelenVeri from './verilist';

export default combineReducers({
    auth: Readucer,
    Glnveri: GelenVeri
});