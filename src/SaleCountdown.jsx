import { useState, useEffect } from "react";

const ReverseCountdown = () => {
  const [count, setCount] = useState(
    () => Number(localStorage.getItem("count")) || 43200
  );

  useEffect(() => {
    const id = setInterval(() => {
      setCount(prev => {
        const newCount = prev - 1;
        localStorage.setItem("count", newCount);
        return newCount;
      });
    }, 1000);

    return () => clearInterval(id);
  }, []);

  const hours = Math.floor(count / 3600);
  const minutes = Math.floor((count % 3600) / 60);
  const seconds = count % 60;

  return (
    <p>
      Sale ends in <span style={{color:"red"}}>{hours}h {minutes}m {seconds}s</span>
    </p>
  );
};
export default ReverseCountdown;