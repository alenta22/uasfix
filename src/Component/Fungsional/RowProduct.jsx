import React, { Component } from 'react';
import { CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button, Col, Card } from 'reactstrap';
//import { useContext } from 'react';
//import { CartContext } from '../../CartContex';

class RowProduct extends Component {
    constructor(props) {
        super(props)

        this.state = {
            stock: this.props.stock,
            sub: "Beli",
            status: "Tersedia",
            disabled: false,
        }
    }

    ButtonBeli = () => {
        this.setState({
            stock: this.state.stock-1
        })

        if(this.state.stock ===1){
            this.setState({
                status: "Habis",
                disabled: true
            })
        }
    }
    render() {
        return (
            <div>
                 <Col>
        <Card>
        <CardImg top width="100%" src="http://placeimg.com/640/480/tech" alt="Card image cap" />
        <CardBody>
        <div className="box-stock">
                <h2>{this.props.nama}</h2>
                <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fgadgetsquad.id%2Frekomendasi%2F7-hp-baru-murah-rp-1-jutaan-september-2018%2F&psig=AOvVaw3GyQBRDj0DQ2UV4daewQuq&ust=1595121081876000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKCxzJ7P1eoCFQAAAAAdAAAAABAD" alt=""/>
                <p><b>Rp.{this.props.harga}</b></p>
                <p>{this.props.stok}</p>
        <button className="btn-click" onClick={this.ButtonBeli} disabled={this.state.disabled}>Beli</button>
                <p>{this.state.status}</p>
            </div>
        </CardBody>
      </Card>
        </Col>
            </div>
        )
    }
}

export default RowProduct;
