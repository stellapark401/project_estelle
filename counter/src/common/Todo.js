import React, { useState } from 'react'

const Todo = () => {
    const [count, setCount] = useState(0)
    const [item, setItem] = useState('')
    const items = Array

    const handleChange = (e) => {
        setItem(e.target.value)
    }

    const handleSubmit = e => {
      /*items[count] = item
      alert(items[count])*/
      alert(count)
      setCount(count + 1)
    }

    const showItem = () => {
        alert(items[0])
        alert(items[1])
        alert(items[2])
    }

    return (
      <>
        <button>할 일 추가</button>
        <button onClick={showItem}>할 일 확인</button>
        <button>할 일 삭제</button>
        <form>
          <input onChange={handleChange} />
          <button onClick={handleSubmit} type="submit">
            Submit
          </button>
        </form>
      </>
    )
}

export default Todo