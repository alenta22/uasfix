import React from 'react'
import { Jumbotron, Button, Container } from 'reactstrap';

function DetailComp(props) {
    return(
        <div>
      <Jumbotron>
        <Container fluid>
    <h1 className="display-3">{props.location.state.judul}</h1>
        <p className="lead">{props.location.state.tanggal}</p>
        <hr className="my-2" />
        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
        <p className="lead">
          <Button color="primary">Learn More</Button>
        </p>
        </Container>
      </Jumbotron>
    </div>
    )
}

export default DetailComp