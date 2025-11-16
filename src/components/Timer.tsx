import { useEffect, useState, useRef } from "react"

export const Timer = ({ timeOption, onFinished } : {timeOption : number; onFinished: () => void} ) => {
    const [seconds, setSeconds] = useState(timeOption);
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setSeconds((prevSeconds) => {
                const newSeconds = prevSeconds - 1;
                if (newSeconds <= 0) {
                    onFinished();
                    if (intervalRef.current) {
                        clearInterval(intervalRef.current);
                    }
                }
                return Math.max(0, newSeconds);
            });
        }, 1000);

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, [onFinished]);
    
    return (
        <div className="mt-10 text-xl">  
            <span className="timer">Time: {seconds}s</span>
        </div>
    )
}