import React, { Component } from 'react'
import Admin_nav from './admin_nav';


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

export default class admin_manage_item extends Component {

  constructor (props) {
    super(props);
    this.state = {
     
        
        
    }
  }
    render() {
        return (
            <div style={{height:390,}}>
                <Admin_nav/>
                {sampleJSON.arrOfData.map((item,i)=> { 
               return <div style={{width:"102%",paddingLeft:60,padding:45,}}>
                <div class="card" style={{borderWidth:2,borderRadius:12,backgroundColor:'white',width:"75%"}}>
  {/* <div class="card-header">
    Featured
  </div> */}
  <div class="card-body">
    <h4 class="card-title" key={i}>{item.name}</h4>
    <h5 class="card-title" key={i}>{item.location}</h5>
    <p class="card-text" key={i}>{item.waste_type}</p>
    <p class="card-text">{item.gender}</p>
    <a href="#" class="btn" style={{backgroundColor:'#0898c4',color:'white'}}>Delete</a>
  </div>
</div>
            </div>})}
            </div>
        )
    }
}
