import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import { v4 as uuidv4} from 'uuid'
import { addTodoAction } from '../store/todo.reducer'


const TodoInput = () => {
    const [todo, setTodo] = useState('')
    const dispatch = useDispatch()
    const [count, setCount] = useState(0)
    
    const submitForm = e => {
        e.preventDefault()
        console.log(`uuidv4 : ${uuidv4()}`)
        const newTodo = {
          id: uuidv4,
          name: todo,
          complete: false
        }
        addTodo(newTodo)
    }

    const addTodo = todo => dispatch(addTodoAction(todo))

    const handleChange = e => {
      e.preventDefault()
      setTodo(e.target.value)
    }

    return (
        <>
        <h3>The list of what to do</h3>
        <br /><br /><br /><br />
        <form onSubmit = {submitForm} method='Post' >
          <div className='row mt-3'>
            <div className='from-group col-sm-8'>
              <input
                type='text'
                placeholder='Here type the things to be done'
                name='todo'
                className='from-control'
                value={todo}
                onChange={handleChange}
              />
            </div>
          </div>
        </form>
        <button>Add</button>
        <button>Delete</button>
        </>
    )
} 

export default TodoInput