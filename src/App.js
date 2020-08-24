import React from 'react';
import './App.css';
import Chart from './components/Charts/Chart';
import Cart from './components/Cards/Cart';
import CountryPicker from './components/Countrypicker/CountryPicker';
import { fetchdata } from './api';
import { Container } from 'reactstrap';
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
            <Container>
                <h1 className="text-center">Home - page</h1>   
                <Cart data={data} />
                <CountryPicker getCountry={this.getCountry} />
                <Chart data={data} country={country} />
            </Container>
        );
    }
}

export default App;
