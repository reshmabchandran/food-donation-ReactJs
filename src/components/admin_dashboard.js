import React, { Component } from 'react'
import Admin_nav from './admin_nav'


export default class admin_dashboard extends Component {
    constructor (props) {
        super(props);
        this.state = {
         
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
      }
    render() {
        return (
            <div>
               <Admin_nav/> 
            </div>
        )
    }
}
