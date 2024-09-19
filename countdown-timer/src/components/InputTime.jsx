import React, { useState } from "react";
import styles from "./InputTime.module.css";

function InputTime({ remainTime, setRemainTime }) {
  const [days, setDays] = useState("");
  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");
  const [seconds, setSeconds] = useState("");

  const handleStart = (e) => {
    e.preventDefault();
    console.log(
      `Days: ${days}, Hours: ${hours}, Minutes: ${minutes}, Seconds: ${seconds}`
    );
    // Get current date and time
    const now = new Date();

    // Create a new Date object for the target date
    const targetDate = new Date(now);

    // Add days, hours, minutes, and seconds to the target date
    targetDate.setDate(targetDate.getDate() + parseInt(days || 0, 10));
    targetDate.setHours(targetDate.getHours() + parseInt(hours || 0, 10));
    targetDate.setMinutes(targetDate.getMinutes() + parseInt(minutes || 0, 10));
    targetDate.setSeconds(targetDate.getSeconds() + parseInt(seconds || 0, 10));

    // Calculate the remaining time in milliseconds
    const remainingTimeMs = targetDate.getTime() - now.getTime();

    // Set the remaining time
    setRemainTime(remainingTimeMs);

    setDays("");
    setHours("");
    setMinutes("");
    setSeconds("");
  };

  return (
    <form onSubmit={handleStart} className={styles.form}>
      <div className={styles.inputContainer}>
        <input
          className={styles.daysInput}
          type="number"
          placeholder="Days"
          value={days}
          onChange={(e) => setDays(e.target.value)}
        />
        <input
          type="number"
          placeholder="Hours"
          value={hours}
          onChange={(e) => setHours(e.target.value)}
        />
        <input
          type="number"
          placeholder="Minutes"
          value={minutes}
          onChange={(e) => setMinutes(e.target.value)}
        />
        <input
          className={styles.secondsInput}
          type="number"
          placeholder="Seconds"
          value={seconds}
          onChange={(e) => setSeconds(e.target.value)}
        />
      </div>
      <div className={styles.buttonContainer}>
        <button type="submit">{remainTime > 0 ? "Reset" : "Start"}</button>
      </div>
    </form>
  );
}

export default InputTime;
