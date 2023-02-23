import React from 'react'

const students = [
{
    id : 1,
    name : "Jaeyong",

},
{    id : 2,
    name : "Grey",
},
{    id : 3,
    name : "Red",
},
{    id : 4,
    name : "Anna",
},





];

function AttendanceBook(props) {

  return (
    <div>
        <ul>
       {students.map((student) => {
        return <li key={student.id}>{student.name}</li>
       })}
        </ul>
    </div>
  )
    }       

export default AttendanceBook
