import React,{useState, useEffect} from 'react'

function NameForm(props) {
    const [value, setValue] = useState('');

    const handleChange = (event) =>{
        setValue(event.target.value.toUpperCase());
    }
    const handleSubmit = (event) =>{
        alert('User Name: ' + value);
        event.prevenDefault();
        
    }

  return (
   <form onSubmit={handleSubmit}>
        <label>
            Name :
            <input type= "text" value = {value} onChange = {handleChange}></input>

        </label>
        <button type = "submit"> Submit</button>
   </form>
  )
}

export default NameForm
