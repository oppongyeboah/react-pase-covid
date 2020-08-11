import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import logo1 from '../img/post3.png'


class Table extends Component {
    render(){
        return( 
            <div className="container">
            <div className="row">
            <div className=" card two col-md-8">
                
                <table  className="table  car tab" >
                    <thead><tr>
                        <th scope="col">Countries
                        </th>
                        <th scope="col">Active Cases
                        </th>
                        <th scope="col">Recovered
                        </th>
                        <th scope="col">Total Death
                        </th>
                        <th scope="col">Total Cases
                        </th></tr>                      
                    </thead>
                    <tbody>
                        <tr>
                        <td row="col">Ghana
                        </td>
                        <td row="col">233,645
                        </td>
                        <td row="col">646
                        </td>
                        <td row="col">7,646
                        </td>
                        <td row="col">7,646
                        </td></tr>
                        <tr>
                        <td row="col">Ghana
                        </td>
                        <td row="col">233,645
                        </td>
                        <td row="col">646
                        </td>
                        <td row="col">7,646
                        </td>
                        <td row="col">7,646
                        </td></tr>
                        <tr>
                        <td row="col">Ghana
                        </td>
                        <td row="col">233,645
                        </td>
                        <td row="col">646
                        </td>
                        <td row="col">7,646
                        </td>
                        <td row="col">7,646
                        </td></tr>
                        <tr>
                        <td row="col">Ghana
                        </td>
                        <td row="col">233,645
                        </td>
                        <td row="col">646
                        </td>
                        <td row="col">7,646
                        </td>
                        <td row="col">7,646
                        </td></tr>
                        <tr>
                        <td row="col">Ghana
                        </td>
                        <td row="col">233,645
                        </td>
                        <td row="col">646
                        </td>
                        <td row="col">7,646
                        </td>
                        <td row="col">7,646
                        </td></tr>
                        <tr>
                        <td row="col">Ghana
                        </td>
                        <td row="col">233,645
                        </td>
                        <td row="col">646
                        </td>
                        <td row="col">7,646
                        </td>
                        <td row="col">7,646
                        </td></tr>
                        <tr>
                        <td row="col">Ghana
                        </td>
                        <td row="col">233,645
                        </td>
                        <td row="col">646
                        </td>
                        <td row="col">7,646
                        </td>
                        <td row="col">7,646
                        </td></tr>
                        <tr>
                        <td row="col">Ghana
                        </td>
                        <td row="col">233,645
                        </td>
                        <td row="col">646
                        </td>
                        <td row="col">7,646
                        </td>
                        <td row="col">7,646
                        </td></tr>
                        <tr>
                        <td row="col">Ghana
                        </td>
                        <td row="col">233,645
                        </td>
                        <td row="col">646
                        </td>
                        <td row="col">7,646
                        </td>
                        <td row="col">7,646
                        </td></tr>
                    </tbody>
                </table>               
            </div>
            <div className="col-lg-4 col-sm-4" >
            <div   className="card2 car1  ">
          <div  className="card-body"><button className="btn btn-danger"  >Health Tips</button></div>
          </div>
           <div  className="card2 car2 ">
          <div className="card-body"><h4><button class="btn btn-danger"  >News Update</button></h4>  
          <img classname="" src={logo1} alt="good"width="100%" height="200px"></img>
          </div>
       </div>
      </div>
      </div>
            </div>
            
            
        )
    }
    
}
export default Table