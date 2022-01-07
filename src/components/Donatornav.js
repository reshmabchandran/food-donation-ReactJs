import React, { Component } from 'react';

class Donatornav extends Component {

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
              <nav className="navbar navbar-expand-lg navbar-light " 
              style={{padding:15,backgroundColor:'#fe8b84',borderBottom:'1px solid ',boxShadow:'10px 10px 25px '}}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/common_dashboard" style={{paddingLeft:40,color:'white',fontWeight:'bold'}}>Food Donation</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      {/* <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" style={{paddingLeft:40,color:'white'}}  id="navbarDropdown" role="button" data-bs-toggle="dropdown" >
          Add Donations
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="/donator_food_donation">Donate Food</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="/donator_cloth_donation">Donate Cloths</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="/donator_book_donation">Donate Books</a></li>
            
          </ul>
        </li> */}

        {/* <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" style={{paddingLeft:40,color:'white'}}  id="navbarDropdown" role="button" data-bs-toggle="dropdown" >
          View All Donations
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="/view_donate_food">View Donated Food</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="/view_donate_cloth">View Donated Cloths</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="/view_donate_book">View Donated Books</a></li>
          </ul>
        </li> */}

        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/donator_food_donation" 
          style={{paddingLeft:40,color:'white'}}>Add Food Donation</a>
        </li> 

        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/donator_cloth_donation"
           style={{paddingLeft:40,color:'white'}}>Add cloth Donation</a>
        </li>

        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/donator_book_donation" 
          style={{paddingLeft:40,color:'white'}}>Add Book Donation</a>
        </li> 

        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/view_donate_food" 
          style={{paddingLeft:40,color:'white'}}>View Food Donation</a>
        </li> 

        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/view_donate_cloth" style={{paddingLeft:40,color:'white'}}>View Cloth Donation</a>
        </li>

        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/view_donate_book" style={{paddingLeft:40,color:'white'}}>View Book Donation</a>
        </li> 

        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/donation_notification" 
          style={{paddingLeft:40,color:'white'}}> View Notifications</a>
        </li> 

        <li className="nav-item">
          <a className="nav-link active btn btn-outline-danger" aria-current="page" onClick={()=>this.logout()} 
          style={{color:'white'}}> Logout </a>
        </li> 

        {/* <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/donator_add_donation" style={{paddingLeft:40,color:'white'}}>Add Donation</a>
        </li> */}
        
      </ul> 
    </div>
  
  </div>
</nav>     
            </div>
        );
    }
}

export default Donatornav;