import React,{Component} from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import Secim from './componets/secim';
import Ogretmengiris from './componets/ogretmengiris';
import Ogrencigiris from './componets/ogrencigiris';
import KayıtOl from './componets/kayitol';
import Ogretmenmenu from './componets/ogretmenmenu';
import UyeEkle from './componets/uyeekle';
import UyeSil from './componets/uyesil';
import Basvuru from './componets/basvurular';
import history from './history'
import './App.css';
import firebase from 'firebase/app'
import 'firebase/auth'

class App extends Component{
componentWillMount(){
  
  firebase.initializeApp({
    apiKey: "AIzaSyCzUpYoiolzXP8syGDfUAq4PYEOxmegmVA",
    authDomain: "mezun-takip.firebaseapp.com",
    databaseURL: "https://mezun-takip.firebaseio.com",
    projectId: "mezun-takip",
    storageBucket: "mezun-takip.appspot.com",
    messagingSenderId: "212032692874",
    appId: "1:212032692874:web:ab7176cf6a169bdc5d0373",
    measurementId: "G-89R58FKCBZ"
  });
}

 render(){
  return (
      
    <Router history ={history}>
      <div className="App">
        <Switch>
            <Route path='/' exact component={Secim}/>
            <Route path='/ogretmengiris' exact component={Ogretmengiris}/>
            <Route path='/ogrencigiris' exact component={Ogrencigiris}/>
            <Route path='/ogrencigiris/kayitol' exact component={KayıtOl}/>
            <Route path='/ogretmengiris/Ogrenciler' exact component={Ogretmenmenu}/>
            <Route path='/ogretmengiris/Uye-Ekle' exact component={UyeEkle}/>
            <Route path='/ogretmengiris/UyeSil' exact component={UyeSil}/>
            <Route path='/ogretmengiris/Basvurular' exact component={Basvuru}/>

        </Switch>
      </div>
  
  </Router>


 
);
 }
}

export default App;
