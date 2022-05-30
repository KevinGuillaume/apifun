import "./ApiSearch.css";
import { useEffect, useState} from 'react'
function ApiSearch(){

    const [ApiRes,setApiRes] = useState("")
    

    //https://api.coinlore.net/api/tickers/?start=0&limit=10
    
    const axios = require('axios').default;


    const getData = async () =>{
        await axios.get('https://api.quotable.io/random')
        .then(function (response) {
            // handle success
            setApiRes(response.data)
            
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
           <div className="button-container">
                <div className ="button" onClick={getData}>Random Quote</div>
           </div>
           
           <div className="output-box">
            <div className="child">{ApiRes.content}</div>
           </div>
           
           
        </div>

    

    )
}
export default ApiSearch