import React from 'react'
import { BrowserRouter as Router, Link } from "react-router-dom"
import styled from 'styled-components'
import Counter from 'counter/Counter'
import LogIn from 'user/LogIn'
import SignUp from 'user/SignUp'
import UserDetail from 'user/UserDetail'
import UserEdit from 'user/UserEdit'
import UserList from 'user/UserList'


const App = () => {
  return (
    <>
      <Counter/>
      <UserDetail/>
      <LogIn/>
      <SignUp/>
    </>
  )
}

export default App;
