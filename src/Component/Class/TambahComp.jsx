import React, { PureComponent } from 'react'
import axios from 'axios'
import { Container, Col, Row, Form, FormGroup, Alert, Label, Input, Button} from 'reactstrap'
//import {Link} from 'react-router-dom'

const api = 'http://localhost:3001'

class TambahComp extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            id_barang: '',
            nama_barang: '',
            harga: '',
            stok: '',
            response: '',
            display: 'none',
        }
    }

handleChange = (e) => {
    this.setState({[e.target.name] : e.target.value})
}

Addbarang = () => {
    axios.post(api+ '/tambah', {
        id_barang: this.state.id_barang,
        nama_barang: this.state.nama_barang,
        harga: this.state.harga,
        stok: this.state.stok
    }).then(json => {
        if(json.data.status == 200){
            this.setState({
                response: json.data.values,
                display: 'block'
            })
        }else {
            this.setState({
                response: json.data.values,
                display: 'block'
            })

        }
    })
}

    render() {
        return (
                <Container>
                    <h4>Form Tambah Data</h4>
                    <Alert color= "success" style={{display: this.state.display}}>
                        {this.state.response}
                    </Alert>
                    <Form className="form">
                        <Col>
                        <Label>ID</Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                <Input type="text" name="id_barang" value={this.state.id_barang} onChange={this.handleChange} placeholder="Masukan ID"/>
                                </Col>
                            </Row>
                        </FormGroup>
                        <Label>Nama Barang</Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                <Input type="text" name="nama_barang" value={this.state.nama_barang} onChange={this.handleChange} placeholder="Masukan Nama Barang"/>
                                </Col>
                            </Row>
                        </FormGroup>
                        <Label>Harga</Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                <Input type="text" name="harga" value={this.state.harga} onChange={this.handleChange} placeholder="Masukan Harga"/>
                                </Col>
                            </Row>
                        </FormGroup>
                        <Label>Stok</Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                <Input type="text" name="stok" value={this.state.stok} onChange={this.handleChange} placeholder="Masukan Stok"/>
                                </Col>
                            </Row>
                        </FormGroup>
                        <FormGroup>
                            <Row>
                                <Col>
                                <Button type="button" onClick={this.Addbarang}>Submit</Button>
                                </Col>
                            </Row>
                        </FormGroup>
                        </Col>
                    </Form>
                </Container>
        )
    }
}

export default TambahComp