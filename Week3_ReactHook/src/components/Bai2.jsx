import React, { useEffect, useState } from 'react'

function Bai2() {
    const [time,setTime] = useState(new Date())
    useEffect(()=>{
       
        const timer = setInterval(()=>{
            setTime(new Date());
        },1000)
       
        return ()=>{
            clearInterval(timer)
        }
       
    },[])
  return (
    <div>
      <h1>Clock</h1>
      <h2>{time.toLocaleTimeString()}</h2>
    </div>
  )
}

export default Bai2
