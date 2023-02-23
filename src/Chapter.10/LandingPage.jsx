import React,{useState, useEffect} from 'react'
import ToolBar from './ToolBar'


function LandingPage(props){
    const [isLoggedIn, setIsLogined] = useState(false);

    const onClickLogin = () => {
        setIsLogined(true)
    }

    const onClickLogout = () => {
        setIsLogined(false)
    }
  return (
    <div>
      <ToolBar
        isLoggedIn = {isLoggedIn}
        onClickLogin = {onClickLogin}
        onClickLogout = {onClickLogout}
        />
        <div style={{padding :16}}> Lest STudy lets gooooo</div>
    </div>
  )
}

export default LandingPage
