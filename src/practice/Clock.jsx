import React from 'react'

function Clock(props) {
  return (
    <div>
        
      <h1>Hello react!</h1>
      <h2>Now is : {new Date().toLocaleTimeString()}</h2>
    </div>
  )
}

export default Clock
