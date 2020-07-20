import React, { useEffect, useState } from 'react';
import { Container } from 'reactstrap';
import axios from 'axios'
import { Table, Button } from 'reactstrap'

const api = 'http://localhost:3001'

function HooksUseEffects() {

    const [barang, setbarang] = useState([])

    useEffect(() => {
        console.log("Memanggil Use Effects")
        axios.get(api + '/tampil').then(res => {
            setbarang(res.data.values)
        })
    }, [])
    return (
        <Container>
            <h2>Data Barang</h2>

            <hr />
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
                    {barang.map(barang =>
                        <tr key={barang.id_barang}>
                            <td>{barang.id_barang}</td>
                            <td>{barang.nama_barang}</td>
                            <td>{barang.harga}</td>
                            <td>{barang.stok}</td>
                            <td>

                                <Button>Edit</Button>


                                <span></span>
                                <Button color="danger">Hapus</Button>


                            </td>
                        </tr>

                    )}
                </tbody>

            </Table>
        </Container>
    )
}

export default HooksUseEffects;
