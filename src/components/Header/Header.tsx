import React from 'react';
import styles from './Header.module.scss';

const Header: React.FC = (props) => {
  return (
    <div className={styles.header}>
      <h1>HEADER</h1>
    </div>
  );
};

export default Header;
