import { useState } from "react"

import './Counter.scss'

export const Counter = () => {
  const [count, setCount] = useState(0)
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => setCount(prev => prev + 1)}>increment</button>
      <button onClick={() => setCount(prev => prev - 1)}>decrement</button>
    </div>
  )
}