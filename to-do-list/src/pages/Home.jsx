import styles from "./Home.module.css";
function Home() {
  return (
    <div className={styles.home}>
      <h1 className={styles.intro}>
        Organize your work and life, finally. <br />
        It helps you simplify and facilitate your life
      </h1>
      <p className={styles.underIntro}>
        Stay on top of your tasks with ease. Plan, prioritize, and accomplish
        everything that matters to you. Break down your goals into manageable
        steps. Whether it’s for work, personal projects, or daily routines, our
        app is designed to help you stay focused, reduce stress, and make the
        most of every day.
      </p>
    </div>
  );
}

export default Home;
