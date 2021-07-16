import './App.css';
import React, { Component } from 'react'
import { Cards, Chart, CountryPicker } from './component'
import { fetchData } from './api/index'


// class Component
class App extends Component {

  state = {
    data: {},
    country: '',
  }

  async componentDidMount() {

    const Datafetch = await fetchData();
    this.setState({ data: Datafetch });

  }

  handleCountryChange = async (country) => {

    const Datafetch = await fetchData(country);
    this.setState({ data: Datafetch, country: country });

  }
  render() {

    const { data, country } = this.state;

    return (
      // fucation component 
      <div >
        <img class="img" src="https://cdn.pixabay.com/photo/2020/03/30/11/49/corona-virus-4984021_960_720.jpg" alt="covid19" />
        <Cards data={data} />
        <br />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    )
  }
}
export default App