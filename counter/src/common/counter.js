import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)

    const showCount = () => {
        alert("now it's " + count)
    }

    const onClickAdd = () => {
        alert('Added')
        setCount(count + 1)
    }
/* onClickAdd & onClickSub are not fns, but constances*/
    const onClickSub = () => {
        alert('Subtracted')
        setCount(count - 1)
    }

    return (<>
        <button onClick={onClickAdd}>+</button>
        <button onClick={onClickSub}>-</button>
        <br></br>
        <button onClick={showCount}>what's my number</button>
      </>
    )
}

export default Counter