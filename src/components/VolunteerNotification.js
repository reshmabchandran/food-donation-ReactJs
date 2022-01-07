import React, { Component } from 'react';
import Volunteernav from './Volunteernav';
import axios from 'axios';
import { Alert } from 'bootstrap';


// const sampleJSON = {
//     "arrOfData":[
//         {"name":"cvbx","location":"Calicut","waste_type":"Bio waste"},
//         {"name":"qeqwe","location":"Calicut","waste_type":"Bio waste"},
//         {"name":"fjdkfd","location":"Calicut","waste_type":"Bio waste"}
//     ]
// }

class VolunteerNotification extends Component {
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
    componentDidMount=()=>{
    
        this.GetNotification()

    }

    GetNotification=()=>
    {
      const url="http://localhost:5000/api/notification/vol-notification"

      axios.get(url)
      .then((response)=> {
        console.log("VOLUNTEER NOTIFICATION RESULT======",response);


        if(response.status==200)
        {
          this.setState({
            arrOfData:response.data.data
          })

          console.log("result data==",this.state.arrOfData)
        }


      })
      .catch((error) => {
        console.log(error);
      });
    }

    AcceptVolunteerNotification=(id)=>{
      
      console.log("hi",id)

     const url="http://localhost:5000/api/notification/vol-accept"

     const param={
       id:id
     }

     axios.post(url,param)
     .then((response)=> {
       console.log("RESULT======",response);


       if(response.data.success==true)
       {
         this.setState({
           message:response.data.message
         })

         alert(this.state.message)
         this.GetNotification()
       }

      })
      .catch((error) => {
        console.log(error);
      });

    //alert("Success!")

    }
    

    render() {
        return (
            <div style={{height:500,}}>
                <Volunteernav/>
               {this.state.arrOfData.map((item,i)=> { 
                 console.log("itemmm",item)
               return <div style={{width:"100%",paddingLeft:60,padding:45,}}>
                <div class="card" style={{borderWidth:2,borderRadius:12,backgroundColor:'white',width:"75%"}}>
  <div class="card-body">
    <h5 class="card-title" key={i}>Selled By : {item.sellerData[0].name}</h5>
    <h5 class="card-title" key={i}>Buyed By: {item.buyerData[0].name}</h5>
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
    {item.status=="0"?
    <a onClick={()=>this.AcceptVolunteerNotification(item._id)} class="btn" style={{backgroundColor:'#f39609',color:'black'}}>Accept Request</a>:null}
  </div>
</div>
            </div>})}                
            </div>
        );
    }
}

export default VolunteerNotification;