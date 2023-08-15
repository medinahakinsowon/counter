import { useState } from "react";



const Counter = () => {
  const [counter, setcounter] = useState(0)

  const increment = () => {
    setcounter(counter + 1)
  }

  const decrement = () => {
    setcounter(counter - 1)
  }

  const resetCounter = () => {
    setcounter(0)
  }

  return (
    <div style={{ height: "100vh", backgroundColor: "#ddd" }}>
      <div className="text-center" style={{ }}>
        <h3 style={{ fontSize: "200px" }}>{counter}</h3>
      </div>
      <div className="text-center al">
        <button className="btn btn-primary p-4 m-3" style={{ width: "150px", borderRadius: "10px" }} onClick={increment}>Plus</button>
        <button className="btn btn-dark p-4 m-3" style={{ width: "150px", borderRadius: "10px" }} onClick={decrement}>Minus</button>
        <button className="btn btn-danger p-4 m-3" style={{ width: "150px", borderRadius: "10px" }} onClick={resetCounter}>Reset</button>
      </div>
    </div>
  )
}

export default Counter;