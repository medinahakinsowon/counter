import { useState, useEffect } from "react";
import { Container } from "@mui/material";

const api = 'https://restcountries.com/v3.1/all';
const product = "https://dummyjson.com/products"

const FetchData = () => {
  const [data, setData] = useState([])
  const fetchsecondData = async () => {
    const response = await fetch(api)
    const data = await response.json()
    setData(data)
    console.log(data)
  }

  useEffect(() => {
    fetchsecondData()
  }, []) /// will only run once 

  return (
    <div>
      <List list={data}/>
    </div>
  
  )


}
export default FetchData

//population, name, image, region, area, carside with a car icon, official name, subregion, start of week

const List = ({list})=>{
  return (
   <Container>
      {list.map((country, index)=>{
         return(
           <div key={index}>
             <h1>{country.name.common}</h1>
             <img src={country.flags.png}/>
           </div>
         )
      })}
   </Container>
  )
}
