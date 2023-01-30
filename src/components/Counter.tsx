import { useState } from "react"

import classes from './Counter.module.scss'

export const Counter = () => {
  const [count, setCount] = useState(0)
  return (
    <div>
      <h2 className={classes.text}>{count}</h2>
      <button className={classes.button} onClick={() => setCount(prev => prev + 1)}>increment</button>
      <button className={classes.button}  onClick={() => setCount(prev => prev - 1)}>decrement</button>
    </div>
  )
}