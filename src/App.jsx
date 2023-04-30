import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";

const App = () => {
  const [counters, setCounters] = useState([0]);

  const addCounter = () => {
    const newTab = [...counters];
    newTab.push(0);
    setCounters(newTab);
  };

  return (
    <div className="app">
      {counters.length < 3 && <button onClick={addCounter}>Add Counter</button>}
      <Counter counters={counters} setCounters={setCounters} />
    </div>
  );
};

export default App;
