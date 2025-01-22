import { Link } from 'react-scroll';
import styles from './Navbar.module.scss';

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        <li><Link to="about" smooth duration={500}>About Me</Link></li>
        <li><Link to="what-is-ugc" smooth duration={500}>What is UGC</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;