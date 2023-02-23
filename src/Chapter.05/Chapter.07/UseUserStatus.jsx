import React,{useState, useEffect} from 'react'

function UseUserStatus(userId) {

    const [isOnline, setIsOnline] = useState(null)

    useEffect(() =>{
        function handleStatusChange(status){
            setIsOnline(status.isOnline)
        }
        ServerAPI.subscribeUserStatus(userId, handleStatusChange)
        return () =>{
            ServerAPI.unsubscribeUserStatus(userId,handleStatusChange)
        }

    })
    return isOnline
  return (
    <div>
      
    </div>
  )
}

export default UseUserStatus
