import React, { Component } from 'react'
import Donatornav from './Donatornav'
import axios from 'axios';

// const sampleJSON = {
//     "arrOfData":[
//         {"name":"asdf",
//         "location":"Calicut",
//         "waste_type":"cloth",
//         },
        
//         {"name":"zxc",
//         "location":"Kannur",
//         "waste_type":"book"},
  
//         {"name":"iop",
//         "location":"Calicut",
//         "waste_type":"food"},
  
//         {"name":"iop",
//         "location":"Calicut",
//         "waste_type":"food"}
//     ]
//   }

export default class view_donate_food extends Component {

  constructor (props) {
    super(props);
    this.state = {
     
      "arrOfData":[
        // {"name":"asdf",
        // "location":"Calicut",
        // "waste_type":"cloth",
        // },
        
        // {"name":"zxc",
        // "location":"Kannur",
        // "waste_type":"book"},
  
        // {"name":"iop",
        // "location":"Calicut",
        // "waste_type":"food"},
  
        // {"name":"iop",
        // "location":"Calicut",
        // "waste_type":"food"}
    ]
        
    }
  }


  GetAllFood=()=>{

    const url="http://localhost:5000/api/item/view-food"
  
    const header ={
      'Content-Type': 'application/json', 
     }

     axios.get(url,header)
     .then((response)=> {
       console.log("VIEW Food RESULT======",response);


       if(response.data.success==true)
       {
           this.setState({
               arrOfData:response.data.details
           })

           console.log("food dataaaa",this.state.arrOfData)
       }


      })
      .catch((error) => {
        console.log(error);
      });
  

  }

  DeleteFood=(id)=>{

     console.log("IDDDDDDDDDD",id)

     const url="http://localhost:5000/api/item/delete-food/"+id
  
      

       console.log("URL0",url)
  
       axios.get(url)
       .then((response)=> {
         console.log("RESULT======",response);

         if(response.data.success==true)
         {
           this.setState({
             message:response.data.message
           })

           alert(this.state.message)
           this.GetAllFood()

         }
         else{
           alert("Something went Wrong!")
         }


        })
        .catch((error) => {
          console.log(error);
        });
  }


  componentDidMount=()=>{
    
      const documentData = JSON.parse(localStorage.getItem('logindata'));
       const session_data=  window.sessionStorage.getItem("isLoggedIn")

       console.log("LOGIN_DATA====",documentData)
       console.log("SESSION_DATA====",session_data)
   
       this.GetAllFood()
  }

    render() {
        return (
            <div style={{height:390,}}>
                <Donatornav/>
                {this.state.arrOfData.map((item,i)=> { 
                  console.log("food",item)
                  if (!(item.foodData.length == 0)) {
                    return ( <div style={{width:"102%",paddingLeft:60,padding:45,}}>
                <div class="card" 
                style={{borderWidth:2,borderRadius:12,backgroundColor:'white',width:"55%",boxShadow:'10px 3px 25px #ff6666'}}>
  {/* <div class="card-header">
    Featured
  </div> */}
  <div class="card-body">
  <h4 class="card-title" key={i} style={{ color: "blue" }}>
                      {item.username}
                    </h4> <hr/>
                    {item.foodData.map((item1, i) => {
                      return (
                        <>
                          <h4 class="card-title" key={i}>
                           Food Item :  <strong>{item1.food_name}</strong>
                          </h4>
                          <h5 class="card-title" key={i}>
                           Category : <strong>{item1.food_category}</strong> 
                          </h5>
                          <h5 class="card-title" key={i}>
                           Quantity : <strong>{item1.quantity}</strong> 
                          </h5>
                          <h5 class="card-title" key={i}>
                           exp_date : <strong>{item1.exp_date}</strong> 
                          </h5> 
                        
    <div>
    {item.status==="1"?<h5 style={{color:"green"}}>Item Collected</h5>:null}
    <a onClick={()=>this.DeleteFood(item1._id)} class="btn" style={{backgroundColor:'#0898c4',color:'white'}}>Delete</a>&emsp;&emsp;
    {/* <a href="#" class="btn" style={{backgroundColor:'#0898c4',color:'white'}}>Edit</a> */}
    </div><hr/>
    </>
                      );
                    })}
    </div>
                </div>
              </div>
            );
          }
        })}
      </div>
    );
  }
}
