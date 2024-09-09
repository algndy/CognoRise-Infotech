import { useState } from "react";
import styles from "./App.module.css";
import SlideButton from "./components/SlideButton";
import SlideRuler from "./components/SlideRuler";
import ToggleSwitch from "./components/ToggleSwitch";
import Button from "./ui/Button";
function App() {
  //gender and age does not play a role in the BMI equation But it was added so that the application can be expanded to compute for other things.
  const [gender, setGender] = useState();
  const [height, setHeight] = useState();
  const [weight, setWeight] = useState();
  const [result, setResult] = useState();
  const [age, setAge] = useState();
  console.log(gender);
  console.log(height);
  console.log(weight);
  console.log(age);
  function CalculateResult() {
    const result = weight / Math.pow(height / 100, 2);
    setResult(result);
    console.log(result);
  }
  return (
    <div className={styles.app}>
      <main className={styles.container}>
        <ToggleSwitch setState={setGender} />
        <SlideRuler setState={setHeight} title="height" unit="cm" />
        <div className={styles.slideButtonsContainer}>
          <SlideButton
            setState={setWeight}
            title="weight"
            unit="kg"
            range={300}
            start={70}
          />
          <SlideButton
            setState={setAge}
            title="age"
            unit="year"
            range={100}
            start={25}
          />
        </div>
        <div className={styles.calculateButton}>
          <Button type="big" onClick={CalculateResult}>
            →
          </Button>
          <span>Calculate</span>
        </div>
      </main>
    </div>
  );
}

export default App;
