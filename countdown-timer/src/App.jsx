import styles from "./App.module.css";
import { useState } from "react";
import Speedometer from "./components/Speedometer";
import { useEffect } from "react";
import InputTime from "./components/InputTime";

function convertMilliseconds(ms) {
  const days = Math.floor(ms / (24 * 60 * 60 * 1000));
  const hours = Math.floor((ms % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
  const minutes = Math.floor((ms % (60 * 60 * 1000)) / (60 * 1000));
  const seconds = Math.floor((ms % (60 * 1000)) / 1000);

  return { days, hours, minutes, seconds };
}

function App() {
  // const [remainTime, setRemainTime] = useState(
  //   new Date("08/30/2024 02:30:50").getTime() - new Date().getTime()
  // );
  const [remainTime, setRemainTime] = useState(0);
  const { days, hours, minutes, seconds } = convertMilliseconds(remainTime);
  useEffect(() => {
    if (remainTime > 0) {
      const intervalId = setInterval(() => {
        setRemainTime((remainTime) => remainTime - 1000);
        console.log(days, hours, minutes, seconds);
      }, 1000);

      return () => clearInterval(intervalId);
    } else setRemainTime("0");
  }, [days, hours, minutes, remainTime, seconds]);

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <img src="/logo.svg" alt="logo" />
        <InputTime setRemainTime={setRemainTime} />
        <div className={styles.speedosContainer}>
          <Speedometer
            LineColor="#f0c311"
            lineWidth="0.005rem"
            time={365}
            measure="Days"
          >
            {days}
          </Speedometer>
          <Speedometer LineColor="blue" time={24} measure="Hrs">
            {hours}
          </Speedometer>
          <Speedometer LineColor="red" time={60} measure="Min">
            {minutes}
          </Speedometer>
          <Speedometer time={60} measure="Sec" LineColor="#0f0">
            {seconds}
          </Speedometer>
        </div>
      </div>
    </main>
  );
}

export default App;
