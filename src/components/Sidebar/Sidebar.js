import React, { useState } from 'react';
import styles from './Sidebar.module.css';
import Profile from './Profile';

const Sidebar = () => {

  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const handleCheckoutClick = () => {
    setIsCheckoutOpen(!isCheckoutOpen);
  };

  return (
    <div className={styles["container"]}>
      <Profile />
        
    </div>
  );
};

export default Sidebar;
