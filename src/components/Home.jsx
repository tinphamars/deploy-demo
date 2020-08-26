import React from 'react';
import Chart from './Charts/Chart';
import Cart from './Cards/Cart';
import CountryPicker from './Countrypicker/CountryPicker';
import { fetchdata } from '../api';
import { Container } from 'reactstrap';

class Home extends React.Component {
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
            <Container>
                <h1 className="text-center">Home - page</h1>
                <Cart data={data} />
                <Container className="text-center">
                    <CountryPicker getCountry={this.getCountry} />
                    <Chart data={data} country={country} />
                </Container>
            </Container>
        );
    }
}

export default Home;
