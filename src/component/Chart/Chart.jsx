import React, { useState, useEffect } from 'react'
import { fetchDailyData } from '../../api'
import { Line, Bar } from 'react-chartjs-2'
import './Chart.css'

const Chart = ({ data: { confirmed, recovered, deaths }, country }) => {

    const [dailyData, setDaliyData] = useState([])

    useEffect(() => {
        const fetchAPI = async () => {
            setDaliyData(await fetchDailyData())
        }
        fetchAPI()
        // console.log(dailyData, "daliyData");
    }, [])
    // console.log(confirmed, recovered, deaths);

    const lineChart = (

        dailyData.length
            ? (
                <Line
                    data={{
                        labels: dailyData.map(({ data }) => data),
                        datasets: [{
                            data: dailyData.map(({ confirmed }) => confirmed),
                            label: 'Infected',
                            borderColor: '#3333ff',
                            fill: true,
                        }, {
                            data: dailyData.map(({ deaths }) => deaths),
                            label: 'Deaths',
                            borderColor: 'red',
                            backgroundColor: "rgb(255, 0, 0, 0.5)",
                            fill: true,

                        }],
                    }}
                />
            ) : null

    )

    const barChart = (
        confirmed ? (
            <Bar
                data={{
                    labels: ['Infected', 'Recovered', 'Deaths'],
                    datasets: [
                        {
                            label: 'People',
                            backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
                            data: [confirmed.value, recovered.value, deaths.value],

                        },
                    ],
                }}
                options={{
                    legend: { display: false },
                    title: { display: true, text: `Current state in ${country}`, },

                }}
            />
        ) : null
    );





    return (
        <div id="containerbarChart">
            {country ? barChart : lineChart}


        </div>
    )
}

export default Chart