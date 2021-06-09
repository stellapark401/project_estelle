import React, {component} from 'react'
import { Route } from 'react-router-dom'
import { Home } from './common/index'

function App() {
  return (
    <>
      <Route exact path='/' component={Home} />
    </>
  );
}

export default App;
