import React from 'react'

const Home = () => {
    return (
        <>
          <h1>홈</h1>
          <A />
        </>
    )
}

class A extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      value: '던진다.'
    }
  }
  render () {
    return (
      <B value={this.state.value} />
    )
  }
}

function B(props){
  return(
    <button>
      {props.value}
    </button>
  )
}

export default Home