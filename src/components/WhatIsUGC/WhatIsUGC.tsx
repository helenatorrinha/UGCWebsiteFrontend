import styles from './WhatIsUGC.module.scss';
import whatisugc from '../../assets/whatisugc.jpg';

const WhatIsUGC = () => {
    return (
      <div id="what-is-ugc" className={styles['whatisugc']}> 
        <img src={whatisugc} alt="what is ugc" />
        <div>
          <h1>What is UGC</h1>
          <p>
          User-Generated Content (UGC) is...
          </p>
        </div>
      </div>
    );
  };
  
  export default WhatIsUGC;

  