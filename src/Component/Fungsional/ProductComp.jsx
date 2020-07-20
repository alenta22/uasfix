import React from 'react';
import { Container, Row } from 'reactstrap';
import RowProduct from './RowProduct';

function ProductComp() {
    return (
        <div>
            <Container>
                <hr/>
                <h2>Produk</h2>
                <Row>
        <RowProduct nama="Vivo X50 Pro" stock="10" harga="9999000" img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fcirebon.tribunnews.com%2F2020%2F07%2F16%2Fbocoran-harga-vivo-x50-dan-vivo-x50-pro-dirilis-kamis-16-juli-2020-ini-spesifikasi-lengkapnya&psig=AOvVaw0HDIT8gEQpAfElU9apR6T_&ust=1595141440615000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCODhnI6b1uoCFQAAAAAdAAAAABAS"/>
        <RowProduct nama="Vivo Y12i" stock="15" harga="1899000" img src=""/>
        <RowProduct nama="Vivo Y30i" stock="14" harga="2499000" img src=""/>
        <RowProduct nama="Oppo A91" stock="50" harga="3599000" img src=""/>
        <RowProduct nama="Oppo RENO 2" stock="100" harga="6721250" img src=""/>
        <RowProduct nama="Oppo A52" stock="108" harga="3100000" img src=""/>
        <RowProduct nama="Samsung Galaxy A21s" stock="108" harga="3399000" img src=""/>
        <RowProduct nama="Samsung Galaxy S20+" stock="10" harga="15749000" img src=""/>
                </Row>
            </Container>
        </div>
    )
}

export default ProductComp;
