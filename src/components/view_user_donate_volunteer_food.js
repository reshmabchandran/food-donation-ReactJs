import React, { Component } from 'react'
import Receivernav from './Volunteernav'


// const sampleJSON = {
//     "arrOfData":[
//         {"name":"asdf",
//         "location":"Calicut",
//         "waste_type":"food",
//         },
        
//         {"name":"zxc",
//         "location":"Kannur",
//         "waste_type":"cloth"},
  
//         {"name":"iop",
//         "location":"Calicut",
//         "waste_type":"cloth"},
  
//         {"name":"iop",
//         "location":"Calicut",
//         "waste_type":"book"}
//     ]
//   }


export default class view_user_donate_volunteer_food extends Component {

    constructor (props) {
        super(props);
        this.state = {

          "arrOfData":[
            // {"name":"asdf",
            // "location":"Calicut",
            // "waste_type":"food",
            // },
            
            // {"name":"zxc",
            // "location":"Kannur",
            // "waste_type":"cloth"},
      
            // {"name":"iop",
            // "location":"Calicut",
            // "waste_type":"cloth"},
      
            // {"name":"iop",
            // "location":"Calicut",
            // "waste_type":"book"}
        ]
         
        }
      }

      componentDidMount=async()=>{
        const documentData = JSON.parse(localStorage.getItem('logindata'));
        const session_data=  window.sessionStorage.getItem("isLoggedIn")
 
        let temp=documentData.token

    console.log("TEMP",temp)

    console.log("LOGIN_DATA====",documentData)
    console.log("SESSION_DATA====",session_data)

   await this.setState({
        token:temp,
        login_id:documentData.login_id
    })

    console.log("TOKENNNN====",this.state.token)
    console.log("Login ID  : ====",this.state.login_id)

       this.GetUserFoodDetails(this.state.token)
      }

      GetUserFoodDetails=(id)=>{

        console.log("idd",id)

        fetch('http://localhost:5000/api/item/view-user-food', {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        'Authorization':'Bearer '+id,
    },
 })
 .then(res => res.json())
 .then((data) => {console.log("USER FOOD RESULT========",data.data)
 
 if(data.success==true)
 {
     this.setState({
         arrOfData:data.data
     })
     
 }
 else if(data.success==false)
 {
     this.setState({
         message:data.message
     })
     alert(this.state.message)
 }
 
 })
 .catch((error) => {
  console.log(error);
 });


      }
      
    render() {
        return (
            <div style={{height:390,}}>
           <Receivernav/>
            {this.state.arrOfData.map((item,i)=> { 
           return <div style={{width:"102%",paddingLeft:60,padding:45,}}>
            <div class="card" style={{borderWidth:2,borderRadius:12,backgroundColor:'white',width:"75%"}}>
{/* <div class="card-header">
Featured
</div> */}
<div class="card-body">
<h4 class="card-title" key={i}>{item.food_name}</h4>
<h5 class="card-title" key={i}>{item.food_category}</h5>
<p class="card-text" key={i}>{item.exp_date}</p>
<p class="card-text" key={i}>{item.quantity}</p>
<p class="card-text">{item.gender}</p>
{/* <a href="#" class="btn" style={{backgroundColor:'#0898c4',color:'white'}}>Accept Donation</a> */}
</div>
</div>
        </div>})}
        </div>
        )
    }
}
