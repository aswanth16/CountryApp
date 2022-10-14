import React, { useState, useEffect } from "react"
import "./country.css"

const url = "https://restcountries.com/v2/all?fields=name,region,flag"


const Countries = () => {
  const [countries, setCountries] = useState([])
  const fetchCountryData = async () => {
    const response = await fetch(url)
    const countries = await response.json()
    setCountries(countries)
  }
  useEffect(() => {
      fetchCountryData()
      
    }, [])



return(
  <div className="mapcountry">
     {countries.map((country) =>{
        const{ numericCode,name,region,flag} = country
        return <article key = {numericCode}>
           <div>
              <img src = {flag} alt ={name} />
              <h3>Country : {name}</h3>
              <h4>Region : {region}</h4>
            
            </div>


        </article>
     })}
    </div>

     );

    }

export default Countries;