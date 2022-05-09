import './App.css';
import ApiSearch from "./Components/ApiSearch"

function App() {
  return (
    <div className="App">
        <h1>API Cleanup</h1>
        <h2>This App is meant to hopefully make API viewing a little bit cleaner</h2>
        <h3>Currently it is a work in progress but what is to be added in the future is a working input field for most API links</h3>
        <ApiSearch />
    </div>
  );
}

export default App;
