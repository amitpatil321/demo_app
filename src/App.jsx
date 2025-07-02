import { Button } from "primereact/button";
import "primereact/resources/themes/bootstrap4-light-purple/theme.css";
import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="counter-container">
      <h2>{count}</h2>
      <div className="buttons">
        <Button
          label="Increment"
          onClick={() => setCount((count) => count + 1)}
        />
        <Button label="Reset" onClick={() => setCount(0)} />
      </div>
    </div>
  );
}

export default App;
