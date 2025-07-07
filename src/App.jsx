import { Button } from "primereact/button";
import "primereact/resources/themes/bootstrap4-light-purple/theme.css";
import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const changeCount = (action) => {
    if (action === "dec") {
      if (count <= 0) return;
      setCount((count) => count - 1);
    } else setCount((count) => count + 1);
  };

  return (
    <div className="counter-container">
      <h3>My Counter Application</h3>
      <h2>{count}</h2>
      <div className="buttons">
        <Button label="Increment" onClick={() => changeCount("inc")} />
        <Button label="Decrement" onClick={() => changeCount("dec")} />
        <Button label="Reset" onClick={() => setCount(0)} />
      </div>
    </div>
  );
}

export default App;
