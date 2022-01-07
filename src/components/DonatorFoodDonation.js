import React, { Component } from 'react'
import Donatornav from './Donatornav'

import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

  import axios from 'axios';

export default class DonatorFoodDonation extends Component {
  constructor (props) {
    super(props);
    this.state = {

        token:"",
     
        userDataReg : {
            name:props.name,
            quantity:props.quantity,
            expiry:props.expiry,
            category:props.category
        },
       
    }
  }

  handleNameChanged(event)
  {
    var userDataReg = this.state.userDataReg;
    userDataReg.name=event.target.value;

      this.setState({ userDataReg: userDataReg });
  }

  handleQuantityChanged(event)
  {
      var userDataReg = this.state.userDataReg;
      userDataReg.quantity=event.target.value;

      this.setState({ userDataReg:userDataReg});
  }

  handleExpiryChanged(event)
  {
      var userDataReg = this.state.userDataReg;
      userDataReg.expiry=event.target.value;

      this.setState({ userDataReg:userDataReg});
  }

  handleCategoryChanged(event)
  {
      var userDataReg = this.state.userDataReg;
      userDataReg.category=event.target.value;

      this.setState({userDataReg:userDataReg})
  }

  handleButtonClicked()
  {
       
    if(this.state.userDataReg.name==null)
    {
        toast.warning("Please fill food name!!",{autoClose:3000,theme:'colored',position:'top-center'})  
    }
    else if(this.state.userDataReg.quantity==null)
    {
        toast.warning("Please fill quantity!!",{autoClose:3000,theme:'colored',position:'top-center'})  
    }
    else if(this.state.userDataReg.expiry==null)
    {
        toast.warning("Please fill expiry date!!",{autoClose:3000,theme:'colored',position:'top-center'})  
    }
    else if(this.state.userDataReg.category==null)
    {
        toast.warning("Please choose category!!",{autoClose:3000,theme:'colored',position:'top-center'})  
    }
    else
    {

      console.log("NAME====",this.state.userDataReg.name)
      console.log("QUANTITY====",this.state.userDataReg.quantity)
      console.log("EXPIRY===",this.state.userDataReg.expiry)
      console.log("CATEGORY====",this.state.userDataReg.category)

    //   const url="http://localhost:5000/api/item/add-food"

      const params = {
        food_name:this.state.userDataReg.name,
        category:this.state.userDataReg.category,
        quantity:this.state.userDataReg.quantity,
        date:this.state.userDataReg.expiry,
        
      }

    //   const header ={
    //    'Content-Type': 'application/json',
       
    //   }

    //   console.log("PARAMS====",params)

    //   axios.post(url,params,header)
    //  .then((response)=> {
    //    console.log("ADD FOOD RESULT======",response);

    console.log("params",params)
     
    fetch('http://localhost:5000/api/item/add-food', {
        method: 'POST',
        body: JSON.stringify(params),
        headers: {
            'Content-Type': 'application/json',
            'Authorization':'Bearer '+this.state.token,
        },
    })
    .then(res => res.json())
    .then((data) => {console.log("ADD FOOD RESULT========",data)


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
            token:temp
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
     <h4 style={{textAlign:'center',fontWeight:'bold'}}>Donate Food</h4>
         <div className="card2 card border-0 px-4 py-5" style={{backgroundColor:'white',height:450,alignSelf:'center',marginBottom:60,marginRight: 20,marginLeft:30}}>
    
                 <div className="row px-3"> 
                 {/* <label className="mb-1">
                     <h6 className="mb-0 text-sm">Phone Number</h6>
                 </label> <br/> */}
                 <input 
                 style={{height:40,borderRadius:4,borderWidth:1}}
                 className="mb-4" 
                 type="text" 
                 name="food_name" 
                 placeholder="Enter Name"
                 value={this.state.userDataReg.name}
                 onChange={this.handleNameChanged.bind(this)}
                 /> 
                 </div>
    
                 <div className="row px-3"> 
                 {/* <label className="mb-1">
                     <h6 className="mb-0 text-sm">UserName</h6>
                 </label> <br/> */}
                 <input 
                style={{height:40,borderRadius:4,borderWidth:1}}
                 className="mb-4" 
                 type="text" 
                 name="quantity" 
                 placeholder="Enter Quantity"
                 value={this.state.userDataReg.quantity}
                 onChange={this.handleQuantityChanged.bind(this)}
                 /> 
                 </div>
    
    
             <div className="row px-3"> 
             {/* <label className="mb-1">
                     <h6 className="mb-0 text-sm">Password</h6>
                 </label> <br/> */}
                 <input 
                 style={{height:40,borderRadius:4,borderWidth:1}}
                 type="date" 
                 name="date" 
                 placeholder="Enter Expiry Date or Time"
                 value={this.state.userDataReg.expiry}
                 onChange={this.handleExpiryChanged.bind(this)}
                 /> 
                 </div>
             <div className="row px-3 mb-4">
    
    
             <div className=" row px-3 mb-4" style={{marginTop:30,}}>
             <select 
            style={{height:40,borderRadius:4}}
             className="form-select" 
             name="category"
             aria-label="Default select example"
             value={this.state.userDataReg.category}
                 onChange={this.handleCategoryChanged.bind(this)}
             >
                  <option selected>Choose Category</option>
                 <option value="nonveg">Non-veg</option>
                 <option value="veg">Veg</option>
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
