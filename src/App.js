import './App.css';
import ApiSearch from "./Components/ApiSearch"
import SyncVsAsync from "./Components/SyncVsAsync"
import Promises from "./Components/Promises"
import API from './Components/API';
import { useState } from 'react';

function App() {

  const [showSync,setShowSync] = useState(false);
  const [showAPI,setShowAPI] = useState(false);
  const [showPromise,setShowPromise] = useState(false);

  /* 
  @notice function for setting display according to clicked option
  */
  function displayOption(choice) {
    //reset all options
    setShowSync(false);
    setShowPromise(false);
    setShowAPI(false);   

    //
    if(choice === 'sync'){
        setShowSync(true)
      }
      else if(choice ==='promise'){
        setShowPromise(true)
      }
      else if(choice === 'api'){ 
        setShowAPI(true);
      }
  }

  return (
    <div className="App">
        <div className="header-text">
            <h2>API Fun</h2>
          
            <h4>Learn about API's by using a random quote generator.</h4>
            <h4>This is a work in progress! More information is to be added continously about api's. 
              Building this helped me learn, so I hope it helps anyone else also!
            </h4>
        </div>
        <ApiSearch />
        <div className="select">
          <div className={`option1 ${showSync ? "active" : ""}`} onClick={() => displayOption('sync')}>Synchronous</div>
          <div className={`option2 ${showPromise ? "active" : ""}`} onClick={() => displayOption('promise')}>Promises</div>
          <div className={`option3 ${showAPI ? "active" : ""}`} onClick={() => displayOption('api')}>API</div>
        </div>
        <div className="learn-container">
            {showSync ? <SyncVsAsync /> : <div></div>}
            {showPromise ? <Promises /> : <div></div>}
            {showAPI ? <API /> : <div></div>}
            
            
           

        </div>
        
    </div>
  );
}

export default App;
