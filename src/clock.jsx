import React, { useEffect, useState } from "react";


const DigitalClock=()=>{
    const[time,setTime]=useState(new Date())

    useEffect(()=>{
        const intervelId=setInterval(()=>{
            setTime(new Date())

        },1000)

        return()=>clearInterval(intervelId)
    },[])

    const formatTime=()=>{
        let hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        const meridiem= hours >= 12 ? 'PM':'AM';
        hours=hours%12||12

        return `${addZero(hours)}:${addZero(minutes)}:${addZero(seconds)} ${meridiem}`
    }

    const addZero=(number)=>{
       return(number<10 ?"0":"" )+number 

    }

    return(
        
        <div className="clock-container">
            <div className="clock">
                    <span>{formatTime()}</span>
                 
                    
            </div>
        </div>
    )

}

export default DigitalClock