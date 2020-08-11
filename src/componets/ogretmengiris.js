import React from 'react';
import './deneme.css';

const Ogretmengiris = () =>{
    return(
        <div className='ogretmen-girisi'>
            <div class="ui form">
              <div class="field">
                <label >KULLANICI ADI</label>
                <div  class="ui left icon input">
                  <input type="text" placeholder="Kullanıcı Adı"></input>
                  <i class="user icon"></i>
                </div>
              </div>
              <div class="field">
                <label>Şifre</label>
                <div class="ui left icon input">
                  <input type="password" placeholder="Şifreniz"></input>
                  <i class="lock icon"></i>
                </div>
              </div>
              <div class="ui blue submit button" >Login</div>
            </div>
        </div>
        
    

    )
}
export default Ogretmengiris;