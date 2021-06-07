import React from 'react'
import { Route } from "react-router-dom"
import { LogIn, SignUp, UserEdit, UserList, UserDetail } from 'user/index'
import { Counter } from 'counter/index'
import { Home } from 'common/index'


const App = () => {
  return (
    <div>
      <Route exact path='/' component={Home} />
      <Route exact path='/counter' component={ Counter } />
      <Route exact path='/login' component={ LogIn } />
      <Route exact path='/signup' component={ SignUp } />
      <Route exact path='/user-edit' component={ UserEdit } />
      <Route exact path='/user-list' component={ UserList } />
      <Route exact path='/user-detail' component={ UserDetail } />
    </div>
  )
}

export default App;
