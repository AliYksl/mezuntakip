import firebase from 'firebase/app'
import history from '../history'
import 'firebase/auth'


export const LOGIN ='LOGIN';
export const LOGGED_IN ='LOGGED_IN';
export const NOT_LOGGED_IN='NOT_LOGGED_IN';
export const LOGOUT='LOGOUT';



const loginSuccess = (dispatch,response) =>{
    history.push('/ogretmengiris/Ogrenciler')
    dispatch({type:LOGIN,payload:response.user});
}

export const login =(ogrenci_email,ogrenci_s) =>{
 
    return async (dispatch) =>{
     firebase.auth().signInWithEmailAndPassword(ogrenci_email,ogrenci_s)
        .then((response)=>{
            loginSuccess(dispatch,response);
          
        })
        .catch((err)=>{
            window.alert("E-mail veya şifre yanlış.");

        })

    }

   
};

export const isLoggedIn =() =>{
    return dispatch =>{

        firebase.auth().onAuthStateChanged(user =>{
            if(user){
               // history.push('/');
                dispatch({
                    
                    type:LOGGED_IN,
                    payload:user
                })
            }
            else{
                dispatch({
                    type:NOT_LOGGED_IN
                })
            }
        });
    }
};

export const logout =()=>{

    return dispatch=>{
        firebase.auth().signOut().then(()=>{
            dispatch({type:LOGOUT})
        });
    }
};