import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);

  const handleCounter = () => {
    debugger;
    console.log("client: before", counter);
    setCounter(counter + 1);
    debugger;
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello world :D :D</h1>
        <br />
        <button onClick={handleCounter}>Counter ++ {counter}</button>
      </header>
    </div>
  );
}

export default App;
