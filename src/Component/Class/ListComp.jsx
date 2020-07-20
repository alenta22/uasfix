import React, {PureComponent } from 'react'
import axios from 'axios'
import qs from 'querystring'
import {Table, Button, Container, NavLink, Alert} from 'reactstrap'
import {Link} from 'react-router-dom'

const api = 'http://localhost:3001'

class ListComp extends PureComponent {
    constructor(props) {
        super (props)
        this.state = {
            barang : [],
            response: '',
            display: 'none'
        }
    }

    componentDidMount(){
        axios.get(api+'/tampil').then(res=>{
            this.setState({
                barang: res.data.values 
            })
        })
    }

    Deletebarang = (idbarang) => {
        const {barang} = this.state
        const data = qs.stringify({
            id_barang: idbarang
        })

        axios.delete(api+ '/hapus',
        {
            data: data,
            headers: {'Content-type': 'application/x-www-form-urlencoded'}
        }
        ).then(json=>{
            if (json.data.status === 200) {
                console.log(json.data.status);
                this.setState({
                    response: json.data.values,
                    barang: barang.filter(barang => barang.id_barang !== idbarang),
                    display: 'block'
                })
                this.props.history.push('/barang')
            }else {
                this.setState({
                    response: json.data.values,
                    barang: barang.filter(barang => barang.id_barang !== idbarang),
                    display: 'block'
                })
                //this.props.history.push('/barang')
            }
        });
}

    render () {
        return (
            <Container>
                <h2>Data Barang</h2>
                <Alert color= "success" style={{display: this.state.display}}>
                        {this.state.response}
                    </Alert>
                <NavLink href="/barang/tambah"><button color="success">Tambah Data</button></NavLink>
                <hr/>
                <Table className="table-bordered">
                    <thead>
                        <tr>
                            <th>ID Barang</th>
                            <th>Nama Barang</th>
                            <th>Harga</th>
                            <th>Stok</th>
                            <th>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.barang.map(barang =>
                            <tr key={barang.id_barang}>
                                <td>{barang.id_barang}</td>
                                <td>{barang.nama_barang}</td>
                                <td>{barang.harga}</td>
                                <td>{barang.stok}</td>
                                <td>
                                    <Link to= 
                                    {
                                        {
                                            pathname: '/barang/edit',
                                            state: {
                                                id_barang: barang.id_barang,
                                                nama_barang: barang.nama_barang,
                                                harga: barang.harga,
                                                stok: barang.stok
                                            }
                                        }
                                    }>
                                        <Button>Edit</Button>
                                        
                                    </Link>
                                    <span></span>
                                        <Button onClick={()=>this.Deletebarang(barang.id_barang)} color="danger">Hapus</Button>


                                </td>
                            </tr>

                            )}
                    </tbody>

                </Table>
            </Container>
        )
    }
} 

export default ListComp;