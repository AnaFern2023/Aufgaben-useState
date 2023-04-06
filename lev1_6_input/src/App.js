import { useState } from 'react'
import './App.css';

function App() {

  let [vorname, setVorname] = useState("")
  let [nachname, setNachname] = useState("")
  let [email, setEmail] = useState("")

  const changeVorname = event => {
    setVorname(event.target.value)
  }
  const changeNachname = event => {
    setNachname(event.target.value)
  }
  const changeEmail = event => {
    setEmail(event.target.value)
  }


  return (
    <div className="App">
      <section>
        <input type="text" name="" id="" onChange={changeVorname} placeholder='Vorname' value={vorname} />
        <input type="text" name="" id="" onChange={changeNachname} placeholder='Nachname' value={nachname} />
        <input type="email" name="" id="" onChange={changeEmail} placeholder='Email' value={email} />
        <p>Vorname:{vorname}</p>
        <p>Nachname:{nachname}</p>
        <p>Email:{email}</p>
      </section>
    </div>
  );
}

export default App;
