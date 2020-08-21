import React from 'react';
import logo from './profil.jpg';

const KayıtlıBasvuruVeri =({veriler}) =>{
    return(
        <div>

        <div className="ui cards" style={{marginLeft:'500px'}}>
          <div className="card">
            <div className="content">
            
              <img src={logo} alt=" " className="right floated mini ui image" />
              <div className="header">
                {veriler.ogrenci_ad}
              </div>
              <div className="meta">
                      {veriler.ogrenci_bölüm}
              </div>
              <div className="description" >
                Ülke: {veriler.ogrenci_ulke}
              </div>
              <div className="description">
                Yaşadığı Şehir: {veriler.ogrenci_sehir}
              </div>
              <div className="description">
                T.C Kimlik No: {veriler.ogrenci_k_a}
              </div>
              <div className="description">
                Okul Numarası: {veriler.ogrenci_okul_no}
              </div>
              <div className="description">
                Akedemik Birim: {veriler.ogrenci_akedemik_birim}
              </div>
              <div className="description">
                İşe Başlangıç Yılı: {veriler.ogrenci_baslangıc}
              </div>
              <div className="description">
                İşten Ayrılma Yılı: {veriler.ogrenci_bitis}
              </div>
              <div className="description">
                Cep No: {veriler.ogrenci_cepno}
              </div>
              <div className="description">
               E-mail: {veriler.ogrenci_email}
              </div>
              <div className="description">
                Şirket Adı: {veriler.ogrenci_sirket}
              </div>
              <div className="description">
                Pozisyon: {veriler.ogrenci_pozisyon}
              </div>
            </div>
            <div className="extra content">
            </div>
          </div>
         
        </div>
      </div>
  
    )
}
export default KayıtlıBasvuruVeri;