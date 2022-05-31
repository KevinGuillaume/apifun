import './App.css';
import ApiSearch from "./Components/ApiSearch"
import SyncVsAsync from "./Components/SyncVsAsync"
import Promises from "./Components/Promises"
import { useState } from 'react';

function App() {

  const [showSync,setShowSync] = useState(false);

  return (
    <div className="App">
        <div className="header-text">
            <h2>API Fun</h2>
          
            <h3>Learn about API's by using a random quote generator.</h3>
            <h4>This is a work in progress! More information is to be added continously about api's. 
              Building this helped me learn, so I hope it helps anyone else also!
            </h4>
        </div>
        <ApiSearch />
        <div className="select">
          <div className="option1">Synchronous</div>
          <div className="option2">Promises</div>
          <div className="option3">API</div>
        </div>
        <div className="learn-container">
            {showSync ? <SyncVsAsync /> : <div></div>}
            
            
            <Promises />

        </div>
        
    </div>
  );
}

export default App;
