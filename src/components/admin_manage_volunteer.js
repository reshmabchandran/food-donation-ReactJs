import React, { Component } from 'react'
import Admin_nav from './admin_nav'
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

export default class admin_manage_volunteer extends Component {

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


  GetAllBook=()=>{

    const url="http://localhost:5000/api/book/view-book"
  
    const header ={
      'Content-Type': 'application/json', 
     }

     axios.get(url,header)
     .then((response)=> {
       console.log("VIEW BOOK RESULT======",response);


       if(response.data.success==true)
       {
           this.setState({
               arrOfData:response.data.data
           })

           console.log("book dataaaa",this.state.arrOfData)
       }


      })
      .catch((error) => {
        console.log(error);
      });
  


}


  componentDidMount= async()=>{
    
      const documentData = JSON.parse(localStorage.getItem('logindata'));
       const session_data=  window.sessionStorage.getItem("isLoggedIn")

       console.log("LOGIN_DATA====",documentData)
       console.log("SESSION_DATA====",session_data)

      await this.GetAllBook()
 
  }

  // MoveToEdit=(bookid)=>{

  //     console.log("kittyyyyyy")

  //     this.props.history.push({
  //       pathname:"/donator_book_donation",
  //       state:{
  //          book_id:bookid,
  //          isEditbookprop:true
  //       }
  //     })
  // }

  DeleteBook=(id)=>{

      console.log("iddddd===",id)

      const url="http://localhost:5000/api/book/delete-book/"+id
  
      

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
           this.GetAllBook()

         }
         else{
           alert("Something went Wrong!")
         }


        })
        .catch((error) => {
          console.log(error);
        });

  }

  

    render() {
        return (
            <div style={{height:390,}}>
                <Admin_nav/>
                {this.state.arrOfData.map((item,i)=> { 
                    console.log("bookss",item)
               return <div style={{width:"102%",paddingLeft:60,padding:45,}}>
                <div class="card" style={{borderWidth:2,borderRadius:12,backgroundColor:'white',width:"75%"}}>
  {/* <div class="card-header">
    Featured
  </div> */}
  <div class="card-body">
    <h4 class="card-title" key={i}>{item.category}</h4>
    <h5 class="card-title" key={i}>{item.language}</h5>
    <p class="card-text" key={i}>{item.waste_type}</p>
    <p class="card-text">{item.gender}</p>
    <div>
    {/* <a onClick={()=>this.DeleteBook(item._id)} class="btn" style={{backgroundColor:'#0898c4',color:'white'}}>Delete</a>&emsp;&emsp; */}
    {/* <a onClick={()=>this.MoveToEdit(item._id)} class="btn" style={{backgroundColor:'#0898c4',color:'white'}}>Edit</a> */}
    </div>
  </div>
</div>
            </div>})}
            </div>
        )
    }
}
