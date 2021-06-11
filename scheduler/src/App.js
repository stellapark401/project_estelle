import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { LogIn, SignUp, UserDetail, UserEdit, UserList } from './user/components/index'
import { Home, User, Counter } from './templates'
import { Nav } from './common'



const App = () => {
  return (
    <div>
      <Router>
        <Provider>
          <Nav />
          <Route exact path='/home' component={Home} />
          <Redirect exact from={'/'} to={'/home'} />
          <Route exact path='/user' component={User} />

          <Route exact path='/login' component={LogIn}/>
          <Route exact path='/signup' component={SignUp}/>
          <Route exact path='/user-detail' component={UserDetail}/>
          <Route exact path='/user-edit' component={UserEdit}/>
          <Route exact path='/user-list' component={UserList}/>
        </Provider>
      </Router>
    </div>
  )
}

export default App
