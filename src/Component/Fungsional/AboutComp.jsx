import React, { useContext } from 'react'
import { Jumbotron, Button, Container, Row, Col } from 'reactstrap';
import CardComp from './CardComp';
import { CartContext } from '../../CartContex';


function AboutComp() {
  
    return (
        <div>
      <Jumbotron fluid>
        <Container fluid>
    <h1 className="display-5">About Loka Phone Cell</h1>
        <p>Adalah toko tempat menjual berbagai macam HandPhone dengan berbagai merk yang Terbaru dan Pastinya dengan harga Terjangkau!!</p>
        <p>Beralamat di Jl Lanud Wirasaba Rt 02/06</p>
        </Container>
      </Jumbotron>
    </div>
    )
}

export default AboutComp