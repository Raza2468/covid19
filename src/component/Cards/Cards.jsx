import React from 'react'
import CountUp from 'react-countup';
import './Cards.css';




const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
    // console.log(props);

    if (!confirmed) {
        return (
            <div>
                <div className="spinner-border text-primary" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        )
    }
    return (
        <div>

            <div class="row">
                <div class="column">
                    <div class="card infected">
                        <p class="title">Infected</p>
                        <h5 class="text"><CountUp start={0} end={confirmed.value} duration={2.5} separator="," /></h5>
                        <h5 class="text">{new Date(lastUpdate).toDateString()}</h5>
                        <p class="title">Number Of Active cases COVID-19</p>
                    </div>
                </div>

                <div class="column">
                    <div class="card recovered">
                        <p class="title">Recovered</p>
                        <h5 class="text"><CountUp start={0} end={recovered.value} duration={2.5} separator="," /></h5>
                        <h5 class="text">{new Date(lastUpdate).toDateString()}</h5>
                        <p class="title">Number Of recoveries from COVID-19</p>
                    </div>
                </div>

                <div class="column">
                    <div class="card deaths">
                        <p class="title">Deaths</p>
                        <h5 class="text"><CountUp start={0} end={deaths.value} duration={2.5} separator="," /></h5>
                        <h5 class="text">{new Date(lastUpdate).toDateString()}</h5>
                        <p class=" title">Number Of deaths casesd by COVID-19</p>
                    </div>
                </div>


            </div>



        </div>

    )
}

export default Cards