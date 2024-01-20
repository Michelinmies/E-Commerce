// ShoppingCartButton.js
import React, { useState, useEffect } from 'react';
import styles from './ShoppingCartButton.module.css';

const ShoppingCartButton = ({ calculateCartTotal, cart, setCart }) => {
  const [cartOpen, setCartOpen] = useState(false);
  const [orderSubmitted, setOrderSubmitted] = useState(false);

  const toggleCart = () => {
    setCartOpen(!cartOpen);
  };

  const handlePurchaseClick = () => {
    if (cart.length === 0) {
      alert('Your shopping cart is empty! Please add some items before making a purchase.');  
      return
    }

    setCartOpen(!cartOpen);
    setOrderSubmitted(true);
    setCart([]);
  };

  useEffect(() => {
    let timer;

    if (orderSubmitted) {
      timer = setTimeout(() => {
        setOrderSubmitted(false);
      }, 4000);
    }

    return () => clearTimeout(timer);
  }, [orderSubmitted]);

  return (
    <div className={`${styles['shopping-cart-icon-container']} ${cartOpen && styles['big-cart']}`}>
      {/* Shopping Cart Icon */}
      <div className={styles['shopping-cart-icon']} onClick={toggleCart}>
        🛒
      </div>

      {/* Shopping Cart Modal */}
      {cartOpen && (
        <div className={styles['shopping-cart-modal']}>
          {/* Render your shopping cart content here */}
          <div className={styles['cart-content']}>
            <div className={styles['cart-total']}>
              <p>Total: ${calculateCartTotal().toFixed(2)}</p>
            </div>
            <div className={styles['cart-buttons']}>
              <button className={styles['purchase-button']} onClick={handlePurchaseClick}>
                Purchase
              </button>
            </div>
          </div>

          <div className={styles['cart-items']}>
            {cart.map((item, index) => (
              <div key={index} className={styles['cart-item']}>
                <p>{item.name}</p>
                <p>${item.price.toFixed(2)}</p>
                {/* Add more details as needed */}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Order submitted message */}
      {orderSubmitted && (
        <div className={styles['order-submission-message']}>
          Order was submitted successfully!
        </div>
      )}
    </div>
  );
};

export default ShoppingCartButton;
