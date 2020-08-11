import React from 'react';
import { Link } from 'react-router-dom'

const Ogrencigiris = () =>{
    return(

  <div className="ogrenci-girisi">
    <div className="ui placeholder segment">
    <div className="ui two column very relaxed stackable grid">
    <div className="column">
      <div className="ui form">
        <div className="field">
          <label >TC. Kimlik No</label>
          <div className="ui left icon input">
            <input type="text" placeholder="TC. Kimlik No"></input>
            <i className="user icon"></i>
          </div>
        </div>
        <div className="field">
          <label>Şifre</label>
          <div className="ui left icon input">
            <input  type="password" placeholder="Şifreniz"></input>
            <i className="lock icon"></i>
          </div>
        </div>
        <div className="ui blue submit button">Giriş Yap</div>
      </div>
    </div>
    <div className="middle aligned column">
        <Link to='/ogrencigiris/kayitol'>
          <div className="ui big button"><i className="signup icon"></i> Kayıt Ol </div>
       </Link>
      
    </div>
  </div>
  <div className="ui vertical divider">Veya </div>
</div>

  </div>
 
    )
}
export default Ogrencigiris;