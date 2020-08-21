import firebase from 'firebase/app';
import 'firebase/database';
import _ from 'lodash';
import history from '../history'

export const gelen ='gelen';
export const Veriler =(veriler)=>{
   
    return yükle=>{
        firebase.database().ref('/kullanıcılar')
        .push(veriler)
        .then(()=>{
          
            
        })
    }

}


export const verilericek =()=>{

    return dispatch =>{
        firebase.database().ref('/kullanıcılar').orderByChild('giris_id').equalTo('0')
        .on('value', snapshot=>{
        
         const result =_.map(snapshot.val(),(val,uid)=>{
             return {...val,uid}
         })
      
         dispatch({type:gelen, payload:result})
            
        })
    }
}
export const kayıtlıverilericek =()=>{

    return dispatch =>{
        firebase.database().ref('/kullanıcılar').orderByChild('giris_id').equalTo('1')
        .on('value', snapshot=>{
        
         const result =_.map(snapshot.val(),(val,uid)=>{
             return {...val,uid}
         })
      
         dispatch({type:gelen, payload:result})
            
        })
    }
}
export const kayıtlıvergoster =()=>{

    return dispatch =>{
        firebase.database().ref('/kullanıcılar').orderByChild('giris_id').equalTo('1')
        .on('value', snapshot=>{
        
         const result =_.map(snapshot.val(),(val,uid)=>{
             return {...val,uid}
         })
      
         dispatch({type:gelen, payload:result})
            
        })
    }
}
export const Mezunogrecisil =(uid) =>{
    return dispatch=>{
        firebase.database().ref('/kullanıcılar' + '/' + uid)
        .remove().then(()=>{
            history.push('/ogretmengiris/UyeSil');
        })
    }
}
export const Basvuruogrecisil =(uid) =>{
    return dispatch=>{
        firebase.database().ref('/kullanıcılar' + '/' + uid)
        .remove().then(()=>{
            history.push('/ogretmengiris/Basvurular');
        })
    }
}

export const basvuruonayla =(veriler)=>{
    const giris_id= veriler.giris_id="1";
    const ogrenci_ad= veriler.ogrenci_ad;
    const  ogrenci_akedemik_birim   = veriler.ogrenci_akedemik_birim
    const  ogrenci_baslangıc   = veriler.ogrenci_baslangıc
    const  ogrenci_bitis  = veriler.ogrenci_bitis
    const ogrenci_bölüm  = veriler.ogrenci_bölüm
    const ogrenci_cepno  =veriler.ogrenci_cepno
    const ogrenci_email  =veriler.ogrenci_email
    const ogrenci_k_a =veriler.ogrenci_k_a
    const ogrenci_okul_no = veriler.ogrenci_okul_no
    const  ogrenci_pozisyon =veriler.ogrenci_pozisyon
    const ogrenci_s = veriler.ogrenci_s
    const ogrenci_s_tekrar =veriler.ogrenci_s_tekrar
    const ogrenci_sehir = veriler.ogrenci_sehir
    const ogrenci_sektor   = veriler.ogrenci_sektor
    const ogrenci_sirket  = veriler.ogrenci_sirket
    const ogrenci_ulke   = veriler.ogrenci_ulke
    const uid  =veriler.uid
    return dispatch=>{
        firebase.database().ref('/kullanıcılar' + '/' + uid)
        .set({giris_id,
            ogrenci_ad,
            ogrenci_akedemik_birim,
            ogrenci_baslangıc,
            ogrenci_bitis,
            ogrenci_bölüm,
            ogrenci_cepno,
            ogrenci_email,
            ogrenci_k_a,
            ogrenci_okul_no,
            ogrenci_pozisyon,
            ogrenci_s,
            ogrenci_s_tekrar,
            ogrenci_sehir,
            ogrenci_sektor,
            ogrenci_sirket,
            ogrenci_ulke
            }
            ).then(()=>{
            history.push('/ogretmengiris/Basvurular');
        })
     
    }
}









