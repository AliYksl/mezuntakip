import React,{Component} from 'react';
import {connect} from 'react-redux';
import {kayıtlıverilericek} from '../actions/kayıtlar';
import KayıtlıBasvuruVeri from './kayıtlıbasvuruveri';

class Ogretmenmenu extends Component {
  componentDidMount(){
    this.props.kayıtlıverilericek();
  }
  render(){
    return(
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
            <a href="/" className="ui item" style={{marginLeft:'20px'}}>Çıkış Yap </a>
          </div>
        </div>
             {this.props.Glnveri.map(veriler=>(   
              
              <KayıtlıBasvuruVeri key={veriler.uid} veriler={veriler}/> 
            ))}


      </div>
        
        )
  }
}
const mapStateToProps =(state) =>{

  return{
    Glnveri: state.Glnveri
    
  }

}

export default connect(mapStateToProps,{kayıtlıverilericek}) (Ogretmenmenu);