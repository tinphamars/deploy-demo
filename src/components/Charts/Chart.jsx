import React, { useState, useEffect } from 'react';
import { fetchDailyData } from '../../api';
import { Line, Bar } from 'react-chartjs-2';
import './chart.css';

function Chart({ data: { confirmed, recovered, deaths }, country }) {

    const [dailyData, setDailydata] = useState([]);
    useEffect(() => {
        const fechDaily = async () => {
            setDailydata(await fetchDailyData());
        }
        fechDaily();
    }, []);
    const lineChart = (
        dailyData.length !== 0 ?
            (<Line
                data={{
                    labels: dailyData.map(({ date }) => date),
                    datasets: [{
                        data: dailyData.map(({ confirmed }) => confirmed),
                        label: 'Infected',
                        borderColor: 'green',
                        fill: true,
                    }, {
                        data: dailyData.map(({ deaths }) => deaths),
                        label: 'Deaths',
                        borderColor: 'red',
                        fill: true,
                        backgroundColor: 'yellow',
                    }],
                }}
            />) :
            null
    );

    const barChart = (
        confirmed ?
            (<Bar
                data={{
                    labels: ['Infected', 'Recovered', 'Deaths'],
                    datasets: [{
                        label: 'Peoples',
                        backgroundColor: [
                            '#ED5127',
                            '#3C8104',
                            '#000000',
                        ],
                        hoverBackgroundColor: [
                            'blue',
                            'blue',
                            'blue',
                        ],
                        data: [confirmed.value, recovered.value, deaths.value],
                    }]
                }}
                options={{
                    legend: { display: false },
                    title: { display: true, text: `Current state in ${country}` }
                }}
            />) :
            null
    )

    return (
        <div className="map__api">
            {country ? barChart : lineChart}
        </div>
    );
}

export default Chart;