import { useState } from "react";
import Box from "./components/Box";

function App() {
  const [isOpen, setIsOpen] = useState (false) 
  const [count, setCount] = useState (0) 


  return (
    <div>
      <h1>App componet</h1>
      <button onClick={()=>setIsOpen(!isOpen)}>Toggle</button>
      <button onClick={()=>setCount(count + 1)}>Increment Set Count</button>
      {isOpen && <Box count = {count }/>}
      </div>
  );
  }

export default App;
  