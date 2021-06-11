import React from 'react'
import { BrowserRouter as Router, Link } from "react-router-dom"

const UserDetail = () => {
    return (
        <>
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
        </>
    )
}


export default UserDetail