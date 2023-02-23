import React, {useState, useEffect} from 'react'




function Count(props) {
  const [count, setCount] = useState(0);

  useEffect(() =>{
    document.title = `you Clicked ${count} time`
  })
  return (
    <div>
      <p>총 {count} 번 클릭되었습니다.</p>
      <button onClick ={() => setCount(count +1)}>Click me</button>
    </div>
  )
}

export default Count


