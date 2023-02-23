import React from 'react'
import UseUserStatus from './UseUserStatus'

function UserStatus(props) {
    const isOnline = UseUserStatus(props.user.id);
    if(isOnline === null){
        return 'waiting'
    }
    return isOnline ? 'online' : 'offline'
  
  
}

function UserListItem(props){
    const isOnline = UseUserStatus(props.user.id)

return(
    <li style ={{ color: isOnline ? 'green':'black'}}>
        {props.user.name}
    </li>

)


}   
export default UserListItem
