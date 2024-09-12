import CategoriesList from "./CategoriesList";
import CategoryItem from "./CategoryItem";
import CircularProgressBar from "./CircularProgressBar";
import styles from "./Result.module.css";
const bmiCategories = [
  {
    category: "Very severely underweight",
    minBMI: 0,
    maxBMI: 15.9,
    message: "You are very severely underweight.",
  },
  {
    category: "Severely underweight",
    minBMI: 16.0,
    maxBMI: 16.9,
    message: "You are severely underweight.",
  },
  {
    category: "Underweight",
    minBMI: 17.0,
    maxBMI: 18.4,
    message: "You are underweight.",
  },
  {
    category: "Normal weight",
    minBMI: 18.5,
    maxBMI: 24.9,
    message: "You have a normal body weight.",
  },
  {
    category: "Overweight",
    minBMI: 25.0,
    maxBMI: 29.9,
    message: "You are overweight.",
  },
  {
    category: "Obese Class I",
    minBMI: 30.0,
    maxBMI: 34.9,
    message: "You are in Obese Class I.",
  },
  {
    category: "Obese Class II",
    minBMI: 35.0,
    maxBMI: 39.9,
    message: "You are in Obese Class II.",
  },
  {
    category: "Obese Class III",
    minBMI: 40.0,
    maxBMI: Infinity,
    message: "You are in Obese Class III.",
  },
];

function Result({ result }) {
  return (
    <div className={styles.overlay}>
      <div className={styles.card}>
        <h2>
          {
            bmiCategories.find((item) => {
              return result >= item.minBMI && result <= item.maxBMI;
            }).message
          }
        </h2>
        <CircularProgressBar result={result} fontSize="3rem" range={40} />
        <CategoriesList>
          <CategoryItem bmiCategories={bmiCategories} result={result} />
        </CategoriesList>
      </div>
    </div>
  );
}

export default Result;
