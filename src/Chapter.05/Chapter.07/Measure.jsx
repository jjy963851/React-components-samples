import React, {useState, useEffect, useCallback} from 'react'

function Measure(props) {
    const [height, setHeight] = useState(0);

    const measureRef = useCallback(node => {
        if(node != null) {
            setHeight(node.getBoundingClientRect().height);
        }

    }, [])


  return (
    <div>
       <h1 ref={measureRef}>안녕 리엑트</h1>
       <h2>위 헤더의 높이는 {Math.round(height)}입니다</h2>
    </div>
  )
}

export default Measure
