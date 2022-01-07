import React, { Component } from 'react'
import Receivernav from './Receivernav'


export default class ReceiverSendNotification extends Component {
    render() {
        return (
            <div>
                <Receivernav/>
                <div className="row d-flex" >
     <div className="col-lg-4">
         {/* <div className="card1 pb-5">
             <div className="row">  </div>
             <div className="row px-3 justify-content-center mt-4 mb-5 border-line"> <img src="https://www.guardforce.com.hk/media/images/news/smart%20bin%20pic-01_1600x907.jpg" className="image"/> </div>
         </div> */}
     </div>
     <div className="col-lg-4" style={{marginTop:40,}}>
         <h4 style={{textAlign:'center',fontWeight:'bold',color:'white'}}>Send Notification</h4>
         <div className="card2 card border-0 px-4 py-5" style={{backgroundColor:'white',height:280,alignSelf:'center',marginTop:100,marginRight: 20,marginLeft:30}}>
            
    
            <div class="form-group">
            {/* <label for="exampleFormControlTextarea1">Notification</label> */}
            <textarea class="form-control" style={{height:140,borderRadius:10,borderWidth:3}} id="exampleFormControlTextarea1" rows="5" placeholder="Notification"></textarea>
            </div>
    
             <div className="row px-3 mb-4">
    
                 {/* <div className="custom-control custom-checkbox custom-control-inline"> <input id="chk1" type="checkbox" name="chk" className="custom-control-input"/> <label for="chk1" className="custom-control-label text-sm">Remember me</label> </div> <a href="#" className="ml-auto mb-0 text-sm">Forgot Password?</a> */}
             </div>
             <div className="row mb-3 px-3">
                  <button type="submit" style={{backgroundColor:'#fe8b84',color:'white'}} className="btn btn-blue text-center" >SEND</button> </div>
             {/* <div className="row mb-4 px-3"> <small className="font-weight-bold">New User? <a className="text-danger" onClick={()=>this.props.history.push('/')}>Login</a></small> </div> */}
         </div>
     </div>
    </div>
            </div>
        )
    }
}
