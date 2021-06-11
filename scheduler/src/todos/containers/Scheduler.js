import React from 'react'
import { TodoInput, TodoList } from '../components/index'
/*import { TodoInput, TodoList } from '../components'*/
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { rootReducer } from 'C:/Users/bitcamp/estelle/workspace2/scheduler/src/store'
/* store/index.js 
   export const store = createStore(todoReducer)
*/

const store = createStore(rootReducer)

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