import "./ApiSearch.css";
import { useState} from 'react'
function ApiSearch(){

    const [ApiRes,setApiRes] = useState([])

    //https://api.coinlore.net/api/tickers/?start=0&limit=10
    const axios = require('axios').default;

    const getData = async () =>{
        await axios.get('https://jsonplaceholder.typicode.com/users')
        .then(function (response) {
            // handle success
            console.log(response.data)
            setApiRes(response.data);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
    }
    
    /* 

    This was the old method to be used using fetch()
    const getApiData = async () => {
        console.log('clicked')
         await fetch("https://jsonplaceholder.typicode.com/users")
         .then(res => res.json())
         .then(data => setApiRes(data))
         .catch(err => console.log(err))
    } 
    
    */

   
    
    


    return (
        <div>
           <div className="search-container">
                <input className="search" placeholder="Please enter api link"></input>
                <div className ="button" onClick={getData}>Click me</div>
           </div>
           
           <div className="output-box">
            
           </div>
           
           
        </div>

    

    )
}
export default ApiSearch