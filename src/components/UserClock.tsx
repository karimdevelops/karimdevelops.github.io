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

  const formattedTime = new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  }).format(time);

  return (
    <div className="text-time">
      <h3 className="font-bold text-3xl">{formattedTime}</h3>
    </div>
  );
}
