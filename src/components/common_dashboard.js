import React, { Component } from 'react'
import Common_nav from './common_nav'

import food1 from '../assets/fooddonation3.jpg';
import food2 from '../assets/fooddonation2.jpg';
import food3 from '../assets/fooddonation4.jpg';
export default class common_dashboard extends Component {
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
            <div>
                <Common_nav/>
                <div style={{display:'flex',padding:'20px'}}>
                &emsp; &emsp;
                <div class="card" style={{width:"30%"}}>
                <img src={food2} class="card-img-top" alt="..."/>
                <div class="card-body">
                <h5 class="card-title" style={{fontWeight:'bold'}}>Iam a Donator</h5>
                {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                <a href="/donator_dashboard" class="btn btn-warning">Go to Donator Section</a>
               </div>
               </div>&emsp;&emsp;


               <div class="card" style={{width:"30%"}}>
                <img src={food2} class="card-img-top" alt="..."/>
                <div class="card-body">
                <h5 class="card-title" style={{fontWeight:'bold'}}>Iam a Receiver</h5>
                {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                <a href="/receiver_dashboard" class="btn btn-warning">Go to Receiver Section</a>
               </div>
               </div>&emsp;&emsp;

               <div class="card" style={{width:"30%"}}>
                <img src={food2} class="card-img-top" alt="..."/>
                <div class="card-body">
                <h5 class="card-title" style={{fontWeight:'bold'}}>Iam a Volunteer</h5>
                {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                <a href="/volunteer_dashboard" class="btn btn-warning">Go to Volunteer Section</a>
               </div>
               </div>
               </div>
            </div>
        )
    }
}
