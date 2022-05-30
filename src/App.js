import './App.css';
import ApiSearch from "./Components/ApiSearch"
import Learn from "./Components/Learn"

function App() {
  return (
    <div className="App">
        <h1>Random Quote Generator</h1>
       
        <h3>This is a work in progress! More information is to be added continously about api's. 
          Building this helped me learn, so I hope it helps anyone else also!</h3>
        <ApiSearch />
        <Learn />
    </div>
  );
}

export default App;
