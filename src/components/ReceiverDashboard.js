import React, { Component } from 'react'
import Receivernav from './Receivernav'


const sampleJSON = {
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


export default class ReceiverDashboard extends Component {

    constructor (props) {
        super(props);
        this.state = {
         
        }
      }

      componentDidMount=()=>{
        const documentData = JSON.parse(localStorage.getItem('logindata'));
        const session_data=  window.sessionStorage.getItem("isLoggedIn")
 
        console.log("LOGIN_DATA====",documentData)
        console.log("SESSION_DATA====",session_data)
      }
      
    render() {
        return (
            <div style={{height:390,}}>
            <Receivernav/>
            {/* {sampleJSON.arrOfData.map((item,i)=> { 
           return <div style={{width:"102%",paddingLeft:60,padding:45,}}>
            <div class="card" style={{borderWidth:2,borderRadius:12,backgroundColor:'white',width:"75%"}}>

<div class="card-body">
<h4 class="card-title" key={i}>{item.name}</h4>
<h5 class="card-title" key={i}>{item.location}</h5>
<p class="card-text" key={i}>{item.waste_type}</p>
<p class="card-text">{item.gender}</p>
<a href="#" class="btn" style={{backgroundColor:'#0898c4',color:'white'}}>Accept Donation</a>
</div>
</div>
        </div>})} */}
        </div>
        )
    }
}
