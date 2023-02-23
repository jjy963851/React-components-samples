import React from 'react'
import Comment from './Comment'


const comments =[
{
    name: "jy",
    comment: "what is up ",
},
{
    name: "MiChale",
    comment :"I will come back to you"
},
{
    name: "Legend",
    comment: "Hello Im a Legend",
},

]

function CommentList(props) {
  return (
    <div>
        {comments.map((comments) => {
            return(
        <Comment name = {comments.name} comments = {comments.comment}></Comment>
        )
        } )}
    </div>
  )
}

export default CommentList
