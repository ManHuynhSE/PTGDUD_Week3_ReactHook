import React, { useEffect, useRef, useState } from "react";

function Bai5() {
  const [time, setTime] = useState(0);
  const ref = useRef(null);
  const [laps, setLaps] = useState([]);
  const [lapName, setLapName] = useState("");

  const inputRef = useRef(null);
  const start = () => {
    if (ref.current != null) return;
    ref.current = setInterval(() => {
      setTime((pre) => pre + 100);
    }, 100);
  };

  const pause = () => {
    clearInterval(ref.current);
    ref.current = null;
  };

  const reset = () => {
    pause();
    setTime(0);
  };
  const addLap = () => {
    setLaps((pre) => [
      ...pre,
      { name: lapName || `Lap ${pre.length + 1}`, time },
    ]);
    setLapName("");
    inputRef.current.focus();
  };

  const formatTime = (ms) => {
    const seconds = Math.floor(ms / 1000);
    const milliseconds = (ms % 1000) / 100;
    return `${seconds}.${milliseconds}s`;
  };

  return (
    <div>
      <h1>Stop Watch</h1>
      <h3>{formatTime(time)}</h3>
      <input
        ref={inputRef}
        type="text"
        value={lapName}
        onChange={(e) => setLapName(e.target.value)}
      />
      <h3></h3>
      <div>
        <button onClick={addLap}>Add Lap</button>
        <button onClick={start}>Start</button>
        <button onClick={pause}>Pause</button>
        <button onClick={reset}>Reset</button>
      </div>
      <h3>Lap</h3>
      <ul>
        {laps.map((lap, index) => (
          <li key={index}>
            {lap.name} - {formatTime(lap.time)}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Bai5;
