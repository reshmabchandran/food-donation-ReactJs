import React, { Component } from 'react'
import Navbar from './navbar';
import img from '../assets/main_image.jpg'

export default class Indexpage extends Component {

    render() {
        return (
            <div>
                <Navbar/>                
 {/* <div className="row d-flex"  > */}
 <div className="col-lg-8 col-sm-8 mx-auto">
     {/* <div className="card1 pb-5"> */}
         {/* <div className="row">  </div> */}
         <div className="row px-6 justify-content-center mt-4 mb-2 border-line " 
         style={{boxShadow:"10px 10px 20px 20px #fe8b84", borderRadius:"50px"}}>
              <img style={{boxShadow:"10px 10px 20px 20px #ee8b84", borderRadius:"60px"}}
               src="https://www.rentcafe.com/blog/wp-content/uploads/sites/62/2020/10/donations-pickup-featured.png" className="image"/> 
        </div>
     {/* </div> */}
 {/* </div> */}
 </div>
 <div className="row">
<hr style={{width:"80%", height:"3px", color:"#fff"}} className='mx-auto mt-5'/>

 <div className='col-lg-6'>

 <h1 className=' display-2 pb-0 mb-0' style={{ marginLeft:"75px", fontSize : "70px",color:"#eededd" ,fontFamily:"serif"}}>
 <span style={{fontFamily:"fantasy",}}>Charity</span> begins at home, but should not end there </h1>

 <h5 className='mt-0 align-right' 
 style={{color:"#eededd" ,fontFamily:"serif", marginLeft:"80px"}}>
We work hard to protect children from harm and help them access quality education and health services,food and clothings.</h5>
 </div>
 <div className='col-lg-6'>
<img className='w-100 h-100' 
style={{opacity:"0.4"}}
 src="https://th.bing.com/th/id/R.716191a5fe21340196cb44ef1bf21f7b?rik=O70LwaDLgAAhAA&riu=http%3a%2f%2fclipart-library.com%2fimg1%2f1363695.png&ehk=fyTaUVLfaQmSo3UtYlWhph7Gn9gu%2bjp0turtlIAvhyg%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1"/>
</div>
            </div>
            </div>
        )
    }
}
