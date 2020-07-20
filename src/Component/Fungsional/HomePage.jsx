import React, { useContext } from 'react'
import { Jumbotron, Button } from 'reactstrap';
//import { CartContext } from '../../CartContex';
//import CardComp from './CardComp';
import './CSS/HomePage.css'


function HomePage() {
  
    return (
        <div>
      <Jumbotron>
        <h1 className="display-3">Loka Phone Cell</h1>
        <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT6K16SLnWg5HnuAzOhc_D1T914IvYv7_xlMw&usqp=CAU" alt=""></img>
      
      
      </Jumbotron>
    </div>
    )
}

export default HomePage