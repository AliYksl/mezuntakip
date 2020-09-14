import React,{Component} from 'react';
import {connect} from 'react-redux';
import {logout} from '../../actions/index'
import {OgrenciGiris} from '../../actions/kayıtlar';
import Bilgiguncelle from './bilgiguncelle'



class OgrenciBilgilerim extends Component {

  componentDidMount(){
    
    if(this.props.location.state3 ){
   
      
    this.props.OgrenciGiris(this.props.location.state3.ogrenci_k_a,this.props.location.state3.ogrenci_s);
       
    }
   // console.log(this.props.location.state3);
  
   
  }
  

   render(){
    // console.log(this.props);
     
    
    return (
      
      <div>
       <div className="ui inverted segment">
          <div className="ui inverted secondary menu">
            <a  href="Bilgilerim" className="active item"> Bilgilerim  </a>
            <div className="ui icon input">
                <input type="text " placeholder="Ara..." style={{marginLeft:'880px'}}/>
                <i className="search link icon"></i>
              </div>
            <a href="/ogrencigiris" className="ui item" style={{marginLeft:'80px'}}>Çıkış Yap </a>
          </div>
        </div>
       
  
        {this.props.Glnveri.map(veriler=>(   

           <Bilgiguncelle key={veriler.uid} veriler={veriler}/> 
         ))}
  

  </div>
    )
   }
  }
  
const mapStateToProps =(state) =>{
 
  //console.log(state.Glnveri[0]);
 
  return{
   
    Glnveri: state.Glnveri
 
    
  }

}

  export default connect(mapStateToProps,{OgrenciGiris,logout}) (OgrenciBilgilerim);


  