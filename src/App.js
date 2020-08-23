import React from 'react';
import './App.css';
import Chart from './components/Charts/Chart';
import Cart from './components/Cards/Cart';
import CountryPicker from './components/Countrypicker/CountryPicker';
import { fetchdata } from './api';

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
            <div className="App">
                <h1>API Covid 19</h1>
                <Cart data={data} />
                <CountryPicker getCountry={this.getCountry} />
                <Chart data={data} country={country} />
            </div>
        );
    }
}

export default App;
