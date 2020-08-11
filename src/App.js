import React from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory'
import Secim from './componets/secim';
import Ogretmengiris from './componets/ogretmengiris';
import Ogrencigiris from './componets/ogrencigiris';
import KayıtOl from './componets/kayitol';
import './App.css';

const App =()  => {
  return (
      
      <Router history ={createHistory()}>
        <div className="App">
          <Switch>
              <Route path='/' exact component={Secim}/>
              <Route path='/ogretmengiris' exact component={Ogretmengiris}/>
              <Route path='/ogrencigiris' exact component={Ogrencigiris}/>
              <Route path='/ogrencigiris/kayitol' exact component={KayıtOl}/>


          </Switch>
        </div>
    
    </Router>
  
 
   
  );
}

export default App;
