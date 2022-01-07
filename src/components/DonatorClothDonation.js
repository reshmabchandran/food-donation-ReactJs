import React, { Component } from 'react'
import Donatornav from './Donatornav'

import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

export default class DonatorClothDonation extends Component {
  constructor (props) {
    super(props);
    this.state = {
     
        userDataReg : {
            type:props.type,
            cquantity:props.cquantity,
            gender:props.gender
        }
    }
  }

  handleTypeChanged(event)
  {
      var userDataReg = this.state.userDataReg;
      userDataReg.type=event.target.value;

      this.setState({userDataReg:userDataReg})
  }

  handleQuantityChanged(event)
  {
      var userDataReg = this.state.userDataReg;
      userDataReg.cquantity=event.target.value;

      this.setState({userDataReg:userDataReg})
  }

  handleGenderChanged(event)
  {
      var userDataReg = this.state.userDataReg;
      userDataReg.gender=event.target.value;

      this.setState({userDataReg:userDataReg})
  }


  handleButtonClicked()
  {
      if(this.state.userDataReg.type==null)
      {
        toast.warning("Please fill your type!!",{autoClose:3000,theme:'colored',position:'top-center'})  
      }
      else if(this.state.userDataReg.cquantity==null)
      {
        toast.warning("Please fill your quantity!!",{autoClose:3000,theme:'colored',position:'top-center'})
      }

      else if(this.state.userDataReg.gender==null)
      {
        toast.warning("Please choose gender!!",{autoClose:3000,theme:'colored',position:'top-center'})
      }
      else
      {

      console.log("TYPE====",this.state.userDataReg.type)
      console.log("QUANTITY===",this.state.userDataReg.cquantity)
      console.log("GENDER===",this.state.userDataReg.gender)


         const params={
             gender:this.state.userDataReg.gender,
             type:this.state.userDataReg.type,
             quantity:this.state.userDataReg.cquantity
         }


         console.log("params",params)
     
    fetch('http://localhost:5000/api/cloth/add-cloth', {
        method: 'POST',
        body: JSON.stringify(params),
        headers: {
            'Content-Type': 'application/json',
            'Authorization':'Bearer '+this.state.token,
        },
    })
    .then(res => res.json())
    .then((data) => {console.log("ADD CLOTH RESULT========",data)


    if(data.success==true)
    {
        this.setState({
            message:data.message
        })

        alert(this.state.message)
        this.props.history.push("/donator_dashboard")
    }

    else{
        alert("Data not Added")
    }

    })
    .catch((error) => {
      console.log(error);
    });
      
     }
}

   


componentDidMount= async()=> {

    let documentData = JSON.parse(localStorage.getItem('logindata'));
    let session_data=  window.sessionStorage.getItem("isLoggedIn")

    let temp=documentData.token

    console.log("TEMP",temp)

    console.log("LOGIN_DATA====",documentData)
    console.log("SESSION_DATA====",session_data)

  await  this.setState({
        token:temp,
        login_id:documentData.login_id
    })

    console.log("TOKENNNN====",this.state.token)
}


    render() {
        return (
          <div>
          <Donatornav/>
          
     <div className="row d-flex" >
     <div className="col-lg-4">
         {/* <div className="card1 pb-5">
             <div className="row">  </div>
             <div className="row px-3 justify-content-center mt-4 mb-5 border-line"> <img src="https://www.guardforce.com.hk/media/images/news/smart%20bin%20pic-01_1600x907.jpg" className="image"/> </div>
         </div> */}
     </div>
     <div className="col-lg-4" style={{marginTop:40}}>
     <h4 style={{textAlign:'center',fontWeight:'bold'}}>Donate Cloths</h4>
         <div className="card2 card border-0 px-4 py-5" style={{backgroundColor:'white',height:350,alignSelf:'center',marginRight: 20,marginLeft:30}}>
    
    
                 <div className="row px-3"> 
                 {/* <label className="mb-1">
                     <h6 className="mb-0 text-sm">UserName</h6>
                 </label> <br/> */}
                 <input 
                style={{height:40,borderRadius:4,borderWidth:1}}
                 className="mb-4" 
                 type="text" 
                 name="phone" 
                 placeholder="Enter cloth Type"
                 value={this.state.userDataReg.type}
                 onChange={this.handleTypeChanged.bind(this)}
                 /> 
                 </div>
    
    
             <div className="row px-3"> 
             {/* <label className="mb-1">
                     <h6 className="mb-0 text-sm">Password</h6>
                 </label> <br/> */}
                 <input 
                 style={{height:40,borderRadius:4,borderWidth:1}}
                 type="text" 
                 name="password" 
                 placeholder="Enter Quantity"
                 value={this.state.userDataReg.cquantity}
                 onChange={this.handleQuantityChanged.bind(this)}
                 /> 
                 </div>
             <div className="row px-3 mb-4">
    
    
             <div className=" row px-3 mb-4" style={{marginTop:30,}}>
             <select 
            style={{height:40,borderRadius:4}}
             className="form-select" 
             aria-label="Default select example"
             value={this.state.userDataReg.gender}
                 onChange={this.handleGenderChanged.bind(this)}
             >
                  <option selected>Choose Gender</option>
                 <option value="female">Female</option>
                 <option value="male">Male</option>
                 <option value="unisex">Unisex</option>
                 
             </select>
             </div>
    
    
    
                 {/* <div className="custom-control custom-checkbox custom-control-inline"> <input id="chk1" type="checkbox" name="chk" className="custom-control-input"/> <label for="chk1" className="custom-control-label text-sm">Remember me</label> </div> <a href="#" className="ml-auto mb-0 text-sm">Forgot Password?</a> */}
             </div>
             <div className="row mb-3 px-3"> <button type="submit" 
             style={{backgroundColor:'#fe8b84',color:'white'}} className="btn btn-blue text-center" onClick={this.handleButtonClicked.bind(this)}>ADD</button> </div>
             {/* <div className="row mb-4 px-3"> <small className="font-weight-bold">Already Registered? <a className="text-danger" onClick={()=>this.props.history.push('/')}>Login</a></small> </div> */}
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
