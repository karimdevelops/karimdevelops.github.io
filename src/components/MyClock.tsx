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

  const tz = "Asia/Karachi";
  const formattedTime = new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    timeZone: tz,
  }).format(time);

  return (
    <div>
      <h3>{formattedTime}</h3>
    </div>
  );
}
