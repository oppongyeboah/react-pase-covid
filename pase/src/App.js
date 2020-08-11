
import React, { Component } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Logo from './Component/Logo'
import Cards from './Component/Cards'
import Table from './Component/Table'



class App extends Component {
render() { 
  return ( 
    <div>
        <Logo/>
        <Cards/>
        <Table/>
       

    </div>  
   );

}}


export default App;
