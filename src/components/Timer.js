import React, { useState, useEffect } from 'react';

function Timer() {
    const [isRunning, setIsRunning] = useState(false);
    const [totalSeconds, setTotalSeconds] = useState(0);

    useEffect(() => {
        let timerInterval;
        if (isRunning) {
            timerInterval = setInterval(() => {
                setTotalSeconds(prevSeconds => prevSeconds + 1);
            }, 1000);
        } else {
            clearInterval(timerInterval);
        }

        return () => clearInterval(timerInterval);
    }, [isRunning]);

    const startTimer = () => {
        setIsRunning(true);
    };

    const stopTimer = () => {
        setIsRunning(false);
    };

    const formatTime = (time) => {
        return time < 10 ? "0" + time : time;
    };

    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return (
        <div>
            <div id="timer">{formatTime(hours)}:{formatTime(minutes)}:{formatTime(seconds)}</div>
            <button onClick={startTimer}>Start</button>
            <button onClick={stopTimer}>Stop</button>
            <h3>======================================================================</h3>
        </div>
    );
}

export default Timer;