import "./ApiSearch.css";
import { useState} from 'react'
function ApiSearch(){

    const [ApiRes,setApiRes] = useState([])

    //https://api.coinlore.net/api/tickers/?start=0&limit=10
    
    const getApiData = async () => {
        console.log('clicked')
         await fetch("https://jsonplaceholder.typicode.com/users")
         .then(res => res.json())
         .then(data => setApiRes(data))
         .catch(err => console.log(err))
    }

   
    
    


    return (
        <div>
           <div className="search-container">
                <input className="search" placeholder="Please enter api link"></input>
                <div className ="button"onClick={getApiData}>Click me</div>
           </div>
           
           <div className="output-box">
           {ApiRes.map(x => {
               return (
                   
                   <div key ={x.id} className="child">{x.name}</div>
               )
           })}
           </div>
           
           
        </div>

    

    )
}
export default ApiSearch