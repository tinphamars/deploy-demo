import React from 'react';
import { Container, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';

function Cart(props) {
    const { data: { deaths, lastUpdate, recovered, confirmed } } = props;
    if (!confirmed) {
        return 'loading ...';
    }
    return (
        <Container>
            <Row>
                <Col sm="4">
                    <Card body className='text-center'>
                        <h3>Confirmed</h3>
                        <CardText className="font-italic">Update: {new Date(lastUpdate).toDateString()}</CardText>
                        <h2>{new Intl.NumberFormat().format(confirmed.value)}</h2>
                    </Card>
                </Col>
                <Col sm="4">
                    <Card body className='text-center'>
                        <h3>Recovered</h3>
                        <CardText className="font-italic">Update: {new Date(lastUpdate).toDateString()}</CardText>
                        <h2 className="text-success">{new Intl.NumberFormat().format(recovered.value)}</h2>
                    </Card>
                </Col>
                <Col sm="4">
                    <Card body className='text-center'>
                        <h3>Deaths</h3>
                        <CardText className="font-italic">Update: {new Date(lastUpdate).toDateString()}</CardText>
                        <h2 className="text-danger">{new Intl.NumberFormat().format(deaths.value)}</h2>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Cart;