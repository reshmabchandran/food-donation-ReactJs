import React, { Component } from 'react'
import Donatornav from './Donatornav'
import axios from 'axios';

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
    ],
    // username:""
        
    }
  }
  GetAllCloth = () => {
    const url = "http://localhost:5000/api/cloth/view-cloth";

    const header = {
      "Content-Type": "application/json",
    };

    axios
      .get(url, header)
      .then((response) => {
        console.log("VIEW CLOTH RESULT======", response);

        if (response.data.success == true) {
          this.setState({
            arrOfData: response.data.data,
          });

          console.log("cloth dataaaa", this.state.arrOfData);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  componentDidMount=()=>{
    
      const documentData = JSON.parse(localStorage.getItem('logindata'));
       const session_data=  window.sessionStorage.getItem("isLoggedIn")

       console.log("LOGIN_DATA====",documentData)
       console.log("SESSION_DATA====",session_data)
// this.setState()
       this.GetAllCloth()
  }

    render() {
        return (
            <div style={{height:390,}}>
                <Donatornav/>
                {/* {this.state.arrOfData.map((item,i)=> { 
                  {if(item.username)}
               return <div style={{width:"102%",paddingLeft:60,padding:45,}}>
                <div class="card" style={{borderWidth:2,borderRadius:12,backgroundColor:'white',width:"75%"}}>
  <div class="card-body">
  <h4 class="card-title" key={i}>
                           Item :  <strong>{item.type}</strong>
                          </h4>
                          <h5 class="card-title" key={i}>
                           Gender : <strong>{item.gender}</strong> 
                          </h5>
                          <h5 class="card-title" key={i}>
                           Quantity : <strong>{item.quantity}</strong> 
                          </h5> <hr/>
    <a href="#" class="btn" style={{backgroundColor:'#0898c4',color:'white'}}>Delete Donation</a>
  </div>
</div>
            </div>})} */}
            </div>
        )
    }
}
