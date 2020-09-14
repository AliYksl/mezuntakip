import React,{Component} from 'react';
import {connect} from 'react-redux';
import {kayıtlıverilericek} from '../actions/kayıtlar';
import KayıtlıBasvuruVeri from './kayıtlıbasvuruveri';
import {logout} from '../actions/index'


class Ogretmenmenu extends Component {
  componentDidMount(){
    this.props.kayıtlıverilericek();
  }
  render(){
    const {isLoggedIn} =this.props.auth;
    return isLoggedIn === true ? (
      <div>
      <div className="ui inverted segment">
        <div className="ui inverted secondary menu">
          <a  href="Ogrenciler" className="active item"> Mezun Öğrenciler  </a>
          <a href="Uye-Ekle" className="item"> Mezun Öğrenci Ekle  </a>
          <a href="UyeSil"  className="item"> Mezun Öğrenci Sil  </a>
          <a href="Basvurular"  className="item"> Başvurular  </a>
          <div className="ui icon input">
              <input type="text " placeholder="Öğrenci Ara..." style={{marginLeft:'480px'}}/>
              <i className="search link icon"></i>
            </div>
          <a href="/" className="ui item" style={{marginLeft:'20px'}}
             onClick={()=>{
             this.props.logout();
           }} >Çıkış Yap </a>
        </div>
      </div>
           {this.props.Glnveri.map(veriler=>(   
            
            <KayıtlıBasvuruVeri key={veriler.uid} veriler={veriler}/> 
          ))}


    </div>
    ):
    
    (
      <div>
            <h1>Giriş Yapmadan Bu Alana Erişemezsiniz!</h1>

      </div>
        
        )
  }
}
const mapStateToProps =(state) =>{
 
  return{
    Glnveri: state.Glnveri,
    auth: state.auth
    
  }

}

export default connect(mapStateToProps,{kayıtlıverilericek,logout}) (Ogretmenmenu);