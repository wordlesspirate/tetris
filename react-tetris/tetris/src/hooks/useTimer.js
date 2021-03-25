import {useState, useEffect} from "react";

export const useTimer = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    let interval;

    if(isRunning) {
      interval = setInterval(
        () => prevElapsedTime => prevElapsedTime + 100
      );
    }

    return () => clearInterval(interval)
    
  }, [isRunning]);

  return [isRunning, setIsRunning, elapsedTime, setElapsedTime];

};

export const useStopWatch = () => {

  const [laps, setLaps] = useState([]); //may not need this
  const [isRunning, setIsRunning, elapsedTime, setElapsedTime] = useTimer();

  const handleReset = () => {
    setIsRunning(false);
    setElapsedTime(0);
    setLap([]); //may not need this
  };

  //may not need this 
  const handleAddLap = () => {
    const prevTotal = 
    laps.length > 0 ? laps.reduce((acc, curr) => acc + curr, 0) : 0;

    const currentLap = laps.length > 0 ? elapsedTime - prevTotal : elapsedTime;

    isRunning && setLaps([...laps, currentLap]);
  };

  return {
    elapsedTime: elapsedTime.toFixed(1), laps,
    addLaps: () => handleAddLap(),
    resetTimer: () => handleReset(),
    startTime: () => setIsRunning(true),
    stopTimer: () => setIsRunning(false),
    isRunning
  };

};