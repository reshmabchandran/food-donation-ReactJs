import React, { Component } from 'react';

class navbar extends Component {
    render() {
        return (
            <div>
              <nav class="navbar navbar-expand-lg navbar-light " style={{padding:15,backgroundColor:'#fe8b84'}}>
  <div class="container-fluid">
    <a class="navbar-brand" href="/" style={{paddingLeft:40,color:'white',fontWeight:'bold'}}>Food Donation</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/register" style={{paddingLeft:40,color:'white'}}>REGISTER</a>
        </li> 
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/login" style={{paddingLeft:40,color:'white'}}>LOGIN</a>
        </li>
      </ul>
    </div>
  </div>
</nav>     
            </div>
        );
    }
}

export default navbar;