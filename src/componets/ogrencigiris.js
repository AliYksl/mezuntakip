import React,{Component} from 'react';
import { Link } from 'react-router-dom'
import {OgrenciGiris} from '../actions/kayıtlar';
import {connect} from 'react-redux';





class Ogrencigiris extends Component {
 
  
 constructor(props){
   super(props);
    this.state ={
      ogrenci_k_a:'',
      ogrenci_s:''
  
    }
    this.onChange = this.onChange.bind(this);
 }

  onChange(event){
    this.setState({
      [event.target.name]: event.target.value
    })
    
  }


   render(){  
    

    return(

      <div className="ogrenci-girisi">
        <div className="ui placeholder segment">
        <div className="ui two column very relaxed stackable grid">
        <div className="column">
          <div className="ui form">
            <div className="field">
              <label >E-mail</label>
              <div className="ui left icon input">
                <input type="text" placeholder="E-mail" 
                  name='ogrenci_k_a' 
                  value={this.state.ogrenci_k_a}
                  onChange={this.onChange}></input>
                <i className="user icon"></i>
              </div>
            </div>
            <div className="field">
              <label>Şifre</label>
              <div className="ui left icon input">
                <input  type="password" placeholder="Şifreniz"  name='ogrenci_s' 
                  value={this.state.ogrenci_s}
                  onChange={this.onChange}></input>
                <i className="lock icon"></i>
              </div>
            </div>
            <div className="ui blue submit button"
                onClick={()=>{
          
                  this.props.OgrenciGiris(this.state.ogrenci_k_a,this.state.ogrenci_s)
            
                }}
               >Giriş Yap</div>
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
}
const mapStateToProps =(state2) =>{
 
  
  return{

    Glnveri: state2.Glnveri
  }

}
export default connect(mapStateToProps,{OgrenciGiris}) (Ogrencigiris);