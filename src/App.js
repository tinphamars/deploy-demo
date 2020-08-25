import React from 'react';
import './App.css';
import Chart from './components/Charts/Chart';
import Cart from './components/Cards/Cart';
import CountryPicker from './components/Countrypicker/CountryPicker';
import { fetchdata } from './api';
import { Container, Row, Col } from 'reactstrap';
import News from './components/News/News';

class App extends React.Component {
    state = {
        data: {},
        country: '',
    }
    async componentDidMount() {
        const fetchdata1 = await fetchdata();
        this.setState({ data: fetchdata1 });
    }
    getCountry = async (country) => {
        const dataCountry = await fetchdata(country);
        this.setState({ data: dataCountry, country: country });
    }
    render() {
        const { data, country } = this.state;
        return (
            <div>
                <Container fluid>
                    <Row>
                        <Col xs={3}>
                            <News />
                        </Col>
                        <Col xs={9}>
                            <h1 className="text-center">Home - page</h1>
                            <Cart data={data} />
                            <div className="text-center">
                                <CountryPicker getCountry={this.getCountry} />
                            </div>
                            <Chart data={data} country={country} />
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default App;
