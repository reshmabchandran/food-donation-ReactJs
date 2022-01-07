import React, { Component } from 'react'
import Donatornav from './Donatornav'

const sampleJSON = {
    "arrOfData":[
        {"name":"asdf",
        "location":"Calicut",
        "waste_type":"cloth",
        },
        
        {"name":"zxc",
        "location":"Kannur",
        "waste_type":"book"},
  
        {"name":"iop",
        "location":"Calicut",
        "waste_type":"food"},
  
        {"name":"iop",
        "location":"Calicut",
        "waste_type":"food"}
    ]
  }

export default class DonatorDashboard extends Component {

  constructor (props) {
    super(props);
    this.state = {
     
      "arrOfData":[
        {"name":"asdf",
        "location":"Calicut",
        "waste_type":"cloth",
        },
        
        {"name":"zxc",
        "location":"Kannur",
        "waste_type":"book"},
  
        {"name":"iop",
        "location":"Calicut",
        "waste_type":"food"},
  
        {"name":"iop",
        "location":"Calicut",
        "waste_type":"food"}
    ]
        
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
                <Donatornav/>
                {/* {this.state.arrOfData.map((item,i)=> { 
               return <div style={{width:"102%",paddingLeft:60,padding:45,}}>
                <div class="card" style={{borderWidth:2,borderRadius:12,backgroundColor:'white',width:"75%"}}>
  <div class="card-body">
    <h4 class="card-title" key={i}>{item.name}</h4>
    <h5 class="card-title" key={i}>{item.location}</h5>
    <p class="card-text" key={i}>{item.waste_type}</p>
    <p class="card-text">{item.gender}</p>
    <a href="#" class="btn" style={{backgroundColor:'#0898c4',color:'white'}}>Delete Donation</a>
  </div>
</div>
            </div>})} */}
            </div>
        )
    }
}
