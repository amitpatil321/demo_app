import { Button } from "primereact/button";
import "primereact/resources/themes/bootstrap4-light-purple/theme.css";
import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h2>{count}</h2>
      <Button
        label="Increment"
        onClick={() => setCount((count) => count + 1)}
      />
    </div>
  );
}

export default App;
