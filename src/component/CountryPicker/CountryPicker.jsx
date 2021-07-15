import React, { useState, useEffect } from 'react'
import { NativeSelect, FormControl } from '@material-ui/core'
import { fetchCountries } from '../../api'
import './CountryPicker.css'

const CountryPicker = ({handleCountryChange}) => {

    const [fetuchCountries, setfetuchCountries] = useState([])

    useEffect(() => {

        const fetchApi = async () => {
            setfetuchCountries(await fetchCountries())
        }
        fetchApi()

    }, [setfetuchCountries])


    return (
        <div>
            <FormControl className="formControl">
                <NativeSelect defaultValue="" onChange={(e)=>handleCountryChange(e.target.value)}>
                    <option value="golabal">Global</option>
                    {fetuchCountries.map((country,i)=><option value={country} key={i}>{country}</option>)}

                </NativeSelect>
            </FormControl>
        </div>
    )
}


export default CountryPicker