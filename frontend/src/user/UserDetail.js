import React from 'react'
import { BrowserRouter as Router, Link } from "react-router-dom"
import styled from 'styled-components'

const UserDetail = () => {
    return (
        <>
            <Container>
                <Element>
                    <nav>
                        <Router>
                            <Link to="/">Home</Link><br/>
                            <Link to="/">Blog</Link><br/>
                            <Link to="/">About Me</Link><br/>
                            <Link to="">Go to Google</Link><br/>
                        </Router>
                    </nav> 
                    <h1>Welcome to Stepia</h1>
                    <h3>I will walk you thru the wonders.</h3>
                    <p>When you're writing a paragraph, use p_tag.Hence the name?</p>
                    <hr/> 
                    <img width="450px" height="400px" src="https://t1.kakaocdn.net/friends/official/with-kangdaniel/images/img-little-apeach-01.png" ></img>
                </Element>
            </Container>)
        </>
    )
}

const Container = styled.div`s
    width: 100%;
    border: 1px solid #d1d8e4;
`
const Element = styled.div`
  width: 400px;  
  margin: 0 auto;
   
`

export default UserDetail