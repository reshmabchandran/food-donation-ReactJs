import React, { Component } from 'react'
import Navbar from './navbar';

import "./loginstyles.css"

import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


  import axios from 'axios';
  import img from '../assets/food_images.jpg';


export default class Login extends Component {

  constructor (props) {
    super(props);
    this.state = {
     
        userDataReg : {
            username:props.username,
            password:props.password,
            
        }  
    }
  }
 
  handleUsernameChanged(event) {
    var userDataReg = this.state.userDataReg;
    userDataReg.username=event.target.value;

      this.setState({ userDataReg: userDataReg });
        
}

handlePasswordChanged(event) {
  var userDataReg = this.state.userDataReg;
  userDataReg.password=event.target.value;
  this.setState({ userDataReg: userDataReg });
}

handleButtonClicked() {

  if(this.state.userDataReg.username==null)
  {
    toast.warning("please fill the username!!",{autoClose:3000,theme:'colored',position:'top-center'})
  }
  else if(this.state.userDataReg.password==null)
  {
    toast.warning("please fill the password!!",{autoClose:3000,theme:'colored',position:'top-center'})
  }
  else
  {
    console.log("USERNAME===",this.state.userDataReg.username)
    console.log("PASSWORD===",this.state.userDataReg.password)


    const url="http://localhost:5000/api/login/logindata";

    const header = {
     'Content-Type': 'application/json',
    }


    const params = {
     username:this.state.userDataReg.username,
     password:this.state.userDataReg.password,
    
   }

   axios.post(url,params,header)
   .then((response)=> {
   console.log("LOGIN RESULT======",response);

   if(response.data.success==true)
   {
     
      this.setState({
         data:{
           role:response.data.userRole,
           login_id:response.data.loginId,
           token:response.data.token
         }
      })
    
      console.log("dataaaaaaa",this.state.data)

      if(this.state.data.role==0)
      {
        this.props.history.push("/admin_dashboard");
        localStorage.setItem('logindata',JSON.stringify(this.state.data));
        window.sessionStorage.setItem("isLoggedIn",true)
         
      }
      else
      {
        this.props.history.push("/common_dashboard");
        localStorage.setItem('logindata',JSON.stringify(this.state.data));
        window.sessionStorage.setItem("isLoggedIn",true)
      }

     
      
   }
   else{
    alert("Bad Credentials")
  }

  })
  .catch((error) => {
    console.log(error);
    alert("Bad Credentials");
  });

  }

}
  

  render() {
    return (
      <div>
      <Navbar/>
      
 <div className="row d-flex" >
 <div className="col-lg-7">
     <div className="card1 pb-5">
         <div className="row">  </div>
         <div className="row px-6 justify-content-center mt-4 mb-5 border-line"> <img src="https://www.rentcafe.com/blog/wp-content/uploads/sites/62/2020/10/donations-pickup-featured.png" className="image"/> </div>
     </div>
 </div>
 <div className="col-lg-4" >
     <div className="card2 card border-0 px-4 py-5" style={{backgroundColor:'white',height:280,alignSelf:'center',marginTop:100,marginRight: 20,marginLeft:30}}>
        

             <div className="row px-3"> 
             {/* <label className="mb-1">
                 <h6 className="mb-0 text-sm">UserName</h6>
             </label> <br/> */}
             <input 
            style={{height:40,borderRadius:4,borderWidth:1}}
             className="mb-4" 
             type="text" 
             name="phone" 
             placeholder="Enter  Username"
             value={this.state.userDataReg.username}
             onChange={this.handleUsernameChanged.bind(this)}
             /> 
             </div>


         <div className="row px-3"> 
         {/* <label className="mb-1">
                 <h6 className="mb-0 text-sm">Password</h6>
             </label> <br/> */}
             <input 
             style={{height:40,borderRadius:4,borderWidth:1}}
             type="password" 
             name="password" 
             placeholder="Enter Password"
             value={this.state.userDataReg.password}
             onChange={this.handlePasswordChanged.bind(this)}
             /> 
             </div>
         <div className="row px-3 mb-4">

             {/* <div className="custom-control custom-checkbox custom-control-inline"> <input id="chk1" type="checkbox" name="chk" className="custom-control-input"/> <label for="chk1" className="custom-control-label text-sm">Remember me</label> </div> <a href="#" className="ml-auto mb-0 text-sm">Forgot Password?</a> */}
         </div>
         <div className="row mb-3 px-3"> <button type="submit" style={{backgroundColor:'#fe8b84',color:'white'}} className="btn btn-blue text-center" onClick={this.handleButtonClicked.bind(this)}>LOGIN</button> </div>
         <div className="row mb-4 px-3"> <small className="font-weight-bold">New User? <a className="text-danger" onClick={()=>this.props.history.push('/register')}>Register</a></small> </div>
     </div>
 </div>
</div>
{/* <div className="bg-blue py-4">
 <div className="row px-3"> <small className="ml-4 ml-sm-5 mb-2">Copyright &copy; 2019. All rights reserved.</small>
     <div className="social-contact ml-4 ml-sm-auto"> <span className="fa fa-facebook mr-4 text-sm"></span> <span className="fa fa-google-plus mr-4 text-sm"></span> <span className="fa fa-linkedin mr-4 text-sm"></span> <span className="fa fa-twitter mr-4 mr-sm-5 text-sm"></span> </div>
 </div>
</div> */}
<ToastContainer/>
</div>
    )
  }
}
