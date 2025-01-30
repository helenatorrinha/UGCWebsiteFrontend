import styles from './AboutMe.module.scss';
import aboutmeimage from '../../assets/aboutme.jpg';

const AboutMe = () => {
  return (
    <section id="about" className={styles.section}>
      <h1>About Me</h1>
      <p>
        Welcome to the About Me section. Here, you'll learn more about the inspiration
        behind this project and the passion that drives it.
      </p>
      <div className={styles["photo-container"]}>
            <img src={aboutmeimage} alt="About Me Imagine" />
      </div>
    </section>
  );
};

export default AboutMe;

