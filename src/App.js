import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState("loading...");
  useEffect(() => {
    fetch("/.netlify/functions/msg")
      .then(res => res.json())
      .then(resData => setData(resData))
      .catch(error => setData(error.message || "did not work..."));
  }, []);
  return (
    <div className="App">
      <header className="App-header">{JSON.stringify(data, null, 2)}</header>
    </div>
  );
}

export default App;
