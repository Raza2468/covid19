import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import CountUp from 'react-countup';
import { MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBRow, MDBCol } from 'mdb-react-ui-kit';

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
        <div className="container">
            <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
                <MDBCol>
                    <MDBCard className="infected">
                        {/* <MDBCardImage
                            src='https://mdbcdn.b-cdn.net/img/new/standard/city/041.jpg'
                            alt='...'
                            position='top'
                        /> */}
                        <MDBCardBody>
                            <p className="card-title">Infected</p>
                            <h5 className="card-text"><CountUp start={0} end={confirmed.value} duration={2.5} separator="," /></h5>
                            <h5 className="card-text">{new Date(lastUpdate).toDateString()}</h5>
                            <p className="card-title">Number Of Active cases COVID-19</p>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                <MDBCol>
                    <MDBCard className="recovered">
                        {/* <MDBCardImage
                            src='https://mdbcdn.b-cdn.net/img/new/standard/city/042.jpg'
                            alt='...'
                            position='top'
                        /> */}
                        <MDBCardBody>
                            <p className="card-title">Recovered</p>
                            <h5 className="card-text"><CountUp start={0} end={recovered.value} duration={2.5} separator="," /></h5>
                            <h5 className="card-text">{new Date(lastUpdate).toDateString()}</h5>
                            <p className="card-title">Number Of recoveries from COVID-19</p>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                <MDBCol>
                    <MDBCard className="deaths">
                        {/* <MDBCardImage
                            src='https://mdbcdn.b-cdn.net/img/new/standard/city/043.jpg'
                            alt='...'
                            position='top'
                        /> */}
                        <MDBCardBody>
                            <p className="card-title">Deaths</p>
                            <h5 className="card-text"><CountUp start={0} end={deaths.value} duration={2.5} separator="," /></h5>
                            <h5 className="card-text">{new Date(lastUpdate).toDateString()}</h5>
                            <p className="card-title">Number Of deaths casesd by COVID-19</p>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                <MDBCol>

                </MDBCol>
            </MDBRow>
        </div>
    )
}

export default Cards