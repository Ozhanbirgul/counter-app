import { useEffect } from "react";
import { useState } from "react"

function App() {
const [count, setCount] = useState(0);

useEffect(() => {
  console.log("Count değişti:", count);
  if(count>5) {
    alert("Count 5'i geçti")
  }
}, [count])

  return (
    <div>
     <h1>Count: {count}</h1>
     <button onClick={() => setCount(prev => prev +1)}>Increase</button>
    </div>
  )
}

export default App
