import axios from 'axios';

const _url = 'https://covid19.mathdro.id/api';

export const fetchdata = async (country) => {
    let changUrl = _url;
    if (country) {
        changUrl = `${_url}/countries/${country}`;
    }
    try {
        const { data: { deaths, lastUpdate, recovered, confirmed } } = await axios.get(changUrl);
        const modifidedData = {
            deaths, lastUpdate, recovered, confirmed
        }
        return modifidedData;
    } catch (error) {
        console.log(error);
    }
}

export const fetchDailyData = async () => {
    try {
        const { data } = await axios.get(`${_url}/daily`);

        const datas = data.map((each) => ({
            deaths: each.deaths.total,
            confirmed: each.confirmed.total,
            date: each.reportDate,
        }));

        return datas;
    } catch (error) {
        console.log(error);
    }
}

export const countryData = async () => {
    try {
        const { data: { countries } } = await axios.get(`${_url}/countries`);
        return countries.map((country) => country.name);
    } catch (error) {
        console.log(error);
    }
}