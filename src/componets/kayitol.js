import React from 'react';
import './deneme.css';
import EgitimMenu from './egitim-bilgileri-menu';
import BaslangıcYılı from './baslangıc'
import BitisYılı from './bitis'
import Ulke from './ulke'
import ReactShadowScroll from 'react-shadow-scroll';

const KayıtOl = () =>{
 
    return(
 <ReactShadowScroll>
                   
<div className='kayit-tasarim'>
 <h1 style={{color:'white'}}>MEZUN  KAYIT FORMU</h1>

         


<h3 className='kayıt-baslık'> Kimlik Bilgileri</h3>
<div className="ui left icon input" style={{fontSize:'12px',width:'400px',flexDirection:'column'}}>
  <input type="text" placeholder="TC. Kimlik No" ></input>
    <div className="ui left icon input" style={{marginTop:'15px'}}>
        <input type="text" placeholder="Ad-Soyad"></input>
         <i className="user icon"></i>
    </div>
   
</div>




<h3 className='kayıt-baslık'> Eğitim Bilgileri</h3>
<EgitimMenu className="kayit-tasarim"/>
<div className="ui left icon input" style={{fontSize:'12px',width:'400px',flexDirection:'column'}}>
  <input type="text" placeholder="Bölümünüzü Girin" ></input><i class="bookmark icon"></i>
</div>




<h3 className='kayıt-baslık'>İletişim Bilgileri</h3>
<div className="ui left icon input" style={{fontSize:'12px',width:'400px',flexDirection:'column'}}>
  <div className="ui left icon input" style={{fontSize:'12px',width:'400px'}}>
     <input type="text" placeholder="E-Mail" ></input><i class="envelope icon"></i>
  </div> 
  <div className="ui left icon input" style={{fontSize:'12px',width:'400px',marginTop:'12px'}}>
    <input type="text" placeholder="Cep No" ></input><i class="phone icon"></i>
  </div>
</div>




<h3 className='kayıt-baslık'> Çalışma Bilgileri</h3>
<div className="ui left icon input" style={{fontSize:'12px',width:'400px',flexDirection:'column'}}>
  
    <div className="ui left icon input" style={{marginTop:'12px'}}>
        <input type="text" placeholder="Şirket"></input>
        <i class="angle double right icon"></i>
    </div>
    <div className="ui left icon input" style={{marginTop:'12px'}}>
        <input type="text" placeholder="Pozisyon"></input>
        <i class="angle double right icon"></i>
    </div>
    <div className="ui left icon input" style={{marginTop:'12px'}}>
        <input type="text" placeholder="Sektör"></input>
        <i class="angle double right icon"></i>
    </div>
   
</div>



<h3 > Başlangıç Yılı</h3>
<BaslangıcYılı/>
<h3 > Bitiş Yılı</h3>
<BitisYılı/>



<h3 className='kayıt-baslık'> Ülke</h3>
<Ulke/>
<h3 className='kayıt-baslık'> Şehir</h3>
<div className="ui left icon input" style={{fontSize:'12px',width:'400px',flexDirection:'column'}}>
        <input type="text" placeholder="Şehir"></input>
        <i class="angle double right icon"></i>
</div>



<h3 className='kayıt-baslık'> Giriş Bilgileri</h3>
<div className="ui left icon input" style={{fontSize:'12px',width:'400px',flexDirection:'column'}}>
 <div className="ui left icon input" style={{fontSize:'12px',width:'400px',flexDirection:'column'}}>
    <input type="password" placeholder="Şifre"></input>
     <i class="lock icon"></i>
 </div>
  <div className="ui left icon input" style={{fontSize:'12px',width:'400px',flexDirection:'column',marginTop:'12px'}}>
  <input type="password" placeholder="Şifre Tekrar"></input>
     <i class="lock icon"></i>
  
  </div>
</div>
<div>




<button class="ui primary button" >  Üye ol  </button>
<h5 className='kayıt-baslık'> *Kayıt formunuz onaylandıktan sonra sisteme giriş yapabilirsiniz</h5>
<div style={{fontSize:'12px',width:'400px',flexDirection:'column',marginTop:'100px'}} />

</div>

</div>

        
              
</ReactShadowScroll>
       

    )
}
export default KayıtOl;