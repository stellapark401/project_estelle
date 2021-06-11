import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTodoAction, toggleTodoAction } from '../../store/todo.reducer'

const TodoList = () => {
    
    const todos = useSelector( state => state.todos )
    const dispatch = useDispatch()
    const toggleTodo = id => dispatch(toggleTodoAction(id))
    const deleteTodo = id => dispatch(deleteTodoAction(id))
    
    const msg = todos.length ? todos.map(
        todo => (
            <div
              key={todo.id}
              className='row mb-1'
            >
              <div
                className='col-sm-2'
              >
                <input 
                  type='checkbox'
                  checked={todo.complete}
                  onChange={toggleTodo.bind(null, todo.id)}
                />
                {todo.complete ?
                  <span
                    style={{textDecoration: 'line-through'}}
                  >
                    {todo.name}
                  </span>
                  :
                  <span>
                    {todo.name}
                  </span>
                }
                <button
                  onClick={deleteTodo.bind(null, todo.id)}
                >
                  X
                </button>
              </div>
            </div>
          )
        ) : 'Nothing has enlisted yet'
    return (
        <>
          <h1>{msg}</h1>
        </>
    )
}

export default TodoList