import styles from './Home.module.scss';
import homeimage from '../../assets/homepage.jpg';

const Home = () => {
  return (
    <section id="home" className={styles.section}>
      <div>
        <div className={styles.homecontainer}>
          <div>
            <h1>Hlenamakeup</h1>
            <p>
              Makeup Content Creator
            </p>
          </div>
          
          <div className={styles["photo-container"]}>
            <img src={homeimage} alt="HomePage Imagine" />
          </div>
        </div>

        <button type="button">See more</button>
      </div>
    </section>
  );
};

export default Home;