import './App.css';
import ApiSearch from "./Components/ApiSearch"
import SyncVsAsync from "./Components/SyncVsAsync"

function App() {
  return (
    <div className="App">
        <h1>Random Quote Generator</h1>
       
        <h3>This is a work in progress! More information is to be added continously about api's. 
          Building this helped me learn, so I hope it helps anyone else also!
        </h3>
        <ApiSearch />
        <div className="select">
          <div>Synch</div>
          <div>Promises</div>
          <div>API</div>
        </div>
        <div className="learn-container">
            <SyncVsAsync />
        </div>
        
    </div>
  );
}

export default App;
