import React,{Component} from 'react';
import logo from './profil.jpg';
import {Mezunogrecisil} from '../actions/kayıtlar'
import {connect} from 'react-redux';

class KayıtlıVeriSil extends Component{
  //console.log(veriler.uid)
    render(){
      return(
        <div>

        <div className="ui cards" style={{marginLeft:'500px'}}>
          <div className="card">
            <div className="content">
            
              <img src={logo} alt=" " className="right floated mini ui image" />
              <div className="header">
                {this.props.veriler.ogrenci_ad}
              </div>
              <div className="meta">
                      {this.props.veriler.ogrenci_bölüm}
              </div>
              <div className="description" >
                Ülke: {this.props.veriler.ogrenci_ulke}
              </div>
              <div className="description">
                Yaşadığı Şehir: {this.props.veriler.ogrenci_sehir}
              </div>
              <div className="description">
                T.C Kimlik No: {this.props.veriler.ogrenci_k_a}
              </div>
              <div className="description">
                Okul Numarası: {this.props.veriler.ogrenci_okul_no}
              </div>
              <div className="description">
                Akedemik Birim: {this.props.veriler.ogrenci_akedemik_birim}
              </div>
              <div className="description">
                İşe Başlangıç Yılı: {this.props.veriler.ogrenci_baslangıc}
              </div>
              <div className="description">
                İşten Ayrılma Yılı: {this.props.veriler.ogrenci_bitis}
              </div>
              <div className="description">
                Cep No: {this.props.veriler.ogrenci_cepno}
              </div>
              <div className="description">
               E-mail: {this.props.veriler.ogrenci_email}
              </div>
              <div className="description">
                Şirket Adı: {this.props.veriler.ogrenci_sirket}
              </div>
              <div className="description">
                Pozisyon: {this.props.veriler.ogrenci_pozisyon}
              </div>
            </div>
            <div className="extra content">
              <div className="ui two buttons">
                <div className="ui basic red button"  
                  onClick={()=>{
                   this.props.Mezunogrecisil(this.props.veriler.uid)
                 }}>Sil</div>
              </div>
            </div>
          </div>
         
        </div>
      </div>
  
    )
    }
}

export default  connect(null,{Mezunogrecisil}) (KayıtlıVeriSil);

