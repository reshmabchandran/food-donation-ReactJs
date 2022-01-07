import React, { Component } from 'react';

class Receivernav extends Component {

  constructor (props) {
    super(props);
    this.state = {
     
    }
  }


  logout=()=>
  {
    localStorage.clear();
    window.sessionStorage.clear();
    window.location.href = "/"
  }



    render() {
        return (
            <div>
              <nav class="navbar navbar-expand-lg navbar-light " 
              style={{padding:15,backgroundColor:'#fe8b84'}}>
  <div class="container-fluid">
    <a class="navbar-brand" href="/common_dashboard" 
    style={{paddingLeft:40,color:'white',fontWeight:'bold'}}>Food Donation</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        {/* <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#" style={{paddingLeft:40,color:'white'}}>View Donations</a>
        </li>  */}
        {/* <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" style={{paddingLeft:40,color:'white'}}  id="navbarDropdown" role="button" data-bs-toggle="dropdown" >
         Accept  Donations
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="/view_user_donate_receiver_food">View Donated Food</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="/view_user_donate_receiver_cloth">View Donated Cloths</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="/view_user_donate_receiver_book">View Donated Books</a></li>
            
          </ul>
        </li> */}
        <li class="nav-item">
        <a className="nav-link active" href="/view_user_donate_receiver_food" style={{paddingLeft:40,color:'white'}}>Accept Donation Food</a>
        </li>
        <li class="nav-item">
        <a className="nav-link active" href="/view_user_donate_receiver_cloth" style={{paddingLeft:40,color:'white'}}>Accept Donation Cloth</a>
        </li>
        
        <li class="nav-item">
        <a className="nav-link active" href="/view_user_donate_receiver_book" style={{paddingLeft:40,color:'white'}}>Accept Donation Book</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" onClick={()=>this.logout()} style={{paddingLeft:40,color:'white'}}>Logout</a>
        </li>
      </ul>
    </div>
  </div>
</nav>     
            </div>
        );
    }
}

export default Receivernav;