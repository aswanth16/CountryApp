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
  <div >
    <h1 class = "code">Countries</h1>
  <div>

  </div>
  <div className="mapcountry">
      
     {countries.map((country) =>{
        const{ numericCode,name,region,flag} = country
        return <article key = {numericCode}>
          <div class= "cn-det">
           <div class = "flag"><img src = {flag} alt ={name} /></div>
           <div class= "deatils-country">
           
              
              <h3> {name}</h3>
              <h4>{region}</h4>
            
            </div>
            </div>


        </article>
     })}
     
    </div>
    </div>
    
     );

    }
    

export default Countries;