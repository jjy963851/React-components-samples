import React from 'react'

function Card(props) {
    const {title, backgroundColor, children} = props;

  return (
    <div
        style={{
            margin : 50,
            padding : 50,
            borderRadius: 50,
            boxShadow: "0px 0px 4px grey",
            backgroundColor: backgroundColor || "white",
        }}
        >
            {title && <h1>{title}</h1>}
            {children}
    </div>
  )
}

export default Card
