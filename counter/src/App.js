import React, { Component } from 'react'
import { Route } from "react-router-dom"
import { Home, Counter, Todo} from 'common/index'

function App() {
  return (
    <div>
      <Route exact path={'/'} component={Home} />
      <Route exact path={'/counter'} component={Counter}/>
      <Route exact path={'/to-do'} component={Todo} />
    </div>
  );
}

export default App
