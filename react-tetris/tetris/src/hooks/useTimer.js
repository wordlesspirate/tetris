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

}