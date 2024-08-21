import React from "react";
import { Container, Row, Col, Button } from 'reactstrap';

const Home = () => {
    return (
        <Container className="bg-light p-5 rounded-lg">
            <Row>
                <Col>
                    <h1 className="display-4">Olá Module Federation</h1>
                    <hr className="my-4" />
                    <p>Este componente é outro App!</p>
                    <p className="lead">
                        <Button color="primary">Botão</Button>
                    </p>
                </Col>
            </Row>
      </Container>
    )
}

export default Home;