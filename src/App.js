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
      <div className="container">
        <img src="https://i.ibb.co/7QpKsCX/image.png" alt="covid19" />
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    )
  }
}
export default App