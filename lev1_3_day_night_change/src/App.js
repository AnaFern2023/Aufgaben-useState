import { useState } from 'react'
import './App.css';


function App() {
  let [light, setLight] = useState(true)

  return (
    <div className="App">
      <section style={{ backgroundColor: light ? "blue" : "lightBlue" }}>
        <h1>{light ? "Es ist Nacht! 🌑" : "Es ist Tag! ☀️"}</h1>
        <button onClick={() => setLight(light ? false : true)}>{light ? "Wechsel zu Tag" : "Wechsel zu Nacht"}</button>
      </section>
    </div>
  );
}

export default App;
