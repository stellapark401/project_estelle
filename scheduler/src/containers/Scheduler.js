import React from 'react'
import { TodoInput, TodoList } from '../components/index'
/*import { TodoInput, TodoList } from '../components'*/
import { Provider } from 'react-redux'
import { store } from '../store'
/* store/index.js 
   export const store = createStore(todoReducer)
*/

const Scheduler = () => {
    return(
      <>
        <Provider store={store}>
          <TodoList />
          <TodoInput />
        </Provider>
      </>
    )
}

export default Scheduler