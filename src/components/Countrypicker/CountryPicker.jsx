import React, { useState, useEffect } from 'react';
import { FormControl, NativeSelect } from '@material-ui/core';
import { countryData } from '../../api';
import './countrypicker.css';

function CountryPicker({ getCountry }) {

    const [country, setCountry] = useState([]);

    useEffect(() => {
        const fecthCountrys = async () => { setCountry(await countryData()) };
        fecthCountrys();
    }, [setCountry])

    return (
        <div className="country-container">
            <h3 className="text-center">Select country</h3>
            <FormControl>
                <NativeSelect onChange={(e) => getCountry(e.target.value)}>
                    <option value="">Global</option>
                    {country.map((count, i) => (<option key={i} value={count}>{count}</option>))}
                </NativeSelect>
            </FormControl>
        </div>
    );
}

export default CountryPicker;