import React,{Component} from 'react';
import {connect} from 'react-redux';
import {kayıtlıvergoster} from '../actions/kayıtlar';
import KayıtlıVeriSil from './kayitliverisil';
import {logout} from '../actions/index'

class UyeSil extends Component {
  componentDidMount(){
    this.props.kayıtlıvergoster();
  }
   render(){
    return(
      <div>
        <div className="ui inverted segment">
          <div className="ui inverted secondary menu">
            <a  href="Ogrenciler" className="item"> Mezun Öğrenciler  </a>
            <a href="Uye-Ekle" className="item"> Mezun Öğrenci Ekle  </a>
            <a href="UyeSil"  className="active item"> Mezun Öğrenci Sil  </a>
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
            
            <KayıtlıVeriSil key={veriler.uid} veriler={veriler}/> 
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
  
  export default connect(mapStateToProps,{kayıtlıvergoster,logout}) (UyeSil);