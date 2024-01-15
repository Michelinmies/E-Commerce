import React, { useState } from 'react';
import styles from './ShoppingCartIcon.module.css'

const ShoppingCartIcon = () => {
  const [cartOpen, setCartOpen] = useState(false);

  const toggleCart = () => {
    setCartOpen(!cartOpen);
  };

  return (
    <div className={styles["shopping-cart-icon-container"]}>
      {/* Shopping Cart Icon */}
      <div className={styles["shopping-cart-icon"]} onClick={toggleCart}>
        🛒
      </div>

      {/* Shopping Cart Modal */}
      {cartOpen && (
        <div className={styles["shopping-cart-modal"]}>
          {/* Render your shopping cart content here */}
          <p>Cart is open!</p>
          {/* You can display the actual shopping cart content or any other relevant information */}
        </div>
      )}
    </div>
  );
};

export default ShoppingCartIcon;
