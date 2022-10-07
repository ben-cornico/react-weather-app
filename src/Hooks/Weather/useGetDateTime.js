import React, {useEffect, useState} from 'react';

function useGetDateTime (timezoneOffSet, format, dt) {
    const [date, setDate] = useState("");

    useEffect(() => {
        const d = new Date(dt*1000);
        const localTime = d.getTime();
        const localOffSet = d.getTimezoneOffset() * 60000;
        const utc = localTime + localOffSet;
        const resultDate = utc + (1000 * timezoneOffSet);
        if(format === "currentDate") {
            setDate(new Date(resultDate).toLocaleDateString('en-US', { hour: 'numeric', hour12: true, minute: 'numeric', month:"long", day: "numeric"}))
        } else if(format === "dailyDate") {
            setDate(new Date(resultDate).toLocaleDateString('en-US', {month:"long", day: "numeric"}))
        } else if(format === "hourlyUpdate") {
            setDate(new Date(resultDate).toLocaleString('en-US',{hour: 'numeric', hour12: true}))

        }
        
    }, [dt])
  return date
}

export default useGetDateTime