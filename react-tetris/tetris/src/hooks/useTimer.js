import {useState, useEffect, useCallback} from "react";

export const useTimer = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [reset, setReset] = useState(false); 
  //const [laps, setLaps] = useState([]); //may not need this

  useEffect(() => {
    let interval;

    if(isRunning) {
      interval = setInterval(
        () => prevElapsedTime => prevElapsedTime + 100
      );
    }

    if(!reset) {
      setIsRunning(false);
      setElapsedTime(0);
    }

    return () => clearInterval(interval)
    
  }, [isRunning, reset]);

  return [isRunning, setIsRunning, elapsedTime, setElapsedTime, reset, setReset];
};