import React, {useEffect, useState,useRef} from 'react'

export default function Counter() {
    const [nextYear] = useState(new Date('Jan 1, 2021 00:00:00'));
    const [timeNow, setTimeNow] = useState(new Date());

    const [diff, setDiff] = useState(nextYear - timeNow);

    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [mins, setMins ]= useState(0);
    const [secs, setSecs ]= useState(0);

    useEffect(() => {
        
        const updateCounter = setInterval(() => {

                setTimeNow(new Date())
                setDiff(nextYear - timeNow)
                setDays(Math.floor(diff / (1000*60*60*24)));
                setHours(Math.floor((diff % (1000*60*60*24)) / (1000*60*60)));
                setMins(Math.floor((diff % (1000*60*60)) / (1000*60)));
                setSecs(Math.floor((diff % (1000*60)) / (1000)));
                
            }, 1000);

        return () => clearInterval(updateCounter);
 
    })
    

    
    
    
    return (
        <div className="counter">
            <div className="days">
                <div className="number">{days}</div>
                <div className="text">Days</div>
            </div>
            <div className="hours">
                <div className="number">{hours < 10 ? `0${hours}` : hours}</div>
                <div className="text">Hours</div>
            </div>
            <div className="mins">
                <div className="number">{mins < 10 ? `0${mins}` : mins}</div>
                <div className="text">Mins</div>
            </div>
            <div className="seconds">
                <div className="number">{secs < 10 ? `0${secs}` : secs}</div>
                <div className="text">Seconds</div>
            </div>
        </div>
    )
}
