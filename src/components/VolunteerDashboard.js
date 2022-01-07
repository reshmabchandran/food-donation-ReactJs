import React, { Component } from 'react'
import Volunteernav from './Volunteernav'


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


export default class VolunteerDashboard extends Component {

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
            <Volunteernav/>
            </div>
        )
    }
}
