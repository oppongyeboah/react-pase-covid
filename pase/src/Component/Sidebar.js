import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import logo1 from '../img/post3.png'



class Sidebar extends Component {
    render(){
        return( <div className="container">
            <div className="col-lg-4 col-sm-4" >
            <div   className="card2  ">
          <div  className="card-body"><button class="btn btn-danger"  >Health Tips</button><h4></h4></div>
          </div>
           <div  className="card2  ">
          <div className="card-body"><h4><button class="btn btn-danger"  >News Update</button></h4>  
          <img classname="image" src={logo1} alt="good" width="350"></img>
          </div>
       </div>
      </div>
      </div>
        )
    }
    
}
export default Sidebar