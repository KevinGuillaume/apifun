import "./Learn.css";
import {useState} from 'react'
function Learn(){
    
    


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