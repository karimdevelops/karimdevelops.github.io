import { useEffect, useState } from "react";

export default function UserClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(timerId);
    };
  }, []);

  return (
    <div>
      <h3>{time.toLocaleTimeString()}</h3>
    </div>
  );
}
