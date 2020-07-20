import React, { PureComponent } from 'react'
import axios from 'axios'
import qs from 'querystring'
//import {Link} from 'react-router-dom'
import { Container, Col, Row, Form, FormGroup, Alert, Label, Input, Button} from 'reactstrap'

const api = "http://localhost:3001"

class EditComp extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
                 id_barang: this.props.location.state.id_barang,
                 nama_barang: this.props.location.state.nama_barang,
                 harga: this.props.location.state.harga,
                 stok: this.props.location.state.stok,
                 response: '',
                 display: 'none'
        }
    }

    handleChange = (e) => {
        this.setState({[e.target.name] : e.target.value})
    }

    ubahbarang = (idbarang) => {
        const data = qs.stringify ({
            id_barang: idbarang,
            nama_barang: this.state.nama_barang,
            harga: this.state.harga,
            stok: this.state.stok
        });

        axios.put(api + '/ubah',data)
        .then(json => {
            if (json.data.status === 200) {
                console.log(json.data.status);
                this.setState({
                    response: json.data.values,
                    display: 'block'
                });
            }
            else {
                this.setState({
                    response: json.data.values,
                    display: 'block'
                });
            }
        });
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
                        <Label>ID BARANG</Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                <Input type="text" name="id_barang" value={this.state.id_barang} onChange={this.handleChange} placeholder="Masukan ID"/>
                                </Col>
                            </Row>
                        </FormGroup>
                        <Label>Nama</Label>
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
                        <FormGroup>
                        <Label>Stok</Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                <Input type="text" name="stok" value={this.state.stok} onChange={this.handleChange} placeholder="Masukan Jumlah Stok"/>
                                </Col>
                            </Row>
                        </FormGroup>
                        <FormGroup></FormGroup>
                            <Row>
                                <Col>
                                <Button type="button" onClick={()=>this.ubahbarang(this.state.id_barang)}>Update</Button>
                                </Col>
                            </Row>
                        </FormGroup>
                        </Col>
                    </Form>
                </Container>
        )
    }
}

export default EditComp
