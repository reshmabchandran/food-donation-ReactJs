import React, { Component } from 'react'
import Receivernav from './Receivernav'


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


export default class view_user_donate_receiver_cloth extends Component {

    constructor (props) {
        super(props);
        this.state = {

            "arrOfData":[
                {"name":"asdf",
                "location":"Calicut",
                "waste_type":"food",
                },
                
                {"name":"zxc",
                "location":"Kannur",
                "waste_type":"cloth"},
          
                {"name":"iop",
                "location":"Calicut",
                "waste_type":"cloth"},
          
                {"name":"iop",
                "location":"Calicut",
                "waste_type":"book"}
            ]
         
        }
      }

      componentDidMount= async()=>{
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
  
    this.GetUserClothDetails(this.state.token)

      }

      GetUserClothDetails=(id)=>
      {
        
fetch('http://localhost:5000/api/cloth/view-user-cloth', {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        'Authorization':'Bearer '+id,
    },
 })
 .then(res => res.json())
 .then((data) => {console.log("USER CLOTH RESULT========",data)
 
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

      AcceptFoodDonation=(seller_id,productid)=>
      {
          console.log("donated person id====",productid)


          const params={
              login_id:seller_id,
              product_id:productid,
              type:"cloth"
          }

          var data=JSON.stringify(params)

          console.log("PARAMETER==",JSON.stringify(params))
        
          fetch('http://localhost:5000/api/notification/add-notification', {
            method: 'POST',
            body:JSON.stringify(params),
            headers: {
                'Content-Type': 'application/json',
                'Authorization':'Bearer '+this.state.token,
            },
         })
         .then(res => res.json())
         .then((data) => {console.log("ADD NOTIFICATION RESULT========",data)

         if(data.success==true)
         {
             this.setState({
                 message:data.message,
                 status:data.details.status
             })

             console.log("status===",this.state.status)

             alert("Dontation Accepted "+ this.state.message)

             this.GetUserClothDetails(this.state.token)
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
<h4 class="card-title" key={i}>{item.type}</h4>
<h5 class="card-title" key={i}>{item.quantity}</h5>
<p class="card-text">{item.gender}</p>
{item.status=="0"?
<a onClick={()=>this.AcceptFoodDonation(item.login_id,item._id)} class="btn" style={{backgroundColor:'#0898c4',color:'white'}}>Accept Donation</a>
:null}
</div>
</div>
        </div>})}
        </div>
        )
    }
}
