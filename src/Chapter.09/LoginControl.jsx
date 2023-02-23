import React,{useState, useEffect} from 'react'

function LoginButton(props){
    return(
        <button onClick = {props.onClick}>Login</button>
    )
}

function LogoutButton(props){
    return(
        <button onClick = {props.onClick}>LogOut</button>
    )

    
}

function LoginControl(props) {

const [isLogined, setIsLogined] = useState(false);

const handleLoginClick = () => {
    setIsLogined(true);

}
const handleLogoutClick = () => {
    setIsLogined(false);
}

let button;
if(isLogined){
    button = <LogoutButton onClick = {handleLogoutClick}/>
}else{
    button = <LoginButton onClick= {handleLoginClick}/>
}

  return (
    <div>
      <greeting isLogined = {isLogined}></greeting>
      {button}
    </div>
  )
}

export default LoginControl
