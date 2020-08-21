import React,{Component} from 'react';
import './deneme.css';
import {connect} from 'react-redux';
import {login} from '../actions';

class Ogretmengiris extends Component{

  constructor(props){
    super(props);
     this.state ={
       ogretmen_k_a:'',
       ogretmen_s:''
   
     }
     this.onChange = this.onChange.bind(this);
  }
 
   onChange(event){
     this.setState({
       [event.target.name]: event.target.value
     })
     
   }
 
  render(){
    console.log(this.state);
    return(
      <div className="ogretmen-girisi">
          <div className="ui form">
            <div className="field">
              <label >KULLANICI ADI</label>
              <div  className="ui left icon input">
                <input type="text" placeholder="Kullanıcı Adı"  
                  name='ogretmen_k_a' 
                  value={this.state.ogretmen_k_a}
                  onChange={this.onChange}></input>
                <i className="user icon"></i>
              </div>
            </div>
            <div className="field">
              <label>Şifre</label>
              <div className="ui left icon input">
                <input type="password" placeholder="Şifreniz"  name='ogretmen_s' 
                  value={this.state.ogretmen_s}
                  onChange={this.onChange}></input>
                <i class="lock icon"></i>
              </div>
            </div>
            <div className="ui blue submit button" 
             onClick={()=>{
              const {ogretmen_k_a,ogretmen_s}=this.state;
              this.props.login(ogretmen_k_a,ogretmen_s);
          } }>Login</div>
          </div>
      </div>
      
  

  )
  }
    
}
export default connect(null,{login}) (Ogretmengiris);
