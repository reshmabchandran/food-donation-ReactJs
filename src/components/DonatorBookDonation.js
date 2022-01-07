import React, { Component } from 'react'
import Donatornav from './Donatornav'
import axios from 'axios';

import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

export default class DonatorBookDonation extends Component {
  constructor (props) {
    super(props);
    this.state = {
     
        userDataReg : {
            category:props.category,
            language:props.language,
            
        }  
    }
  }


  handleCategoryChanged(event)
  {
      var userDataReg = this.state.userDataReg;
      userDataReg.category=event.target.value;

      this.setState({userDataReg:userDataReg})
  }

  handleLanguageChanged(event)
  {
      var userDataReg = this.state.userDataReg;
      userDataReg.language=event.target.value;

      this.setState({userDataReg:userDataReg})
  }
 


handleButtonClicked() {

    if(this.state.userDataReg.category==null)
    {
        toast.warning("Please fill category of book!!",{autoClose:3000,theme:'colored',position:'top-center'})  
    }
    else if(this.state.userDataReg.language==null)
    {
        toast.warning("Please fill language of book!!",{autoClose:3000,theme:'colored',position:'top-center'})  
    }
    else{

      console.log("CATEGORY===",this.state.userDataReg.category)
      console.log("LANGUAGE===",this.state.userDataReg.language)

      const params={
        category:this.state.userDataReg.category,
        language:this.state.userDataReg.language,
        
    }


    console.log("params",params)

fetch('http://localhost:5000/api/book/add-book', {
   method: 'POST',
   body: JSON.stringify(params),
   headers: {
       'Content-Type': 'application/json',
       'Authorization':'Bearer '+this.state.token,
   },
})
.then(res => res.json())
.then((data) => {console.log("ADD BOOK RESULT========",data)

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


componentDidMount= async ()=> {
 
    let documentData = JSON.parse(localStorage.getItem('logindata'));
    let session_data=  window.sessionStorage.getItem("isLoggedIn")

    let temp=documentData.token

    console.log("TEMP",temp)

    console.log("LOGIN_DATA====",documentData)
    console.log("SESSION_DATA====",session_data)

   await this.setState({
        token:temp,
        login_id:documentData.login_id
    })

    console.log("TOKENNNN====",this.state.token)


    //console.log("BOOKID===",this.props.location.state.book_id)
    //console.log("PROP=====",this.props.location.state.isEditbookprop)
    
    // if(this.props.location?.state?.isEditbookprop===true)
    // {
    //     this.GetBookDetailsToEdit(this.props.location?.state?.book_id)
    // } 
    
    
}

//   GetBookDetailsToEdit=(id)=>{
       
//      console.log("id",id)

//      const url="http://localhost:5000/api/book/edit/"+id
  
//     const header ={
//       'Content-Type': 'application/json', 
//      }

//      axios.get(url,header)
//      .then((response)=> {
//        console.log("VIEW BOOK RESULT======",response);
       

//        if(response.data.success==true)
//        {
         
       
//         var userDataReg = this.state.userDataReg;
//         userDataReg.category=response.data.message.category;
//         userDataReg.language=response.data.message.language;
  
//          this.setState({userDataReg:userDataReg})
          
//        }


//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }


//   UpdateBooks=()=>{
//       console.log("hii")

//       const url="http://localhost:5000/api/book/update-book"
  
//     const header ={
//       'Content-Type': 'application/json', 
//      }

//      const params={
//          category:this.state.userDataReg.category,
//          language:this.state.userDataReg.language,
//          id:this.props.location.state.book_id
//      }

//      console.log("para",params)

//      axios.post(url,params,header)
//      .then((response)=> {
//        console.log("UPDATED BOOK RESULT======",response);


//        if(response.data.success==true)
//        {
//            this.setState({
//                message:response.data.message
//            })

//            alert(this.state.message)
//            this.props.history.push("/view_donate_book")

//        }


//     })
//     .catch((error) => {
//       console.log(error);
//     });
//   }


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
     <div className="col-lg-4" style={{marginTop:40,}}>
         <h4 style={{textAlign:'center',fontWeight:'bold'}}>Donate Books</h4>
         <div className="card2 card border-0 px-4 py-5" style={{backgroundColor:'white',height:280,alignSelf:'center',marginTop:100,marginRight: 20,marginLeft:30}}>
            
    
                 <div className="row px-3"> 
                 {/* <label className="mb-1">
                     <h6 className="mb-0 text-sm">UserName</h6>
                 </label> <br/> */}
                 <input 
                style={{height:40,borderRadius:4,borderWidth:1}}
                 className="mb-4" 
                 type="text" 
                 name="category" 
                 placeholder="Enter Category"
                 value={this.state.userDataReg.category}
                 onChange={this.handleCategoryChanged.bind(this)}
                 /> 
                 </div>
    
    
             <div className="row px-3"> 
             {/* <label className="mb-1">
                     <h6 className="mb-0 text-sm">Password</h6>
                 </label> <br/> */}
                 <input 
                 style={{height:40,borderRadius:4,borderWidth:1}}
                 type="text" 
                 name="language" 
                 placeholder="Enter Language"
                 value={this.state.userDataReg.language}
                 onChange={this.handleLanguageChanged.bind(this)}
                 /> 
                 </div><br/>
         <div className="row mb-3 px-3"> <button type="submit" 
         style={{backgroundColor:'#fe8b84',color:'white'}} className="btn btn-blue text-center" onClick={this.handleButtonClicked.bind(this)}>ADD</button> </div>
            
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
