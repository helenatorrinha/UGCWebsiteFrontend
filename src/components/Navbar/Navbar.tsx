import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import styles from './Navbar.module.scss';
import iconImage from '../../assets/hlenamakeup.png';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scrolling to adjust the icon size
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`${styles.container} ${isScrolled ? styles.smallNavBar : ''}`}>
      <img
        src={iconImage}
        alt="Icon"
        className={styles.icon}
      />
      <nav className={styles.nav}>
        <ul>
        <li>
            <Link to="home" smooth duration={100} >
              HOME
            </Link>
          </li>
          <li>
            <Link to="about" smooth duration={100} offset={-60}>
              ABOUT ME
            </Link>
          </li>
          <li>
            <Link to="what-is-ugc" smooth duration={100} offset={-60}>
              WHAT IS UGC
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;