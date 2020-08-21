import firebase from 'firebase/app'
import history from '../history'
import 'firebase/auth'


export const LOGIN ='LOGIN';


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
           // firebase.auth().createUserWithEmailAndPassword(ogrenci_email,ogrenci_s)
          //  .then((response)=>{
           //     loginSuccess(dispatch,response); })
        })

    }

   
}