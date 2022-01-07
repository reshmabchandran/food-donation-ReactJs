import React, { Component } from 'react';
import Donatornav from './Donatornav';



// const sampleJSON = {
//     "arrOfData":[
//         {"name":"cvbx","location":"Calicut","waste_type":"Bio waste"},
//         {"name":"qeqwe","location":"Calicut","waste_type":"Bio waste"},
//         {"name":"fjdkfd","location":"Calicut","waste_type":"Bio waste"}
//     ]
// }

class DonatorNotification extends Component {
    constructor (props) {
        super(props);
        this.state = {

          "arrOfData":[
            // {"name":"cvbx","location":"Calicut","waste_type":"Bio waste"},
            // {"name":"qeqwe","location":"Calicut","waste_type":"Bio waste"},
            // {"name":"fjdkfd","location":"Calicut","waste_type":"Bio waste"}
        ]
         
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


        this.GetUserNotification(this.state.token)
  }


  GetUserNotification=(id)=>{
      
      
    console.log("idd",id)

    fetch('http://localhost:5000/api/notification/view-user-notification', {
method: 'GET',
headers: {
    'Content-Type': 'application/json',
    'Authorization':'Bearer '+id,
},
})
.then(res => res.json())
.then((data) => {console.log("USER NOTIFICATION RESULT========",data)

    this.setState({
      arrOfData:data.data
    })


})
.catch((error) => {
 console.log(error);
});

  }

    render() {
        return (
          <div style={{height:500,}}>
          <Donatornav/>
         {this.state.arrOfData.map((item,i)=> { 
         
         return <div style={{width:"100%",paddingLeft:60,padding:45,}}>
          <div class="card" style={{borderWidth:2,borderRadius:12,backgroundColor:'white',width:"75%"}}>
<div class="card-body">
<h5 class="card-title" key={i}></h5>
<h5 class="card-title" key={i}></h5>
{item.clothData.map((item1)=>
<>
<h3 class="card-text" style={{fontWeight:'bold'}}>Donated Cloths</h3>
<h5 class="card-title" key={i}>{item1.type}</h5>
<h5 class="card-title" key={i}>{item1.quantity}</h5>
<h5 class="card-title" key={i}>{item1.gender}</h5>
</>)}
{item.foodData.map((item2)=>
<>
<h3 class="card-text" style={{fontWeight:'bold'}}>Donated Foods</h3>
<h5 class="card-title" key={i}>{item2.food_name}</h5>
<h5 class="card-title" key={i}>{item2.food_category}</h5>
<h5 class="card-title" key={i}>{item2.quantity}</h5>
<h5 class="card-title" key={i}>{item2.exp_date}</h5>
</>)}
{item.bookData.map((item3)=>
<>
<h3 class="card-text" style={{fontWeight:'bold'}}>Donated Books</h3>
<h5 class="card-title" key={i}>{item3.category}</h5>
<h5 class="card-title" key={i}>{item3.language}</h5>
</>)}
{/* <p class="card-text" key={i}>{item.waste_type}</p>
<p class="card-text">With supporting text below as a natural lead-in to additional content.</p> */}
{/* <a onClick={()=>this.AcceptVolunteerNotification(item._id)} class="btn" style={{backgroundColor:'#f39609',color:'black'}}>Accept Request</a> */}
</div>
</div>

      </div>})}  
                    
      </div>
        );
    }
}

export default DonatorNotification;