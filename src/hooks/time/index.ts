import {useEffect, useRef, useState} from 'react';

interface Time {
  second: number;
  minute: number;
  hour: number;
}

function now():Date {
  return new Date();
}
function initialValueGenerator(){
  return ({
    second: now().getSeconds(),
    minute: now().getMinutes(),
    hour: now().getHours(),
  });
}

function useTime(initTime: Time = initialValueGenerator()): Time {
  const [second, setSecond] = useState(initTime.second);
  const [minute, setMinute] = useState(initTime.minute);
  const [hour, setHour] = useState(initTime.hour);
  const initRef = useRef(true);

  useEffect(() => {
    if(initRef.current) {
      return
    }
    if(second === 0) {
      setMinute(m => (m + 1) % 60);
    }
  }, [second]);

  useEffect(() => {
    if(initRef.current) {
      return
    }
    if(minute === 0) {
      setHour(h => (h + 1) % 24);
    }
  }, [minute]);

  useEffect(() => {
    initRef.current = false;
    const interval = window.setInterval(() => {
      setSecond(s => (s + 1) % 60);
    }, 1000);

    return () => window.clearInterval(interval);
  }, []);

  return {second, minute, hour};
}

export default useTime;
