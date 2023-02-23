import React,{useState, useEffect} from 'react'

function ConfirmButton(props) {

    const [isConfirmed, setIsConfirmed] =useState(false)
    
    const handleConfirm = () =>{
       setIsConfirmed((prevIsComfirmed) => !prevIsComfirmed)
    }
  
    return (
    <div>
      <button onClick = {handleConfirm} disabled ={isConfirmed}>{isConfirmed? "Chekced" : "lets Check"}</button>
    </div>
  )
}

export default ConfirmButton
