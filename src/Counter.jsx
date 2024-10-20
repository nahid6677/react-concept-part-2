import { useState } from "react"

export default function Counter() {

    const [count, setCount] = useState(0)

    const handleAdd = () => {
        const newCount = count + 1;
        setCount(newCount)
    }

    const handleReduce = () => {
        const newCount = count -1;
        setCount(newCount)
    }
    return (
        <div style={{ border: '2px solid yellow',padding: '20px' }}>
            <h3>Counter: {count}</h3>
            <button onClick={handleAdd} style={{marginRight: '7px'}}>Add</button>
            <button onClick={handleReduce}>Reduce</button>
        </div>
    )
}